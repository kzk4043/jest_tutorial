const axios = require("axios");
const { Users } = require("./users");

jest.mock("axios");

test("should fetch users", () => {
  // console.log(Users.all());
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);
  // console.log(Users.all());

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then((data) => expect(data).toEqual(users));
});
