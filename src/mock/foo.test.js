jest.mock('./foo'); // this happens automatically with automocking
const foo = require('./foo');

test('foo', () => {
// foo is a mock function
foo.mockImplementation(() => 42);
console.log(foo());
// > 42
});

const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

test('myMockFn', () => {
  myMockFn((err, val) => console.log(val));
  // > true

  myMockFn((err, val) => console.log(val));
  // > false

  myMockFn((err, val) => console.log(val));
});

const myMockFn2 = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

  test('myMockFn2', () => {
console.log(myMockFn2(), myMockFn2(), myMockFn2(), myMockFn2());
// > 'first call', 'second call', 'default', 'default'
});