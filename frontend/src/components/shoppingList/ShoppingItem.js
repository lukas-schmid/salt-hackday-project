import React from "react";

const shoppingItem = () => {
  return (
    <article className="shoppingItem">
      <div className="shoppingItem__text">
        <p>Food-Name here</p>
      </div>
      <div className="shoppingItem__remove">
        <button type="button" className="shoppingItem__remove--button">
          -
        </button>
      </div>
    </article>
  );
};

export default shoppingItem;
