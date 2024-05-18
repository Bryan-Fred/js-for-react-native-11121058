# Array Manipulation Project

## Student ID: 11121058

# Overview
This project contains a series of tasks related to array manipulation and processing.

### Task 1: processArray Function

The `processArray` function takes an array of numbers as an argument and returns a new array where each even number is squared and each odd number is tripled.

Example:
```javascript
const numbers = [7, 8, 9, 12, 15, 20];
const processedArray = processArray(numbers);
console.log(processedArray); // Output: [21, 64, 27, 144, 45, 200]
```

### Task 2: formatArrayStrings Function

The `formatArrayStrings` function takes two arrays as arguments: an array of strings and an array of numbers processed by processArray. It modifies each string based on its corresponding number:
- If the number is even, the string is capitalized.
- If the number is odd, the string is converted to lowercase.

Example:
```javascript
const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const numbers = [3, 4, 9, 16, 15];
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); // Output: ['apple', 'BANANA', 'cherry', 'DATE', 'elderberry']
```

### Task 3: createUserProfiles Function

The `createUserProfiles` function takes an array of names and the array of modified names from Task 2, and returns an array of objects containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1) properties.

Example:
```javascript
const originalNames = ['Fred', 'Soldier', 'Lina', 'Bryan', 'Kellerman'];
const modifiedNames = ['fred', 'SOLDIER', 'lina', 'BRYAN', 'kellerman'];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
```
Output:
```javascript
[
  { originalName: 'Fred', modifiedName: 'fred', id: 1 },
  { originalName: 'Soldier', modifiedName: 'SOLDIER', id: 2 },
  { originalName: 'Lina', modifiedName: 'lina', id: 3 },
  { originalName: 'Brayn', modifiedName: 'BRYAN', id: 4 },
  { originalName: 'Kellerman', modifiedName: 'kellerman', id: 5 }
]
```