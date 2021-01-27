import React from "react";
import PageProduct from "./PageProduct";
import "./ProductPage.css";

function ProductPage2() {
  return (
    <div className="product">
      <div className="product__left">
        <PageProduct
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
    </div>
  );
}

export default ProductPage2;
