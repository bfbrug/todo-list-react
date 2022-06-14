import plus from '../assets/plus.svg';
import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <div className={styles.container}>
      <form action="">
        <input type="text" placeholder="Adicine uma nova tarefa" />
        <button type="submit">
          Criar <img src={plus} alt="" />
        </button>
      </form>
    </div>
  );
}
