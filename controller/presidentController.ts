const [...presidents] = require("../data/presidents");
const sortPresidents = require("../utils/sortArray");
type pres = typeof presidents[0]

function getAllPresidents(property:string, desc:string) {
  return sortPresidents(presidents, property, desc);
}

function getSinglePresident(id:string) {
  let newPresident = presidents.filter((pres:pres) => {
    return pres.id === id;
  });

  return newPresident;
}

function searchPresidents({ name, title, sort, desc }:{ name:string, title:string, sort:string, desc:string }) {
  let newPresidents;

  if (name) {
    newPresidents = presidents.filter((item:pres) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newPresidents = [...presidents];

  if (title) {
    newPresidents = presidents.filter((item:pres) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return sortPresidents(newPresidents, sort, desc);
}

module.exports = { getAllPresidents, getSinglePresident, searchPresidents };
