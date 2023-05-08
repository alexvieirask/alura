import { useState } from "react"
import { ITask } from "../../types/task";
import Button from "../Button";
import styles from "./form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props{
    setTasks : React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks } : Props){
    const [name,setName] = useState("")
    const [time,setTime] = useState("00:00:00")

    function resetForm(){
        setName("")
        setTime("00:00:00")
    }

    function saveTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        const newTask = { 
            name:name, 
            time:time, 
            selected:false,
            complete: false,
            id:uuidv4()
        }

        setTasks( oldTasks => [...oldTasks, {...newTask}])
        resetForm()
    }

    return(
        <form className={styles.newTask} onSubmit={saveTask}>
            <div className={styles.newTask__inputContainer}>
                <label htmlFor="name">Add Task</label>
                <input onChange={event => setName(event.target.value)} value={name} type="text" name="name" id="name" placeholder="What do you want to study?" required/>
            </div>
            <div className={styles.newTask__inputContainer}>
                <label htmlFor="time">Time</label>
                <input onChange={event => setTime(event.target.value)} value={time} type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required />
            </div>
            <Button type="submit">Add</Button>
        </form>
    )
}   