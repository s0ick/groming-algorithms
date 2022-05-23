const testMock = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
};

const personIsSeller = person => person[person.length - 1] === 'm';

const breadthFirstSearch = (data, start) => {
  const searchQueue = [...data[start]];
  const verifiedHash = {};

  while (searchQueue.length) {
    const person = searchQueue.shift();

    if (verifiedHash[person]) {
      continue;
    }

    if (personIsSeller(person)) {
      console.log(`Person ${person} is a mango seller`);
      return person;
    }

    verifiedHash[person] = true;
    searchQueue.push(...data[person]);
  }

  return null;
};

console.log(breadthFirstSearch(testMock, 'you'));
