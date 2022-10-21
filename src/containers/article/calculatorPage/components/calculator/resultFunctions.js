export const resultPlus = str => {
  const array = str.split('+', 2);
  return array.reduce(function (a, b) {
    return (+a + +b).toString();
  });
};
export const resultMinus = str => {
  const array = str.split('-', 3);
  return array.reduce(function (a, b) {
    return (a - b).toString();
  });
};
export const resultMultiply = str => {
  const array = str.split('*', 2);
  return array.reduce(function (a, b) {
    console.log(str);
    return (a * b).toString();
  });
};
export const resultDivide = str => {
  const array = str.split('/', 2);
  return array.reduce(function (a, b) {
    return (a / b).toString();
  });
};
