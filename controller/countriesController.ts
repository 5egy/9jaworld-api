const countries= require("../data/countries");
const sortCountries = require("../utils/sortArray")

function getAllCountries(property:string, desc:string) {
  return sortCountries(countries, property, desc)
}

function getSingleCountry(id:string) {
  let newCountry = countries.filter((item: typeof countries[0]) => {
    return item.id=== id;
  })[0];

  return newCountry
}

function searchCountry({ name, continent, currency, capital, sort, desc }:{ name:string, continent:string, currency:string, capital:string, sort:string, desc:string }) {
  let newCountry;
  if (name) {
    newCountry = countries.filter((item:typeof countries[0]) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  } else newCountry = [...countries];

  if (continent) {
    newCountry = newCountry.filter((item:typeof countries[0]) =>
      item.continent.toLowerCase().includes(continent.toLowerCase())
    );
  }

  if (currency) {
    newCountry = newCountry.filter((item:typeof countries[0]) =>
      item.currency.toLowerCase().includes(currency.toLowerCase())
    );
  }

  if (capital) {
    newCountry = newCountry.filter((item:typeof countries[0]) =>
      item.capital.toLowerCase().includes(capital.toLowerCase())
    );
  }

  return sortCountries(newCountry, sort, desc)
}

module.exports = { getAllCountries, getSingleCountry, searchCountry };
