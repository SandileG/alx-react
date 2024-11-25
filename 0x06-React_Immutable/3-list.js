import { List } from 'immutable';

// Convert an array to an immutable List
export function getListObject(array) {
  return List(array);
}

// Add an element to the immutable List
export function addElementToList(list, element) {
  return list.push(element);
}
