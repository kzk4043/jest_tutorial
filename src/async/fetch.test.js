const { fetchTodo, fetchTodoError, fetchTodoCallback } = require("./fetch");

// fetchTodo正常系テストをPromiseを使って書く
test("fetchTodo", () => {
  return fetchTodo().then((data) => {
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  });
});

// fetchTodo関数の正常系テスト
test("fetchTodo", async () => {
  const data = await fetchTodo();
  expect(data).toEqual({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  });
});

// fetchTodoError関数の異常系テスト
test("fetchTodoError", async () => {
  expect.assertions(1);
  try {
    await fetchTodoError();
  } catch (e) {
    expect(e.message).toMatch("HTTP error! status: 404");
  }
});

// callbackは呼ばれずに終わるため、このテストは失敗する
// 関数がcallback呼んで終わるケースとかあまり見たことがないが…
xtest("the data is peanut butter", () => {
  expect.assertions(1);

  function callback(error, data) {
    if (error) {
      throw error;
    }

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  }

  fetchTodoCallback(callback);
});

// fetchTodoCallback関数の正常系テスト
test("fetchTodoCallback", (done) => {
  expect.assertions(1);
  const callback = (error, data) => {
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
    done();
  };

  fetchTodoCallback(callback);
});
