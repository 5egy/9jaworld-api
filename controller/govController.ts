type senators = {
  name: string,
  party: string,
};
type governor = {
  name: string,
  tenure: string,
};

type state = {
  name: string
  id: string
  region: string
  population: number,
  LGA: string[],
  capital: string,
  motto: string,
  created: string,
  area: string,
  university: string[],
  metropolis: string[],
  polytechnic: string[],
  senators: senators[],
  houseOfReps: (senators & { constituency: string})[],
  governors: governor[],
    shortDescription:string,
    wikipediaLink: string
}
const [...allStates] = require("../data/states");
const sortStatesGov = require("../utils/sortArray");
const newStatesGov = allStates.map((item: state) => {
  return {
    state: item.name,
    governors: item.governors,
  };
});

let allGovs: (governor & {id: string, state: string})[] = [];

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


function getAllStatesGov(property:string, desc:string) {
  return   sortStatesGov(allGovs, property, desc)
}

function getSingleGov(id:string) {
  let newGovs = allGovs.filter(gov=>{
    return gov.id === id
  })
  

  return  newGovs 
}

function searchGov({ name, state,  sort, desc }: { name:string, state:string,  sort:string,desc:string }) {
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
