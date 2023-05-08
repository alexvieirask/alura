import open from "./open.png"
import favorite from "./favorite.png"

export default function Card({ styles, item}){
    return(
        <li key={item.id} className={styles.galery__card}>
                <img className={styles.galery__img} src={item.img} alt={item.title} />
                <p className={styles.galery__desc}>{item.title}</p>
                <div>
                    <p>{item.credits}</p>
                    <span>
                        <img src={favorite} alt="Heart Like Icon " />
                        <img src={open} alt="Open Modal Icon" />
                    </span>
                </div>
            </li>
    )

}