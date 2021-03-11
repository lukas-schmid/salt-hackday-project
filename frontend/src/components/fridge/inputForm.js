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
    <section className="fridgeInput">
      <form className="fridgeInputForm" onSubmit={handleSubmit}>
        <label className="fridgeInputForm__label" htmlFor="item">
          Add food
        </label>
        <div className="fridgeInputForm--verticalAlign">
          <input
            className="fridgeInputForm__input"
            type="text"
            name="item"
            id="item"
            autoComplete="off"
            onChange={handleInput}
          />
          <button className="fridgeInputForm__button" type="submit">
            +
          </button>
        </div>
      </form>
    </section>
  );
};

export default InputForm;
