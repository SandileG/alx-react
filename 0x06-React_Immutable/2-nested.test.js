import accessImmutableObject from './accessImmutableObject';

describe('accessImmutableObject', () => {
  const data = {
    name: {
      first: 'Guillaume',
      last: 'Salva',
    },
  };

  test('returns the correct value for a valid path', () => {
    expect(accessImmutableObject(data, ['name', 'first'])).toBe('Guillaume');
  });

  test('returns undefined for a non-existent path', () => {
    expect(accessImmutableObject(data, ['name', 'middle'])).toBeUndefined();
  });
});
