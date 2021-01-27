import React from "react";
import PageProduct from "./PageProduct";
import "./ProductPage.css";

function ProductPage1() {
  return (
    <div className="product">
      <div className="product__left">
        <PageProduct
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
    </div>
  );
}

export default ProductPage1;
