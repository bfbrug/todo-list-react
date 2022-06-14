import styles from './App.module.css';
import { Header } from './Components/Header';
import { NewTask } from './Components/NewTask';
import { Task } from './Components/Task';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <NewTask />
      <div className={styles.wrapper}>
        <Task />
      </div>
    </>
  );
}

export default App;
