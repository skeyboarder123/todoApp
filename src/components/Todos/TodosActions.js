import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/button';

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  console.log(completedTodosExist);
  return (
    <>
      <Button title="reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="delete Completed Todos"
        disabled={!completedTodosExist}
        onClick={deleteCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
