//test.js
const { foo, bar } = require("./foo-bar-baz");

jest.mock("./foo-bar-baz", () => {
  const originalModule = jest.requireActual("./foo-bar-baz");

  //Mock the default export and named export 'foo'
  return {
    __esModule: false,
    ...originalModule,
    // default: jest.fn(() => 'mocked baz'),
    foo: "mocked foo",
  };
});

test("should do a partial mock", () => {
  // console.log(defaultExport);
  // const defaultExportResult = defaultExport();
  // expect(defaultExportResult).toBe('mocked baz');
  // expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe("mocked foo");
  expect(bar()).toBe("bar");
});
