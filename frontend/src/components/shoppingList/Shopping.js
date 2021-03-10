import React from "react";
import InputForm from "./InputForm";
import ShoppingList from "./ShoppingList";

const Shopping = () => {
  return (
    <section className="shoppingPage">
      <InputForm />
      <ShoppingList />
    </section>
  );
};

export default Shopping;
