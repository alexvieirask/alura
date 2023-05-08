import { useState } from "react"
import Form from "../../components/Form"
import List from "../../components/List"
import { Timer } from "../../components/Timer"
import styles from "./home.module.scss"
import { ITask } from "../../types/task"

export default function Home(){
    const [tasks,setTasks] = useState<ITask[] | []>([]) 
    const [selected,setSelected] = useState<ITask>()

    function selectTask(taskSelected: ITask){
        setSelected(taskSelected)
        setTasks(oldTasks => oldTasks.map(task=> ({
            ...task,
            selected: task.id === taskSelected.id ? true : false
        })))
    }

    function doneTask(){
        if (selected){
            setSelected(undefined)
            setTasks(oldTasks => oldTasks.map( task => {
                if(task.id === selected.id){
                    return {...task, selected: false, complete:true}
                }
                return task
            }))
        }
    }


    return(
        <div className={styles.container}>
            <Form setTasks = { setTasks }/>
            <List selectTask={selectTask} tasks = {tasks}/>
            <Timer doneTask={doneTask} selected= {selected}/>
        </div>
    )
}