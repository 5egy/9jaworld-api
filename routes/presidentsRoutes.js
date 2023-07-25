const express = require("express");
const url = require("url");
const presRouter = express.Router();
const {
  getAllPresidents,
  getSinglePresident,
  searchPresidents,
} = require("../controller/presidentController");

presRouter.get("/presidents", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const pres = getAllPresidents(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: pres.length,
      data: pres,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

presRouter.get("/presidents/search", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const pres = searchPresidents(query);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: pres.length,
      data: pres,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

presRouter.get("/presidents/:id", (req, res) => {
  try {
    const pres = getSinglePresident(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: pres,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

module.exports = presRouter;
