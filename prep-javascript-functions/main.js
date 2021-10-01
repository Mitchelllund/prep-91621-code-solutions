function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var multiplyby5 = addAndMultiplyBy5(10, 5);
console.log('multiplyby5:', multiplyby5);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var SumDivideBy5 = multiplyAndDivideBy5(35, 10);
console.log('SumDivideBy5:', SumDivideBy5);

function subtractTwoNumbers(num1, num2) {
  var result = (num1 - num2);
  return result;
}

var SumOfSubtract = subtractTwoNumbers(22, 7);
console.log('SumOfSubtract:', SumOfSubtract);

function getCricleCircumfrence(radius) {
  var result = (2 * Math.PI) * radius;
  return result;
}

var CircleCircumfrence = getCricleCircumfrence(5);
console.log('CircleCircumfrence:', CircleCircumfrence);

function getFullName(firstname, lastname) {
  var result = (firstname + lastname);
  return result;
}

var FullName = getFullName('Juan', ' Ramirez');
console.log('FullName:', FullName);

function cube(number) {
  var result = (number * number * number);
  return result;
}

var CubeSum = cube(5);
console.log('CubeSum:', CubeSum);
