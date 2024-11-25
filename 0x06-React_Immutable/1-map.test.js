import getImmutableObject from './1-map';
import { Map } from 'immutable';

test('getImmutableObject creates an Immutable.js Map', () => {
  const input = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  };

  const result = getImmutableObject(input);
  expect(result).toEqual(Map(input));
  expect(Map.isMap(result)).toBe(true); // Additional check to ensure it's a Map
});
