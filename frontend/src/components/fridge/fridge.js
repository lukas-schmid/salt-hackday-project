import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import FoodList from "./FoodList";
import { storeLocalStorage } from "../../helperFunctions/helperFunctions";
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

  useEffect(() => {
    const strValue = foodStore.join(",");
    storeLocalStorage("fridge", strValue);
  }, [foodStore]);

  return (
    <section className="fridgePage">
      <InputForm handleFoodInput={handleFoodInput} />
      <FoodList items={foodStore} removeItem={removeItem} />
    </section>
  );
};

export default Fridge;
