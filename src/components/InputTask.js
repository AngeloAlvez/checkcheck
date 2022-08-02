import { useState } from "react"
import styled from 'styled-components'
import { DiAtom } from "react-icons/di";

const InputDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 30px;
margin: 20px;
`

const InputBox = styled.input`
font-size: 20px;
border-radius: 3px;
border: 1px solid gray;
margin:20px;
width: 70%;
height: 100%;
`
const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
background-color: #5FD3F3;
color: #ffffff;
padding: 2px;
border-radius: 5px;
border:none;
`
export const InputTask = (props) => {

    const [input, setInput] = useState('')

    const handleInput = (event) => {
        setInput(event.target.value)
    }
    const enviaTask = () => {
        if(input === ''){
            console.log('insira uma tarefa')
        }else{
            const newState = [... props.fnc.state]
            newState.push(input)
            props.fnc.setter(newState)
            setInput('')
        }
        
        // alert('oi')
        // localStorage.setItem('tasks', newState)
    }
    document.addEventListener('keydown', function (e) {
        if (e.which == 13) {
            enviaTask();
        }
    }, false);
    return(
        <InputDiv>
            <InputBox placeholder='insira sua tarefa'value={input} onChange={handleInput}/>
            <Button onClick={enviaTask}> <DiAtom />  </Button>
        </InputDiv>
        

    )
}