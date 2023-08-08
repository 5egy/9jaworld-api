const [...states] = require("../data/states");
const sortStates = require("../utils/sortArray");
type stateType = typeof states

function getAllStates(property:string, desc:string) {
  return sortStates(states, property, desc);
}

function getSingleState(id:string) {
  let newState = states.filter((item:stateType) => {
    return item.id === id
  })[0];

  return newState;
}

function searchStates({ name, region, capital, sort, desc }:{ name:string, region:string, capital:string, sort:string, desc:string }) {
  let newState;
  if (name) {
    newState = states.filter((item:stateType) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newState = [...states];

  if (region) {
    newState = newState.filter((item:stateType) =>
      item.region.toLowerCase().includes(region.toLowerCase())
    );
  }

  if (capital) {
    newState = newState.filter((item:stateType) =>
      item.capital.toLowerCase().includes(capital.toLowerCase())
    );
  }

  return sortStates(newState, sort, desc);
}

module.exports = { getAllStates, getSingleState, searchStates };
