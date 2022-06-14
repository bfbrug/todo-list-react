import { v4 as uuidv4 } from 'uuid';

import styles from './Task.module.css';
import { TaskItem } from './TaskItem';

const tasks = [
  {
    id: uuidv4(),
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    status: false,
  },
  {
    id: uuidv4(),
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    status: true,
  },
  {
    id: uuidv4(),
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    status: true,
  },
];

export function Task() {
  return (
    <main>
      <header className={styles.task}>
        <strong>
          Tarefas criadas <span>0</span>
        </strong>
        <strong>
          Concluídas <span>2 de 5</span>
        </strong>
      </header>

      <div className={styles.taskBox}>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              taskContent={task.content}
              status={task.status}
            />
          );
        })}
      </div>
    </main>
  );
}
