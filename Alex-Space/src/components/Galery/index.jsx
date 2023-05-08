import { useState } from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import styles from "./galery.module.scss"
import pictures from "./pictures.json"



export default function Galery(){
    const [itens, setItens] = useState(pictures)
    const tags = [...new Set(pictures.map(value => value.tag))]

    function filterPicture(tag){
        const newPictures = pictures.filter(picture => {
            return picture.tag === tag
        })

        setItens(newPictures)
    }

    return(
        <section className={styles.galery}>
            <h2>Browse the gallery</h2>
            <Tags tags={tags} filter={filterPicture} setItens= {setItens}/>
            <Cards itens={itens} styles = {styles} />
        </section>
    )
}