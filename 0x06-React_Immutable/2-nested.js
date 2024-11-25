import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert the plain object to an Immutable.js Map
  const immutableObject = fromJS(object);

  // Use Immutable.js's getIn method to access the value at the defined path
  return immutableObject.getIn(array);
}
