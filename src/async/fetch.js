// jsonplaceholderの`/todos/1`を取得する関数を作成する
const fetchTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

// jsonplaceholderの`/todos/1`を取得して失敗する関数
const fetchTodoError = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/10000",
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

// jsonplaceholderの`/todos/1`を取得したあとコールバックを実行する関数
const fetchTodoCallback = (callback) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
};

module.exports = {
  fetchTodo,
  fetchTodoError,
  fetchTodoCallback,
};
