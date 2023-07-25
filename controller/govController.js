const [...states] = require("../data/states");
const sortStatesGov = require("../utils/sortArray");
const newStatesGov = states.map((item) => {
  return {
    state: item.name,
    governors: item.governors,
  };
});

let allGovs = [];

for (let i = 0; i < newStatesGov.length; i++) {
  for (let j = 0; j < newStatesGov[i].governors.length; j++) {
    allGovs.push({
      id: newStatesGov[i].governors[j].name + newStatesGov[i].governors[j].tenure + newStatesGov[i].state,
      state: newStatesGov[i].state,
      name: newStatesGov[i].governors[j].name,
      tenure: newStatesGov[i].governors[j].tenure,
    });
  }
}


function getAllStatesGov(property, desc) {
  return   sortStatesGov(allGovs, property, desc)
}

function getSingleGov(id) {
  let newGovs = allGovs.filter(gov=>{
    return gov.id === id
  })
  

  return  newGovs 
}

function searchGov({ name, state,  sort, desc }) {
    let newGovs;
    if (name) {
      newGovs = allGovs.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    } else newGovs = [...allGovs];
  
    if (state) {
      newGovs = newGovs.filter((item) =>
        item.state.toLowerCase().includes(state.toLowerCase())
      );
    }
  
  
    return sortStatesGov(newGovs, sort, desc)
  }
  

module.exports = { getAllStatesGov, getSingleGov, searchGov };
