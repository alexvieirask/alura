import Card from "./Card"

export default function Cards({ itens, styles}){
    return(
        <ul className={styles.galery__cards}>
        {itens.map(item =>{ return(
            <Card key={item.id} styles={styles} item={item}/>
        
        )})}
    </ul>
    )
}