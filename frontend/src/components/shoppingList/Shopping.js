import React, { useState } from "react";
import InputForm from "./InputForm";
import ShoppingList from "./ShoppingList";
import "./Shopping.css";

const Shopping = () => {
  const [foodStore, setFoodStore] = useState([]);

  const handleFoodInput = (item) => {
    setFoodStore([...foodStore, item]);
  };

  const removeItem = (index) => {
    const newFoodStore = [...foodStore];
    newFoodStore.splice(index, 1);
    setFoodStore(newFoodStore);
  };
  return (
    <section className="shoppingPage">
      <InputForm handleFoodInput={handleFoodInput} />
      <ShoppingList items={foodStore} removeItem={removeItem} />
    </section>
  );
};

export default Shopping;
