import { useState } from 'react';

import styles from './App.module.css';
import { Header } from './Components/Header';
import { NewTask } from './Components/NewTask';
import { Task } from './Components/Task';
import './global.css';

export interface ITask {
  id: string;
  content: string;
  status: boolean;
}

function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  function handleCreateTask(newTask: ITask) {
    setTasksList([...tasksList, newTask]);
  }

  function handelUpdateTaskStatus(id: string, status: boolean) {
    const updateStatus = [...tasksList];

    const taskExists = updateStatus.find((task) => task.id === id);

    if (taskExists) {
      taskExists.status = !status;

      setTasksList(updateStatus);
    }
  }

  function handleRemoveTask(id: string) {
    const updateTask = [...tasksList];

    const taskIndex = updateTask.findIndex((task) => task.id === id);

    if (taskIndex >= 0) {
      updateTask.splice(taskIndex, 1);

      setTasksList(updateTask);
    }
  }

  return (
    <>
      <Header />
      <NewTask addTask={handleCreateTask} />
      <div className={styles.wrapper}>
        <Task
          tasks={tasksList}
          onUpdateTask={handelUpdateTaskStatus}
          onRemoveTask={handleRemoveTask}
        />
      </div>
    </>
  );
}

export default App;
