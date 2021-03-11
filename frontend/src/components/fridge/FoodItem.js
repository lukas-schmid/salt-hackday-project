import React from "react";

const FoodItem = ({ items, removeItem }) => {
  return items === undefined
    ? null
    : items.map((food, index) => {
        return (
          <article key={index} className="foodItem">
            <div className="foodItem__text">
              <p>{food}</p>
            </div>
            <div className="foodItem__remove">
              <button
                onClick={() => removeItem(index)}
                type="button"
                className="foodItem__remove--button"
              >
                -
              </button>
            </div>
          </article>
        );
      });
};

export default FoodItem;
