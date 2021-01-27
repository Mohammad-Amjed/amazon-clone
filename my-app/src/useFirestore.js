import { useState, useEffect } from "react";
import { db } from "./firebase";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useStateValue } from "./StateProvider";

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);
  const [{ user }] = useStateValue();
  user &&
    useEffect(() => {
      const unsub = db
        .collection(collection)
        .doc(user.uid)
        .collection("info")
        .onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
        });
      return () => unsub();
    }, [collection]);
  return { docs };
}

export default useFirestore;
