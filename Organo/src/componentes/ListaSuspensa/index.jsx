import "./ListaSuspensa.css"

const ListaSuspensa = ({label, itens, value, onChange}) =>{
    return(
        <div className="lista-suspensa">
            <label htmlFor={label}>{label}</label>
            <select onChange={ event => onChange(event.target.value)} id={label}  value={value}>
                {itens.map( item =>{
                    return <option key={item}>{item}</option> 
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa