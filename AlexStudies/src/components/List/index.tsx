import { ITask } from "../../types/task";
import styles from "./list.module.scss";
import Item from "./Item";

interface Props{
    tasks: ITask[],
    selectTask: (selectedTask : ITask) => void
}

export default function List({ tasks, selectTask } : Props){
    return(
        <aside className={styles.taskList}>
            <h2>Day Studies</h2>
            <ul>
                {tasks.map((task) => {return(
                   <Item selectTask={selectTask} key={task.id} {...task} />
                )})}
            </ul>
        </aside>
    )
}