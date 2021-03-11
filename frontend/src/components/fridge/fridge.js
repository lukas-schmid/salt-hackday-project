import React, { useEffect, useState, useRef } from "react";
import InputForm from "./InputForm";
import FoodList from "./FoodList";
import {
  storeLocalStorage,
  getLocalStorage,
} from "../../helperFunctions/helperFunctions";
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

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const strValue = foodStore.join(",");
    storeLocalStorage("fridge", strValue);
  }, [foodStore]);

  useEffect(() => {
    if (localStorage.getItem("fridge")) {
      setFoodStore(getLocalStorage("fridge"));
    }
  }, []);

  return (
    <section className="fridgePage">
      <InputForm handleFoodInput={handleFoodInput} />
      <FoodList items={foodStore} removeItem={removeItem} />
    </section>
  );
};

export default Fridge;
