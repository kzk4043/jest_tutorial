const initializeCityDatabase = (comment) => {
  console.log('initializeCityDatabase', comment);
}

const clearCityDatabase = (comment) => {
  console.log('clearCityDatabase', comment);
}

const isCity = (city) => {
  console.log('isCity', city);
  return true;
}

const initializeFoodDatabase = (comment) => {
  console.log('initializeFoodDatabase', comment);
}

const isValidCityFoodPair = (city, food) => {
  console.log('isValidCityFoodPair', city, food);
  return true;
}

module.exports = {
  initializeCityDatabase,
  clearCityDatabase,
  isCity,
  initializeFoodDatabase,
  isValidCityFoodPair
};