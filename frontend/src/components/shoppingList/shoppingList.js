import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items, removeItem }) => {
  return (
    <section className="shoppingList">
      <ShoppingItem items={items} removeItem={removeItem} />
    </section>
  );
};

export default ShoppingList;
