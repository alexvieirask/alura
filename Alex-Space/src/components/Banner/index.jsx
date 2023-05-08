import styles from "./banner.module.scss"
import banner from "./banner.png"

export default function Banner(){
    return (
        <div className={styles.banner}>
            <h1>The most complete gallery in space</h1>
            <img src={banner} alt="Earth in space" />
        </div>
    )
}