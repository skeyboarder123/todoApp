import styles from './Todo.module.css';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.Todo} ${
        todo.isCompleted ? styles.approved_container : ''
      }`}
    >
      <RiTodoFill className={styles.icon_styles} />
      <p className={styles.TodoText}>{todo.text}</p>
      <div className={styles.icon_container}>
        <RiDeleteBin2Line
          onClick={() => deleteTodo(todo.id)}
          className={styles.icon_styles__approve}
        />
        <FaCheck
          onClick={() => toggleTodo(todo.id)}
          className={styles.icon_styles__dsapprove}
        />
      </div>
    </div>
  );
}

export default Todo;
