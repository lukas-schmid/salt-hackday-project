import React, { useState } from "react";

const InputForm = ({ handleFoodInput }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFoodInput(input);
    setInput("");
    e.target.reset();
  };
  return (
    <section className="shoppingListInput">
      <form className="shoppingListInputForm" onSubmit={handleSubmit}>
        <label className="shoppingListInputForm__label" htmlFor="item">
          Add food
        </label>
        <div className="shoppingListInputForm--verticalAlign">
          <input
            className="shoppingListInputForm__input"
            type="text"
            name="item"
            id="item"
            autoComplete="off"
            onChange={handleInput}
          />
          <button className="shoppingListInputForm__button" type="submit">
            +
          </button>
        </div>
      </form>
    </section>
  );
};

export default InputForm;
