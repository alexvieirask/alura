import styles from "./header.module.scss"
import logo from "./logo.png"
import search from "./search.png"


export default function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo Alex Space" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="What are you looking for?" />
                <img src={search} alt="Magnifying glass icon" />
            </div>
        </header>
    )
}