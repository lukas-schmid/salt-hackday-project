import React from "react";

function Checkboxes({ isChecked, items, allCheck }) {
  const handleCheck = (e) => {
    isChecked(e);
  };

  return items.length === 0
    ? null
    : items.map((food, index) => {
        return (
          <div key={index} className="searchRecipe__checkboxList--row">
            <input
              type="checkbox"
              id={`food_${index}`}
              name={`foodItem_${index}`}
              value={food}
              onChange={handleCheck}
              {...allCheck}
            />
            <label htmlFor={`food_${index}`}> {food}</label>
          </div>
        );
      });
}

export default Checkboxes;
