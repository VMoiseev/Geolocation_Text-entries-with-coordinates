import validate from '../validateCoords';

test.each([
  ['51.50851, -0.12572', true],
  ['51.50851,-0.12572', true],
  ['[51.50851, -0.12572]', true],
  ['[51, -0.12572]', false],
])(('проверка введенных координат'), (value, expected) => {
  const result = validate(value);
  expect(result).toEqual(expected);
});
