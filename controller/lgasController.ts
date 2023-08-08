const lgas = require("../data/lgas");
const sortlgas = require("../utils/sortArray")
type lga = typeof lgas[0]

function getAllLgas(property:string, desc:string) {
  return sortlgas(lgas, property, desc)
}

function getSingleLG(id:string) {
  let newlg = lgas.filter((item:lga) => {
    return item.id === id;
  })[0];

  return newlg
}


function searchLG({ name, state,  sort, desc }:{ name:string, state:string,  sort:string, desc:string}) {
  let newLG;
  if (name) {
    newLG = lgas.filter((item:lga) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newLG = [...lgas];

  if (state) {
    newLG = newLG.filter((item:lga) =>
      item.state.toLowerCase().includes(state.toLowerCase())
    );
  }


  return sortlgas(newLG, sort, desc)
}

module.exports = { getAllLgas, getSingleLG, searchLG };
