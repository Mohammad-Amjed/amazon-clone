import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useHistory, Link } from "react-router-dom";

function Product({ id, title, image, rating, price, route, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const handleClick = () => {
    history.push(route);
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div class="Product" onClick={handleClick}>
      <div class="product__info">
        <p>{title}</p>
        <p class="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div class="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="image" />
      {!hideButton && <button onClick={addToBasket}>Add to basket</button>}
    </div>
  );
}

export default Product;
