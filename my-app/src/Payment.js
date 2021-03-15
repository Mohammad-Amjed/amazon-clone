import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { db, auth, timestamp } from "./firebase";
import { getBasketTotal } from "./reducer";
import CheckoutProduct from "./CheckoutProduct";
import { useHistory, Link, Redirect } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
function Payment() {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState();
  const [area, setArea] = useState();
  const [street, setStreet] = useState();
  const [building, setBuilding] = useState();
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const createdAt = timestamp();
  user &&
    db
      .collection("users")
      .doc(user.uid)
      .collection("info")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setName(doc.data().name);
          setArea(doc.data().area);
          setBuilding(doc.data().building);
          setMobile(doc.data().mobile);
          setStreet(doc.data().street);
          setCity(doc.data().city);
        });
      });
      alert(basket);
  const addToCart = () => {
    {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .add({
          basket,
          amount: getBasketTotal(basket) + 30,
          createdAt,
        })
        .then(
          dispatch({
            type: "EMPTY_BASKET",
          }),
          history.replace("/orders")
        );
    }
  };

  return basket.length ? (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link href="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment__title">
            <h3>Your Address</h3>
            <Link to="/new-address">
              <button>Ship to another address</button>
            </Link>
          </div>
          <div className="payment__address">
            <div className="address_option_field">
              <h4>Full name: </h4>
              <span>{name}</span>
            </div>
            <div className="address_option_field">
              <h4>Mobile: </h4>
              <span>{mobile}</span>
            </div>
            <div className="address_option_field">
              <h4>City: </h4>
              <span>{city}</span>
            </div>
            <div className="address_option_field">
              <h4>Area: </h4>
              <span>{area}</span>
            </div>
            <div className="address_option_field">
              <h4>Street: </h4>
              <span>{street}</span>
            </div>
            <div className="address_option_field">
              <h4>Building: </h4>
              <span>{building}</span>
            </div>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_infoSection">
          <div className="payment_info">
            <h3>
              Payment Method : <span>CASH ON DELIVERY</span>
            </h3>
            <h3>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      {/* Part of the homework */}
                      Subtotal ({basket.length} items):
                      <span>
                        <strong>{" " + value}</strong>
                      </span>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                suffix={" AED"}
              />
            </h3>
            <h3>
              Delevery fees : <span> 30 AED</span>
            </h3>
            <h3>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      {/* Part of the homework */}
                      Total :
                      <span>
                        <strong>{" " + value}</strong>
                      </span>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket) + 30} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                suffix={" AED"}
              />
            </h3>
            <button className="subtotal__button" onClick={addToCart}>
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    Redirect("/")
  );
}

export default Payment;
