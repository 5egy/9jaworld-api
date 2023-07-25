const countries= require("../data/countries");
const sortCountries = require("../utils/sortArray")

function getAllCountries(property, desc) {
  return sortCountries(countries, property, desc)
}

function getSingleCountry(id) {
  let newCountry = countries.filter((item) => {
    return item.id=== id;
  })[0];

  return newCountry
}

function searchCountry({ name, continent, currency, capital, sort, desc }) {
  let newCountry;
  if (name) {
    newCountry = countries.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newCountry = [...countries];

  if (continent) {
    newCountry = newCountry.filter((item) =>
      item.continent.toLowerCase().includes(continent.toLowerCase())
    );
  }

  if (currency) {
    newCountry = newCountry.filter((item) =>
      item.currency.toLowerCase().includes(currency.toLowerCase())
    );
  }

  if (capital) {
    newCountry = newCountry.filter((item) =>
      item.capital.toLowerCase().includes(capital.toLowerCase())
    );
  }

  return sortCountries(newCountry, sort, desc)
}

module.exports = { getAllCountries, getSingleCountry, searchCountry };
