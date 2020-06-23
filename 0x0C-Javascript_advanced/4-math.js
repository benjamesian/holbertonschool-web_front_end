function divideBy(firstNumber) {
  return (secondNumber) => secondNumber / firstNumber;
}

function addBy(firstNumber) {
  return (secondNumber) => firstNumber + secondNumber;
}

const addBy100 = addBy.bind(null, 100);
const addBy1000 = addBy.bind(null, 1000);
const divideBy10 = divideBy.bind(null, 10);
const divideBy100 = divideBy.bind(null, 100);
