import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <>
      <form className={styles.main_form_btn} onSubmit={onSubmitHandler}>
        <input
          className={styles.input_todo}
          placeholder="Enter new todo: "
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="Submit" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default TodoForm;
