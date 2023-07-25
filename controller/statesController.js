const [...states] = require("../data/states");
const sortStates = require("../utils/sortArray");

function getAllStates(property, desc) {
  return sortStates(states, property, desc);
}

function getSingleState(id) {
  let newState = states.filter((item) => {
    return item.id === id
  })[0];

  return newState;
}

function searchStates({ name, region, capital, sort, desc }) {
  let newState;
  if (name) {
    newState = states.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newState = [...states];

  if (region) {
    newState = newState.filter((item) =>
      item.region.toLowerCase().includes(region.toLowerCase())
    );
  }

  if (capital) {
    newState = newState.filter((item) =>
      item.capital.toLowerCase().includes(capital.toLowerCase())
    );
  }

  return sortStates(newState, sort, desc);
}

module.exports = { getAllStates, getSingleState, searchStates };
