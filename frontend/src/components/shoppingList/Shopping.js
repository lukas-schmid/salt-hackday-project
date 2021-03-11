import React, { useState, useEffect, useRef } from "react";
import InputForm from "./InputForm";
import ShoppingList from "./ShoppingList";
import {
  storeLocalStorage,
  getLocalStorage,
} from "../../helperFunctions/helperFunctions";
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

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const strValue = foodStore.join(",");
    storeLocalStorage("shoppingList", strValue);
  }, [foodStore]);

  useEffect(() => {
    if (localStorage.getItem("shoppingList")) {
      setFoodStore(getLocalStorage("shoppingList"));
    }
  }, []);

  return (
    <section className="shoppingPage">
      <InputForm handleFoodInput={handleFoodInput} />
      <ShoppingList items={foodStore} removeItem={removeItem} />
    </section>
  );
};

export default Shopping;
