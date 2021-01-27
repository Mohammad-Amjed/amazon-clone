import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";

function Order({ order }) {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="order">
      <h2>Order</h2>
      {order.data.createdAt && (
        <p>{moment(order.data.createdAt.toDate()).calendar()}</p>
      )}

      <p className="order__id">
        <strong>order id :</strong>
        <small> {order.id}</small>
      </p>
      {order.data.basket &&
        order.data.basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
      {order.data.basket && (
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order__total">Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount}
          displayType={"text"}
          thousandSeparator={true}
          suffix={" AED"}
        />
      )}
    </div>
  );
}

export default Order;
