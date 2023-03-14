import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoH = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoH = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const toggleTodoH = (id) => {
    setTodos(
      todos.map((el) => {
        return el.id === id
          ? { ...el, isCompleted: !el.isCompleted }
          : { ...el };
      })
    );
  };

  const resetTodosH = () => {
    setTodos([]);
  };

  const deletedTodosH = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodoH = todos.filter((todo) => todo.isCompleted).length;
  console.log(completedTodoH);
  return (
    <div className="App">
      <h1 className="title">Todo app</h1>
      <TodoForm addTodo={addTodoH} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosH}
          deletedTodos={deletedTodosH}
          completedTodo={!!completedTodoH}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoH}
        toggleTodo={toggleTodoH}
      />
      {!!completedTodoH && (
        <h2 className="countTodo">
          Количество завершенных задач: {completedTodoH}{' '}
        </h2>
      )}
    </div>
  );
}

export default App;
