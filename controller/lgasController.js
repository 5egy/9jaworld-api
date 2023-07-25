const lgas = require("../data/lgas");
const sortlgas = require("../utils/sortArray")

function getAllLgas(property, desc) {
  return sortlgas(lgas, property, desc)
}

function getSingleLG(id) {
  let newlg = lgas.filter((item) => {
    return item.id === id;
  })[0];

  return newlg
}


function searchLG({ name, state,  sort, desc }) {
  let newLG;
  if (name) {
    newLG = lgas.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newLG = [...lgas];

  if (state) {
    newLG = newLG.filter((item) =>
      item.state.toLowerCase().includes(state.toLowerCase())
    );
  }


  return sortlgas(newLG, sort, desc)
}

module.exports = { getAllLgas, getSingleLG, searchLG };
