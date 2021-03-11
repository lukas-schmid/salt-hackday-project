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

  // const toggleDone = (item) => {
  //   item.done === false ? (item.done = true) : (item.done = false);
  //   const index = this.state.toDoItems.findIndex((obj) => obj.id === item.id);
  //   const newArray = [...this.state.toDoItems];
  //   newArray[index] = item;
  //   this.setState({ toDoItems: newArray });
  // };

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
      <header className="shoppingPage__header">
        <h1>Shopping List</h1>
      </header>
      <InputForm handleFoodInput={handleFoodInput} />
      <ShoppingList items={foodStore} removeItem={removeItem} />
      <footer className="shoppingPage__footer">
        <button className="shoppingPage__footer--button">Add to fridge</button>
      </footer>
    </section>
  );
};

export default Shopping;
