const [...presidents] = require("../data/presidents");
const sortPresidents = require("../utils/sortArray");

function getAllPresidents(property, desc) {
  return sortPresidents(presidents, property, desc);
}

function getSinglePresident(id) {
  let newPresident = presidents.filter((pres) => {
    return pres.id === id;
  });

  return newPresident;
}

function searchPresidents({ name, title, sort, desc }) {
  let newPresidents;

  if (name) {
    newPresidents = presidents.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newPresidents = [...presidents];

  if (title) {
    newPresidents = presidents.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return sortPresidents(newPresidents, sort, desc);
}

module.exports = { getAllPresidents, getSinglePresident, searchPresidents };
