import React from "react";

const InputForm = () => {
  return (
    <section className="shoppingListInput">
      <form className="shoppingListInputForm">
        <label className="shoppingListInputForm__label" htmlFor="item">
          Add food
        </label>
        <div className="shoppingListInputForm--verticalAlign">
          <input
            className="shoppingListInputForm__input"
            type="text"
            name="item"
            id="item"
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
