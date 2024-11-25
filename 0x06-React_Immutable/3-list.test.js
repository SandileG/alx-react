import { getListObject, addElementToList } from './3-list';

// Create a list from an array
const myArray = ['apple', 'banana', 'cherry'];
const myList = getListObject(myArray);
console.log(myList); // Output: List [ "apple", "banana", "cherry" ]

// Add an element to the list
const updatedList = addElementToList(myList, 'date');
console.log(updatedList); // Output: List [ "apple", "banana", "cherry", "date" ]

// Verify immutability
console.log(myList); // Output: List [ "apple", "banana", "cherry" ]
