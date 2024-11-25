import { fromJS } from 'immutable';

/**
 * Converts a JavaScript object into an Immutable.js Map.
 * @param {Object} object - The input object.
 * @returns {Map} - The immutable Map.
 */
export function getImmutableObject(object) {
  return fromJS(object); // Ensure it returns a Map object
}
