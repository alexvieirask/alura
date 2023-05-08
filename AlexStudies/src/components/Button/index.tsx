import React from "react";
import styles from "./button.module.scss"

interface Props{
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children?: React.ReactNode
}

export default function Button({ type, children, onClick} : Props){       
    return(
        <button onClick={onClick} type={type} className={styles.button}>{children}</button>
    )
}