const testMock = [5, 17, 28, 2, 14, 11, 32, 6, 16];

// Option 1
const selectionSort = array => {
  const copyArray = [...array];

  for (let i = 0; i < copyArray.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < copyArray.length; j++) {
      if (copyArray[j] < copyArray[smallestIndex]) {
        smallestIndex = j;
      }
    }

    let temp = copyArray[smallestIndex];
    copyArray[smallestIndex] = copyArray[i];
    copyArray[i] = temp;
  }

  return copyArray;
};

console.log(selectionSort(testMock));

// Option 2
const selectionSortJS = (currentElem, nextElem) => currentElem > nextElem ? 1 : -1;
console.log(testMock.sort(selectionSortJS));
