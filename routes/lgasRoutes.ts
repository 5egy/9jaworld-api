const lg_express = require("express");
const lg_url = require("url");
const lgCont= require("../controller/lgasController");
const lgRouter = lg_express.Router();

lgRouter.get("/lgas", (req:any, res:any) => {
  try {
    const query = lg_url.parse(req.url, true).query;
    const lgas = lgCont.getAllLgas(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: lgas.length,
      data: lgas,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

lgRouter.get("/lgas/search", (req:any, res:any) => {
  try {
    const query = lg_url.parse(req.url, true).query;
    const lgas = lgCont.searchLG({ ...query });
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: lgas.length,
      data: lgas,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

lgRouter.get("/lgas/:id", (req:any, res:any) => {
  try {
    const LG = lgCont.getSingleLG(req.params.id);
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
module.exports = lgRouter;
