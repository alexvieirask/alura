import pictures from "../Galery/pictures.json"
import styles from "./tags.module.scss"

export default function Tags({tags, filter, setItens}){
    return(
        <div className={styles.tags}>
            <p>Filter by tags:</p>
            <ul className={styles.tags__list}>
               {tags.map(tag=> {return(
                <li onClick={()=>{filter(tag)}} key={tag}>{tag}</li>
               )})}
               <li onClick={()=>{setItens(pictures)}}>All</li>
            </ul>
        </div>
    )
}