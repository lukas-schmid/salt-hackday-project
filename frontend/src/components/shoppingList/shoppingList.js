import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items, removeItem, toggleDone }) => {
  return (
    <section className="shoppingList">
      <ShoppingItem
        items={items}
        removeItem={removeItem}
        toggleDone={toggleDone}
      />
    </section>
  );
};

export default ShoppingList;
