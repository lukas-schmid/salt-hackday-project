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

  const toggleDone = (item) => {
    item.done === false ? (item.done = true) : (item.done = false);
    const index = foodStore.findIndex((obj) => obj.name === item.name);
    const newArray = [...foodStore];
    newArray[index] = item;
    setFoodStore(newArray);
  };

  const handleFinishShopping = () => {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));
    const boughtFood = shoppingList.filter((obj) => obj.done === true);
    const boughtFoodNames = boughtFood.map((obj) => obj.name);
    const fridge = getLocalStorage("fridge");
    const updatedFridge = fridge.concat(boughtFoodNames);
    storeLocalStorage("fridge", updatedFridge.join(","));

    const newFoodStore = [...foodStore];
    const notBought = newFoodStore.filter((obj) => obj.done === false);
    setFoodStore(notBought);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const strValue = JSON.stringify(foodStore);
    storeLocalStorage("shoppingList", strValue);
  }, [foodStore]);

  useEffect(() => {
    if (localStorage.getItem("shoppingList")) {
      setFoodStore(JSON.parse(localStorage.getItem("shoppingList")));
      // setFoodStore(getLocalStorage("shoppingList"));
    }
  }, []);

  return (
    <section className="shoppingPage">
      <header className="shoppingPage__header">
        <h1>Shopping List</h1>
      </header>
      <InputForm handleFoodInput={handleFoodInput} />
      <ShoppingList
        items={foodStore}
        removeItem={removeItem}
        toggleDone={toggleDone}
      />
      <footer className="shoppingPage__footer">
        <button
          onClick={() => handleFinishShopping()}
          className="shoppingPage__footer--button"
          type="button"
        >
          Finish Shopping
        </button>
      </footer>
    </section>
  );
};

export default Shopping;
