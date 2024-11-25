import getImmutableObject from './0-fromjs.js';  // Default import

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const immutableObj = getImmutableObject(obj);
console.log(immutableObj instanceof Map);  // Should log: true
console.log(immutableObj);                // Should display the Map content
