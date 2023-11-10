// jsonplaceholderの`/todos/1`を取得する関数を作成する
const fetchTodo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

module.exports = fetchTodo;