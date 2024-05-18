function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }

const input = [7, 8, 9, 12, 15, 20];
const output = processArray(input);
console.log(output);