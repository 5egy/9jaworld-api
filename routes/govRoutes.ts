const gov_express = require("express");
const gov_url = require("url");
const govRouter = gov_express.Router();
const govControl = require("../controller/govController");

govRouter.get("/governors", (req:any, res:any) => {
  try {
    const query = gov_url.parse(req.url, true).query;
    const gov = govControl.getAllStatesGov(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: gov.length,
      data: gov,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

govRouter.get("/governors/search", (req:any, res:any) => {
  try {
    const query = gov_url.parse(req.url, true).query;
    const gov = govControl.searchGov(query);

    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: gov.length,
      data: gov,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

govRouter.get("/governors/:id", (req:any, res:any) => {
  try {
    const LG = govControl.getSingleGov(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: LG,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

module.exports = govRouter;
