const express = require("express");
const url = require("url");
const {
  getAllLgas,
  getSingleLG,
  searchLG,
} = require("../controller/lgasController");
const lgRouter = express.Router();

lgRouter.get("/lgas", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const lgas = getAllLgas(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: lgas.length,
      data: lgas,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

lgRouter.get("/lgas/search", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const lgas = searchLG({ ...query });
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: lgas.length,
      data: lgas,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

lgRouter.get("/lgas/:id", (req, res) => {
  try {
    const LG = getSingleLG(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: LG,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});
module.exports = lgRouter;
