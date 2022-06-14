import { useState } from 'react';

import styles from './App.module.css';
import { Header } from './Components/Header';
import { NewTask } from './Components/NewTask';
import { Task } from './Components/Task';
import './global.css';

interface ITask {
  id: string;
  content: string;
  status: boolean;
}

function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  function handleCreateTask(newTask: ITask) {
    setTasksList([...tasksList, newTask]);
  }

  return (
    <>
      <Header />
      <NewTask addTask={handleCreateTask} />
      <div className={styles.wrapper}>
        <Task />
      </div>
    </>
  );
}

export default App;
