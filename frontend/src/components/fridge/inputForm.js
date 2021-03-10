import React from "react";

const InputForm = () => {
  return (
    <section className="fridgeInput">
      <form className="fridgeInputForm">
        <label className="fridgeInputForm__label" htmlFor="item">
          Add food
        </label>
        <div className="fridgeInputForm--verticalAlign">
          <input
            className="fridgeInputForm__input"
            type="text"
            name="item"
            id="item"
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
