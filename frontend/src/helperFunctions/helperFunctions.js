export const storeLocalStorage = (key, strValue) => {
  localStorage.setItem(key, strValue);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key) ? localStorage.getItem(key).split(",") : [];
};
