import Todo from './Todo';
import style from './TodoList.module.css';
function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h1>Список пуст</h1>}
      {todos.map((el) => (
        <Todo
          key={el.id}
          todo={el}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
