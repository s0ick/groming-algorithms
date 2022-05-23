/*  Exercise 4.1
      Python with for

      def sum(arr): total = 0 for x in arr:
      total += x return total
      print sum([1, 2, 3, 4])
      _______________________________________

      Haskell with if

      sum arr = if arr == []
            then 0
            else (head arr) + (sum (tail arr))

      Напишите код для функции sum (см. выше).

    Answer:
      Базовый случай - это случий, когда в массив нахожится один элемент.
      Следовательно, нужно сокращать массив на один элемент на каждом выозове функции;
*/

const testMock = [2, 7, 3, 6, 5, 8];
const testSortedMock = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumRecursion = array => {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sumRecursion(array.slice(1));
};

console.log('Ex. 4.1: ', sumRecursion(testMock));

/*  Exercise 4.2
      Напишите рекурсивную функцию для подсчета
      элементов в списке.

    Answer:
*/

const sumElemsRecursion = array => {
  if (array.length === 0) {
    return 0;
  }

  return 1 + sumElemsRecursion(array.slice(1));
};

console.log('Ex. 4.2: ', sumElemsRecursion(testMock));

/*  Exercise 4.3
      Найдите наибольшее число в списке.

    Answer:
*/

const searchMax = array => {
  if (array.length === 0) {
    return 0;
  }

  const nextStep = searchMax(array.slice(1));

  if (array[0] > nextStep) {
    return array[0];
  }

  return nextStep;
};

console.log('Ex. 4.3: ', searchMax(testMock));

/*  Exercise 4.4
      Помните бинарный поиск из главы 1? Он тоже относится к классу алгоритмов «разделяй и властвуй».
      Сможете ли вы определить базовый и рекурсивный случай для бинарного поиска?

    Answer:
*/

const recursionBinarySearch = (array, desired) => {
  let min = 0;
  let max = array.length - 1;
  let middle = Math.floor(( min + max) / 2);

  if (array.length === 0) {
    return `Value ${desired} is not contained in an array`;
  }

  if (array[middle] === desired) {
    return `The value ${array[middle]} is contained in an array`;
  }

  if (array[middle] > desired) {
    return recursionBinarySearch(array.slice(min, middle - 1), desired);
  } else {
    return recursionBinarySearch(array.slice(middle + 1, max), desired);
  }

};

console.log('Ex. 4.4: ', recursionBinarySearch(testSortedMock, 2));
