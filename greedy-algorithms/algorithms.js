const stations = {
  one: ['id', 'nv', 'ut'],
  two: ['wa', 'id', 'mt'],
  three: ['or', 'nv', 'ca'],
  four: ['nv', 'ut'],
  five: ['ca', 'az']
};

const states = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];

const getSet = (array1, array2, operation) => {
  const set = {};
  const result = [];

  array1.forEach(item => set[item] ? set[item]++ : set[item] = 1);
  array2.forEach(item => set[item] ? set[item]++ : set[item] = 1);

  for(let key in set) {
    switch (operation) {
      case 'difference':
        if (set[key] === 1) {
          result.push(key);
        }
        break;
      case 'intersection':
        if (set[key] > 1) {
          result.push(key);
        }
        break;
      default: break;
    }
  }

  return result;
};

const searchStations = (stations, states) => {
  const finalStations = [];
  let statesCopy = [...states];

  while (statesCopy.length) {
    let bestStation = [];
    let statesCovered = [];

    for (let station in stations) {
      const covered = getSet(statesCopy, stations[station], 'intersection');

      if (covered.length > statesCovered.length) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    statesCopy = getSet(statesCopy, statesCovered, 'difference');
    finalStations.push(bestStation);
  }

  return finalStations;
};

console.log(searchStations(stations, states));
