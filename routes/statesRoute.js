const express = require("express");
const statesRouter = express.Router();
const {getAllStates, getSingleState} = require("../controller/statesController")

statesRouter.get("/states", (req, res) => {
        const states = getAllStates();
        
        res.send(states);
})

statesRouter.get("/states/:id", (req, res)=>{
        const state = getSingleState(req.params.id.toLowerCase())
        res.send(state)
})

module.exports = statesRouter