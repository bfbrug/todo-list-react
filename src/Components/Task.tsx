import { ClipboardText } from 'phosphor-react';

import { ITask } from '../App';
import styles from './Task.module.css';
import { TaskItem } from './TaskItem';

interface ITasksProps {
  tasks: ITask[];
  onUpdateTask: (id: string, status: boolean) => void;
  onRemoveTask: (id: string) => void;
}

export function Task({ tasks, onUpdateTask, onRemoveTask }: ITasksProps) {
  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(
    (task) => task.status === true,
  ).length;

  return (
    <main>
      <header className={styles.task}>
        <strong>
          Tarefas criadas <span>{totalTasks}</span>
        </strong>
        <strong>
          Concluídas{' '}
          <span>
            {totalCompletedTasks} de {totalTasks}
          </span>
        </strong>
      </header>

      <div className={styles.taskBox}>
        {tasks.length === 0 && (
          <div className={styles.emptyTasksBox}>
            <ClipboardText size={52} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              onUpdateTask={onUpdateTask}
              onRemoveTask={onRemoveTask}
              status={task.status}
              content={task.content}
            />
          );
        })}
      </div>
    </main>
  );
}
