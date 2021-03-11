import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ items, removeItem }) => {
  return (
    <section className="fridgeList">
      <FoodItem items={items} removeItem={removeItem} />
    </section>
  );
};

export default FoodList;
