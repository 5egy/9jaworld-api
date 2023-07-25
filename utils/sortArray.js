function sortArrays(array, property, desc) {
    if (property) {
      if (property === "population" && desc)
        return array.sort((a, b) => b[property] - a[property]);
      else if (property === "population" && !desc)
        return array.sort((a, b) => a[property] - b[property]);
  
      if (desc && property !== "population")
        return array.sort((a, b) => b[property].localeCompare(a[property]));
      else if (!desc && property !== "population")
        return array.sort((a, b) => a[property].localeCompare(b[property]));
    } else {
      return array;
    }
  }

  module.exports = sortArrays