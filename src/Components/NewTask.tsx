import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ITask } from '../App';
import plus from '../assets/plus.svg';
import styles from './NewTask.module.css';

interface ITaskProps {
  addTask: (task: ITask) => void;
}

export function NewTask({ addTask }: ITaskProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    addTask({
      id: uuidv4(),
      content: newTaskText,
      status: false,
    });

    setNewTaskText('');
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  const disabledBottom = newTaskText.length === 0;

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          onChange={handleNewTask}
          value={newTaskText}
          placeholder="Adicine uma nova tarefa"
        />
        <button type="submit" disabled={disabledBottom}>
          Criar <img src={plus} alt="" />
        </button>
      </form>
    </div>
  );
}
