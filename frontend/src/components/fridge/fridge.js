import React from "react";
import InputForm from "./InputForm";
import FoodList from "./FoodList";
import "./Fridge.css";

const Fridge = () => {
  return (
    <section className="fridgePage">
      <InputForm />
      <FoodList />
    </section>
  );
};

export default Fridge;
