import React from "react";
import PageProduct from "./PageProduct";
import "./ProductPage.css";

function ProductPage4() {
  return (
    <div className="product">
      <div className="product__left">
        <PageProduct
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      
    </div>
  );
}

export default ProductPage4;
