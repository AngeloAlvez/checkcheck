import styled from 'styled-components'
import { useState } from 'react';

const TaskTexto = styled.h2`
width: 100%;
margin:12px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Courier New', Courier, monospace;
font-size: 18px;
text-decoration: ${({toggle}) => toggle ? 'line-through': 'none'};
`
const TaskCheck = styled.input`
margin: 10px;
transform: scale(1.4)
`
const TaskDel = styled.button`
margin: 10px;
color: red;
background-color: #ffffff;
border: 1px solid gray;
border-radius: 3px;
`
export const Task = (props) => {
    const [toggle, setToggle] = useState(false);

    const deletaTask = (task) => {
        const newState = [...props.tasks]
        const index = newState.indexOf(task)
        newState.splice(index, 1)
        props.setTasks(newState)
    }
    const riscaTask = () => {
        setToggle(!toggle)
    }
    return (
        <TaskTexto toggle={toggle} onClick={riscaTask}>
            <TaskCheck type='checkbox' checked={toggle}/>
            {props.texto}
            <TaskDel onClick={() => deletaTask(props.texto)}>x</TaskDel>
        </TaskTexto>


    )
}