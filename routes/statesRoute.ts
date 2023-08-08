const express = require("express");
const url = require("url");
const statesRouter = express.Router();
const stateControl = require("../controller/statesController");

statesRouter.get("/states", (req:any, res:any) => {
  try {
    const query = url.parse(req.url, true).query;
    const states =  stateControl.getAllStates(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: states.length,
      data: states,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

statesRouter.get("/states/search", (req:any, res:any) => {
  try {
    const query = url.parse(req.url, true).query;
    const states =  stateControl.searchStates({ ...query });
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: states.length,
      data: states,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

statesRouter.get("/states/:id", (req:any, res:any) => {
  try {
    const state =  stateControl.getSingleState(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: state,
    });
  } catch (err:any) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

module.exports = statesRouter;
