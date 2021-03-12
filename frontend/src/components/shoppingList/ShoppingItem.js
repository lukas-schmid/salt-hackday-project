import React from "react";

const shoppingItem = ({ items, removeItem, toggleDone }) => {
  return items === undefined
    ? null
    : items.map((food, index) => {
        return (
          <article
            key={index}
            className={`shoppingItem shoppingItem__done--${food.done}`}
          >
            <div
              className="shoppingItem__text"
              onClick={() => toggleDone(food)}
            >
              <p>{food?.name}</p>
            </div>
            <div className="shoppingItem__remove">
              <button
                onClick={() => removeItem(index)}
                type="button"
                className={`shoppingItem__remove--button shoppingItem__remove--button--done--${food.done}`}
              >
                -
              </button>
            </div>
          </article>
        );
      });
};

export default shoppingItem;
