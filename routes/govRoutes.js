const express = require("express");
const url = require("url");
const govRouter = express.Router();
const {
  getAllStatesGov,
  getSingleGov,
  searchGov,
} = require("../controller/govController");

govRouter.get("/governors", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const gov = getAllStatesGov(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: gov.length,
      data: gov,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

govRouter.get("/governors/search", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const gov = searchGov(query);

    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: gov.length,
      data: gov,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

govRouter.get("/governors/:id", (req, res) => {
  try {
    const LG = getSingleGov(req.params.id);
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

module.exports = govRouter;
