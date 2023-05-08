import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = ({label, placeholder,required, value, onChange }) =>{
    const placeholderModificado = `${placeholder}...`

    function aoDigitado(event){
        onChange(event.target.value)
    }
    

    return(
        <div className="campo-texto">  
            <label htmlFor={label}>{label}</label>
            <input value={value} onChange={aoDigitado} required={required} id={label}  type="text" placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto