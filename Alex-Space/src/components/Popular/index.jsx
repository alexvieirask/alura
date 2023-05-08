import popularPictures from "./popular-pictures.json"
import styles from "./popular.module.scss"

export default function Popular(){
    return(
        <aside className={styles.popular}>
            <h2>Popular</h2>
            <ul className={styles.popular__img}>
                {popularPictures.map(picture=> {return(
                    <li key={picture.id}>
                        <img src={picture.path} alt={picture.alt} />
                    </li>
                )})}

            </ul>
            <button>See more pictures</button>
        </aside>
    )
}