import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react';
import { Task } from './components/Task';


const TaskDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
function App() {
  const [tasks, setTasks] = useState([])
 

  const tasksThings = {
    state: tasks,
    setter: setTasks
  }

  

  let listaTasks = tasks.map((task) => {
    return (
      <Task texto={task} tasks={tasks} setTasks={setTasks} />
    )
  })

  return (
    <div>
      <Header />
      <TaskDiv>
        {listaTasks}
      </TaskDiv>

      <InputTask fnc={tasksThings} />
    </div>
  );
}

export default App;
