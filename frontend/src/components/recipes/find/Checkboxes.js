import React from "react";

function Checkboxes() {
  return (
    <div className="searchRecipe__checkboxList--row">
      <input type="checkbox" id="foodItem1" name="foodItem1" value="Milk" />
      <label htmlFor="foodItem1"> Milk</label>
    </div>
  );
}

export default Checkboxes;
