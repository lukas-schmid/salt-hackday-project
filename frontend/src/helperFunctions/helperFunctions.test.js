import { storeLocalStorage, getLocalStorage } from "./helperFunctions";

describe("LocalStorage", () => {
  test("if it saves data to localStorage", () => {
    jest.spyOn(localStorage, "getItem");
    const key = "fridge";
    const strValue = "milk,banana,cinnamon";
    storeLocalStorage(key, strValue);
    expect(localStorage.getItem(key)).toBe("milk,banana,cinnamon");
  });
  test("if it saves data to localStorage", () => {
    jest.spyOn(localStorage, "setItem");
    const key = "fridge";
    const strValue = "milk,banana,cinnamon";
    localStorage.setItem(key, strValue);
    expect(getLocalStorage(key)).toStrictEqual(["milk", "banana", "cinnamon"]);
  });
});
