import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "./shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const ShoppingCtx = useContext(ShoppingContext);
  const { addToBasket } = ShoppingCtx;
  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, title, rating, price } });
  };
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product_price">{price}</p>
      </div>
      <button className="product_button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
