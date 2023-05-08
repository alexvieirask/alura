import styles from "./clock.module.scss";

interface Props{
    time: number | undefined
}

export default function Clock({ time = 0 } : Props){
    const minutes = Math.floor( time / 60)
    const seconds = time % 60
    
    const [ minutesDeze, minutesUnid] = String(minutes).padStart(2,"0")
    const [ secondsDeze, secondsUnid] = String(seconds).padStart(2,"0")

    return(
        <>
            <span className={styles.clockNum}>{minutesDeze}</span>
            <span className={styles.clockNum}>{minutesUnid}</span>
            <span className={styles.clockDivision}>:</span>
            <span className={styles.clockNum}>{secondsDeze}</span>
            <span className={styles.clockNum}>{secondsUnid}</span>
        </>
    )
}