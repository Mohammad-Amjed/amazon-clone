import React from "react";
import PageProduct from "./PageProduct";
import "./ProductPage.css";

function ProductPage0() {
  return (
    <div className="product">
      <div className="product__left">
        <PageProduct
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default ProductPage0;
