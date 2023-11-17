const axios = require('axios');

class Users {
  static all() {
    return axios.get("https://jsonplaceholder.typicode.com/users/1").then(resp => resp.data);
  }
}

module.exports = {
  Users,
};
