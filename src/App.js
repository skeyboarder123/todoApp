import { useState, React } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addtodoHandler = (text) => {
    const newTodo = { text: text, isCompleted: false, id: uuidv4() };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 className="main_h1">Todo App</h1>
      <div className="main_form_btn">
        <TodoForm addTodo={addtodoHandler} />
        {!!todos.length && (
          <TodosActions
            completedTodosExist={!!completedTodosCount}
            resetTodos={resetTodoHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
          />
        )}
      </div>

      {!todos.length ? (
        <h2 className="main_h2">Todo list is Empty!</h2>
      ) : (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      )}
      {completedTodosCount > 0 && (
        <h2 className="main_h2">{`You have completed ${completedTodosCount} todo${
          completedTodosCount > 1 ? 's!' : '!'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
