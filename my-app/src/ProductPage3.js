import React from "react";
import PageProduct from "./PageProduct";
import "./ProductPage.css";

function ProductPage3() {
  return (
    <div className="product">
      <div className="product__left">
        <PageProduct
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
    </div>
  );
}

export default ProductPage3;
