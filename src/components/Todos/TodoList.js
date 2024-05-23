import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return todos.map((todo) => (
    <Todo
      deleteTodo={deleteTodo}
      key={todo.id}
      todo={todo}
      toggleTodo={toggleTodo}
    />
  ));
}

export default TodoList;
