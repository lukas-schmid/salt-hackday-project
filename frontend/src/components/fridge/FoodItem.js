import React from "react";

const FoodItem = () => {
  return (
    <article className="foodItem">
      <div className="foodItem__image">
        <img src="" alt="" />
      </div>
      <div className="foodItem__text">
        <p>Food-Name here</p>
      </div>
      <div className="foodItem__remove">
        <button type="button" className="foodItem__remove--button">
          -
        </button>
      </div>
    </article>
  );
};

export default FoodItem;
