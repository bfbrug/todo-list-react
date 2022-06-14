import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

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
        <div className={styles.taskContent}>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button type="button" title="Deletar tarefa">
            <Trash size={16} />
          </button>
        </div>

        <div className={styles.taskContent}>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button type="button" title="Deletar tarefa">
            <Trash size={16} />
          </button>
        </div>

        <div className={styles.taskContent}>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button type="button" title="Deletar tarefa">
            <Trash size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}
