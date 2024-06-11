import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1234569"
          title="Full HD 1080P Video Webcam and Wide Angle Camera with Built-in Microphone and Rotatable Tripod, for Laptop"
          image="https://m.media-amazon.com/images/I/51EPhWPDRhL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          price={30.99}
        />
        <Product
          id="2"
          title="Full HD 1080P Video Webcam and Wide Angle Camera"
          image="https://m.media-amazon.com/images/I/71xWh67sBNL._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}
          price={49.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="3"
          title="Samsung Bluetooth Wireless Mouse Slim"
          image="https://m.media-amazon.com/images/I/21GJyJmHEsL._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}
          price={47.59}
        />

        <Product
          id="4"
          title="Dell USB 3.0 Ultra HD/4K Triple Display Docking Station (D3100), Black"
          image="https://m.media-amazon.com/images/I/61iTFOhbBLL._AC_UL480_FMwebp_QL65_.jpg"
          rating={3}
          price={34.99}
        />

        <Product
          id="1434569"
          title="BESIGN LS03 Aluminum Laptop Stand"
          image="https://m.media-amazon.com/images/I/71G8rdQin3L._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}
          price={15.75}
        />
      </div>
      <div className="products_row">
        <Product
          id="6"
          title="Laptop Backpack,Business Travel Anti Theft Slim Durable Laptops Backpack"
          image="https://m.media-amazon.com/images/I/81RIIHRsxEL._AC_SY450_.jpg"
          rating={4}
          price={28.39}
        />
      </div>
    </>
  );
};

export default Products;
