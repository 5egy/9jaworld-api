const country_express = require("express");
const country_url = require("url");
const countryRouter = country_express.Router();
const countryControl = require("../controller/countriesController");

countryRouter.get("/countries", (req: any, res:any) => {
 try{ const query = country_url.parse(req.url, true).query;
  const countries =  countryControl.getAllCountries(query.sort, query.desc);
  res.status(200).send({
        statusCode: res.statusCode,
        statusText: "Ok",
        total:countries.length,
        data:countries
      })
     } catch(err:any){
      res.status(500).send({
        statusCode: res.statusCode,
        statusText: "Internal Error",
        error: err.message
      })
     }
});

countryRouter.get("/countries/search", (req: any, res:any) => {
  try {
    const query = country_url.parse(req.url, true).query;
    const country =  countryControl.searchCountry({ ...query });
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: country.length,
      data: country,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

countryRouter.get("/countries/:id", (req: any, res:any) => {
  try {
    const country =  countryControl.getSingleCountry(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: country,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

module.exports = countryRouter;
