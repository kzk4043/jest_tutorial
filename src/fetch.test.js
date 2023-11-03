const fetchTodo = require('./fetch');

// fetchTodo関数の正常系テスト
test('fetchTodo', async () => {
    const data = await fetchTodo();
    expect(data).toEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    });
});