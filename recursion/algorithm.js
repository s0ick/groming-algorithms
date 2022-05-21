const factorial = x => {
  if (x === 1) {
    return 1;
  }

  return x * factorial(x - 1);
};

// console.log(factorial(5));

const recursion = value => {
  if (value) {
    recursion(value - 1);
  }

  return 'Функция завершилась';
};

/*
    FIND KEY IN BOX
*/

const testMock = [
  ['clock', 'pen', ['coins']],
  [
    'book',
    'notebook',
    [
      ['wax figurine', 'plush toy'],
      ['pencils']
    ],
    ['screwdriver set', 'key']
  ],
  ['vinyl records']
];

const searchKey = box => {
  for (let i = 0; i < box.length; i++) {
    if (box[i] === 'key') {
      console.log(`key is find in ${box}`);
    }

    if (typeof box[i] === 'object') {
      searchKey(box[i]);
    }
  }
};

searchKey(testMock)
