import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory, Link } from "react-router-dom";
import { db, auth, timestamp } from "./firebase";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [button, setButton] = useState("");
  const createdAt = timestamp();
  const [address, setAddress] = useState(false);
  // const total = getBasketTotal(basket) + 30;
  // const addToCart = () => {
  //   {
  //     db.collection("users")
  //       .doc(user.uid)
  //       .collection("orders")
  //       .add({
  //         basket,
  //         amount,
  //         createdAt,
  //       })
  //       .then(
  //         dispatch({
  //           type: "EMPTY_BASKET",
  //         }),
  //         history.replace("/orders")
  //       );
  //   }
  // };
  user &&
    db
      .collection("users")
      .doc(user.uid)
      .collection("info")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          doc.data() && setAddress(true);
          console.log(address);
        });
      });
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        suffix={" AED"}
      />

      {auth.onAuthStateChanged(function (user) {
        if (user) {
          setButton("./address");
        } else {
          !address ? setButton("./cart-login") : setButton("./payment");
        }
      })}

      <Link to={button}>
        <button className="subtotal__button">proceed to checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
