import { Trash } from 'phosphor-react';

import { ITask } from '../App';
import styles from './TaskItem.module.css';

interface ITaskProps extends ITask {
  onUpdateTask: (id: string, status: boolean) => void;
  onRemoveTask: (id: string) => void;
}

export function TaskItem({
  id,
  onUpdateTask,
  onRemoveTask,
  content,
  status,
}: ITaskProps) {
  function updateTask() {
    onUpdateTask(id, status);
  }

  function removeTask() {
    onRemoveTask(id);
  }
  return (
    <div className={styles.taskContent}>
      <div>
        <label htmlFor={id}>
          <input
            id={id}
            type="checkbox"
            onChange={updateTask}
            checked={status}
          />
          <p>{content}</p>
          <span className={styles.taskCheckbox} />
        </label>
      </div>

      <button
        type="button"
        title="Deletar tarefa"
        onClick={removeTask}
        className={styles.buttonTrash}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
