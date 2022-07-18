// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...numbers) => {
  let sumOfNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfNum += numbers[i];
  }
  return sumOfNum;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
