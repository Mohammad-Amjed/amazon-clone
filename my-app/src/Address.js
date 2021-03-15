import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Address.css";

function Address() {
  const [{ user }] = useStateValue();
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState();
  const [area, setArea] = useState();
  const [street, setStreet] = useState();
  const [building, setBuilding] = useState();
  const [address, setAddress] = useState(false);

  const history = useHistory();
  const save = () => {
   
      db
        .collection("users")
        .doc(user.uid)
        .collection("info")
        .doc("info")
        .set({
          name,
          mobile,
          city,
          area,
          street,
          building,
        })
        .then(history.push("./payment"));
  };
  console.log("ant thing");

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
          setName(doc.data().name);
          setArea(doc.data().area);
          setBuilding(doc.data().building);
          setMobile(doc.data().mobile);
          setStreet(doc.data().street);
          setCity(doc.data().city);
        });
      });

  return !address ? (
    <div className="address" style={{ display: "flex" }}>
      <Link to="/">
        <img
          className="address__image"
          src="https://images-na.ssl-images-amazon.com/images/G/39/x-locale/checkout/checkout-spc-address-banner._CB429584519_.gif"
        />
      </Link>
      <div className="adress_container">
        <form className="address__form">
          <h5>Full name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <h5>Mobile</h5>
          <input
            type="text"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          ></input>

          <h5>City</h5>
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <h5>Area</h5>
          <input
            type="text"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
            }}
          ></input>
          <h5>Street</h5>
          <input
            type="text"
            value={street}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          ></input>
          <h5>Building name / floor / villa, apartment number</h5>
          <input
            type="text"
            value={building}
            onChange={(e) => {
              setBuilding(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={save} className="address__save">
            Save
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="address_option">
      {history.push("/payment")}
      {/* <h2>you address is :</h2>
      <div className="address_option_field">
        <h3>Full name: </h3>
        <span>{name}</span>
      </div>
      <div className="address_option_field">
        <h3>Mobile: </h3>
        <span>{mobile}</span>
      </div>
      <div className="address_option_field">
        <h3>City: </h3>
        <span>{city}</span>
      </div>
      <div className="address_option_field">
        <h3>Area: </h3>
        <span>{area}</span>
      </div>
      <div className="address_option_field">
        <h3>Street: </h3>
        <span>{street}</span>
      </div>
      <div className="address_option_field">
        <h3>Building: </h3>
        <span>{building}</span>
      </div>
      <Link to="/payment">
        <button>use this address</button>
      </Link>
      <Link to="/new-address">
        <button>Ship to another address</button>
      </Link> */}
    </div>
  );
}

export default Address;
