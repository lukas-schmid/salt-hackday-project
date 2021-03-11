import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import ShoppingList from "./ShoppingList";
import { storeLocalStorage } from "../../helperFunctions/helperFunctions";
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

  useEffect(() => {
    const strValue = foodStore.join(",");
    storeLocalStorage("shoppingList", strValue);
  }, [foodStore]);

  return (
    <section className="shoppingPage">
      <InputForm handleFoodInput={handleFoodInput} />
      <ShoppingList items={foodStore} removeItem={removeItem} />
    </section>
  );
};

export default Shopping;
