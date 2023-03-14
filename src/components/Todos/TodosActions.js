import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri';
import styles from './TodosActions.module.css';
import Button from '../UI/Button';
function TodosActions({ resetTodos, deletedTodos, completedTodo }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Сброс задач" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Удаление завершенных задач"
        onClick={deletedTodos}
        disabled={!completedTodo}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
