import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import styles from "./timer.module.scss"

interface Props {
    selected: ITask | undefined,
    doneTask: () => void
}

export function Timer({ selected, doneTask }: Props){
    const [time, setTime] = useState<number>();

    function regressive (counter: number = 0){
        setTimeout(() => {
            if (counter > 0){
                setTime(counter - 1)
                return regressive(counter - 1)   
            }
            doneTask()
        }, 1000);
    }
   


    useEffect(()=>{
        if(selected?.time)setTime(timeForSeconds(selected.time))
    },[selected])

    return(
        <div className={styles.timer}>
            <p className={styles.timer__title}>Choose a card and start the timer</p>
            <div className={styles.timer__clockWrapper}>
                <Clock time= {time}/>
            </div>
            <Button onClick = { () => {regressive(time)}}>Start</Button>
        </div>
    )
}