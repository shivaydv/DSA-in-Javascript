let arr = [1, 2, 3, 4, 5];

// length of the array
arr.length

// Adding an element to the end of the array
arr.push(6);

// Removing the last element of the array
arr.pop();

// Adding an element to the beginning of the array
arr.unshift(0);

// Removing the first element of the array
arr.shift();

// Finding the index of an element
let index = arr.indexOf(3);


// Checking if an element exists in the array
let exists = arr.includes(2);

// Slicing the array to get a sub-array
let subArray = arr.slice(1, 4); // Gets elements from index 1 to 3

// Splicing the array to remove elements
arr.splice(2, 3); // Removes 3 element from index 2

// Concatenating two arrays

let arr2 = [7, 8, 9];
let concatenatedArray = arr.concat(arr2);

// Reversing the array
arr.reverse();

// Sorting the array
arr2.sort(); // Sorts in ascending order

arr2.sort((a, b) => b - a); // Sorts in descending order

