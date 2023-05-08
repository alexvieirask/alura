import styles from "./item.module.scss"
import { ITask } from "../../../types/task"

interface Props extends ITask{
    selectTask: (selectedTask : ITask) => void
}

export default function Item({ name, time, selected, complete, id, selectTask }: Props){
    return(
    <li 
        className={`${styles.item} ${ selected? styles.itemSelecionado : '' } ${complete? styles.itemCompletado: ''}`} 
        onClick={()=>{ !complete && selectTask({name, time, selected, complete, id})}}
    >
        <h3>{name}</h3>
        <span>{time}</span>
        {complete && <span className={styles.concluido} aria-label='task completed'></span>}
    </li>
    )
}