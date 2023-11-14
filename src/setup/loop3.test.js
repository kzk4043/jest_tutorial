const { initializeCityDatabase, clearCityDatabase, isCity } = require("./loop");

// 同一ファイル内だと適用されるぽい
beforeAll(() => {
  initializeCityDatabase();
});

afterAll(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});


test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
