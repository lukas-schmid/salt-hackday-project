import React from "react";

const shoppingItem = ({ items, removeItem }) => {
  return items === undefined
    ? null
    : items.map((food, index) => {
        return (
          <article key={index} className="shoppingItem">
            <div className="shoppingItem__text">
              <p>{food}</p>
            </div>
            <div className="shoppingItem__remove">
              <button
                onClick={() => removeItem(index)}
                type="button"
                className="shoppingItem__remove--button"
              >
                -
              </button>
            </div>
          </article>
        );
      });
};

export default shoppingItem;
