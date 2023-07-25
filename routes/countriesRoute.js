const express = require("express");
const url = require("url");
const countryRouter = express.Router();
const {
  getAllCountries,
  getSingleCountry,
  searchCountry,
} = require("../controller/countriesController");

countryRouter.get("/countries", (req, res) => {
 try{ const query = url.parse(req.url, true).query;
  const countries = getAllCountries(query.sort, query.desc);
  res.status(200).send({
        statusCode: res.statusCode,
        statusText: "Ok",
        total:countries.length,
        data:countries
      })
     } catch(err){
      res.status(500).send({
        statusCode: res.statusCode,
        statusText: "Internal Error",
        error: err.message
      })
     }
});

countryRouter.get("/countries/search", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const country = searchCountry({ ...query });
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: country.length,
      data: country,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

countryRouter.get("/countries/:id", (req, res) => {
  try {
    const country = getSingleCountry(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: country,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

module.exports = countryRouter;
