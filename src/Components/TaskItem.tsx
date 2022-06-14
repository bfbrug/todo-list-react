import { Trash } from 'phosphor-react';

import styles from './TaskItem.module.css';

interface ITaskProps {
  id: string;
  taskContent: string;
  status: boolean;
}

export function TaskItem({ id, taskContent, status }: ITaskProps) {
  return (
    <div className={styles.taskContent}>
      <div>
        <label htmlFor={id}>
          <input id={id} type="checkbox" checked={status} />
          <p>{taskContent}</p>
          <span className={styles.taskCheckbox} />
        </label>
      </div>

      <button
        type="button"
        title="Deletar tarefa"
        className={styles.buttonTrash}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
