const testMock = {
  example1: [],
  example2: [],
  example3: []
};

for (let i = 1; i < 101; i++) {
  testMock.example1.push(i);

  if (i % 2 === 0) {
    testMock.example2.push(i);
  }

  if (i % 2 !== 0) {
    testMock.example3.push(i);
  }
}

const binarySearch = (array, desired) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let guess = array[middle];

    if (guess === desired) {
      return middle;
    }

    if (guess > desired) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return null;
};

console.log(binarySearch(testMock.example1, 56));
console.log(binarySearch(testMock.example2, 88));
console.log(binarySearch(testMock.example3, 12));
