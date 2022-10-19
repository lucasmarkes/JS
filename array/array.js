const names = ["John", "Smith"];

const john = names[0];

names.push("Mary");

names.unshift(20);
// - unshift add an element to the beginning of the array

names.pop();
// - pop remove an element from the end of the array

names.shift();
// - shift remove an element from the beginning of the array

names.indexOf("Smith");
// - indexOf return the index of the element

names.sort();
// - sort sort the array

const numbers = [1, 2, 3, 4, 5];

const multiply = numbers.map((number) => number * 2);
// - map return a new array with the result of the callback function

const even = numbers.filter((number) => number % 2 === 0);
// - filter return a new array with the elements that pass the test

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// - reduce return a single value

