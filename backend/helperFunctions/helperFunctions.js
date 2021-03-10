const fetch = require("node-fetch");

const fetchData = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .catch((err) => ({ message: err }));
};

module.exports = {
  fetchData,
};
