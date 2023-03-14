import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSub = (e) => {
    e.preventDefault();
    if (text.length > 0) addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSub}>
        <input
          maxLength="37"
          placeholder="Введите задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Добавление задачи в список">
          Добавить
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
