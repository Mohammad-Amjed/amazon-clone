import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Address.css";

function NewAddress() {
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
    user &&
      db
        .collection("users")
        .doc(user.uid)
        .collection("info")
        .doc("info")
        .update({
          name,
          mobile,
          city,
          area,
          street,
          building,
        })
        .then(history.push("./payment"));
  };
  return (
    <div className="address">
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
  );
}

export default NewAddress;
