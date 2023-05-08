import "./Formulario.css"
import { useState } from "react"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"

const Formulario = (props) =>{
    const EMPTY = ""

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem,setImagem] = useState("")
    const [time,setTime] = useState(props.times[0])

    function aoSalvar(event){
        event.preventDefault()
        
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome(EMPTY)
        setCargo(EMPTY)
        setImagem(EMPTY)
        setTime(props.times[0])
    }
    

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de colaborador</h2>
                <CampoTexto onChange={value => setNome(value)} value={nome} required={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto onChange={value => setCargo(value)} value={cargo} required={true}label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto onChange={value => setImagem(value)} value={imagem} label="Imagem" placeholder="Digite o endereço da sua imagem" />
                <ListaSuspensa onChange={value => setTime(value)} value={time}  label="Times" itens={props.times}/>
                <Botao>Criar card</Botao>
            </form>
        </section>

    )

}

export default Formulario