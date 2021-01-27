import React from "react";
import "./PageProduct.css";
import { useStateValue } from "./StateProvider";
import { useHistory, Link } from "react-router-dom";

function PageProduct({ id, title, image, rating, price, route }) {
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
    <div className="pageProduct" onClick={handleClick}>
      <div className="pageProduct_left">
        {" "}
        <img src={image} alt="" />
      </div>
      <div className="pageProduct_right">
        <center>
          <div class="pageProduct__info">
            <p>{title}</p>
            <p class="pageProduct__price">
              <strong>Price: {price}</strong>
              <small> AED</small>
            </p>
            <div class="pageProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <span>⭐</span>
                ))}
            </div>
          </div>
          <button onClick={addToBasket}>Add to basket</button>
        </center>
      </div>
    </div>
  );
}

export default PageProduct;
