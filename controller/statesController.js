const [...states] = require("../data/states");

function getAllStates(limit = 0){
    let newStates;
    if(limit > 0) newStates = states.slice(0, limit);
    else newStates = states;

    return {states: newStates, limit: newStates.length}
}

function getSingleState(name){
    let newState = states.filter(item => {
        const itemName = item.name?.toLowerCase()
        return  itemName === name
    })[0]

    return {state: newState}
}

module.exports = {getAllStates, getSingleState}