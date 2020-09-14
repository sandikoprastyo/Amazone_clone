import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span role="img" aria-label="start">
              🌟
            </span>
          ))}
      </div>
      <img src={image} alt="img" />
      <button onClick={addTobasket}>add to basket</button>
    </div>
  );
};

export default Product;
