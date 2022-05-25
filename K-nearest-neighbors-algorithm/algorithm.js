const testMock = {
  Priyanka: [3, 4, 4, 1, 4],
  Justin: [4, 3, 5, 1, 5],
  Morpheus: [2, 5, 1, 3, 1]
};

const definitionOfTastes = (array1, array2) => {
  let result = 0;

  for (let i = 0; i < array1.length; i++) {
    result += Math.pow(array1[i] - array2[i], 2);
  }

  return Math.sqrt(result);
};

console.log(definitionOfTastes(testMock.Priyanka, testMock.Justin));
console.log(definitionOfTastes(testMock.Priyanka, testMock.Morpheus));
console.log(definitionOfTastes(testMock.Justin, testMock.Morpheus));
