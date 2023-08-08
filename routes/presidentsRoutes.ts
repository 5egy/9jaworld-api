const pres_express = require("express");
const pres_url = require("url");
const presRouter = pres_express.Router();
const presControl = require("../controller/presidentController");

presRouter.get("/presidents", (req:any, res:any) => {
  try {
    const query = pres_url.parse(req.url, true).query;
    const pres = presControl.getAllPresidents(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: pres.length,
      data: pres,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

presRouter.get("/presidents/search", (req:any, res:any) => {
  try {
    const query = pres_url.parse(req.url, true).query;
    const pres = presControl.searchPresidents(query);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: pres.length,
      data: pres,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

presRouter.get("/presidents/:id", (req:any, res:any) => {
  try {
    const pres = presControl.getSinglePresident(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: pres,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

module.exports = presRouter;
