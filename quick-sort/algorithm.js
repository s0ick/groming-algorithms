const testMock = [17, 9, 11, 6, 1, 22, 7, 4];

const quickSort = array => {
  if (array.length < 2) {
    return array;
  }

  const index = Math.floor(array.length / 2);
  const supportElem = array[index];
  const lessArray = [];
  const greaterArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      continue;
    }

    if (array[i] < supportElem) {
      lessArray.push(array[i]);
      continue;
    }

    greaterArray.push(array[i]);
  }

  return quickSort(lessArray).concat(supportElem, quickSort(greaterArray));
};

console.log(quickSort(testMock));

