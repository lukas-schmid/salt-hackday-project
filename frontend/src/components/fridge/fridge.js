import React, { useState } from "react";
import InputForm from "./InputForm";
import FoodList from "./FoodList";
import "./Fridge.css";

const Fridge = () => {
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
    <section className="fridgePage">
      <InputForm handleFoodInput={handleFoodInput} />
      <FoodList items={foodStore} removeItem={removeItem} />
    </section>
  );
};

export default Fridge;
