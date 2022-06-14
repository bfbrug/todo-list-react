import { ChangeEvent, FormEvent, useState } from 'react';

import plus from '../assets/plus.svg';
import styles from './NewTask.module.css';

interface ITask {
  id: string;
  content: string;
  status: boolean;
}
interface ITaskProps {
  addTask: () => void;
}

export function NewTask({ addTask }: ITaskProps) {
  const [newTasks, setNewTasks] = useState(['']);

  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    addTask;

    setNewTasks([...newTasks, newTaskText]);

    setNewTaskText('');
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          onChange={handleNewTask}
          placeholder="Adicine uma nova tarefa"
        />
        <button type="submit">
          Criar <img src={plus} alt="" />
        </button>
      </form>
    </div>
  );
}
