function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }

const input = [7, 8, 9, 12, 15,];
const output = processArray(input);
console.log(output);

function formatArrayStrings(stringArray, numberArray) {
  return stringArray.map((str, index) => {
    const correspondingNumber = numberArray[index];
    return correspondingNumber % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  });
}

const strings = ['Frederick', 'Franklina', 'Bryan', 'Kellerman', 'Soldier'];
const numbers = [21, 64, 27, 144, 45, 400];
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings);