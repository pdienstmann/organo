import { useState } from "react";
import Button from "../Button";
import List from "../List";
import TextField from "../TextField";
import "./Form.css"


const Form = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        console.log('Form foi submetido', nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }
    return(
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor=> setNome(valor)}
                autoFocus={true}
                
                
                />
                
                <TextField 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor=> setCargo(valor)}
                
                
                />
                <TextField 
                obrigatorio={false} 
                label="Imagem" 
                placeholder="Digite o endereço da sua imagem"
                valor={imagem}
                aoAlterado={valor=> setImagem(valor)}

                />
                
                
                <List 
                label="Time" 
                itens={props.times}
                obrigatorio={true}
                valor={time}
                aoAlterado = {valor => setTime(valor)}


                
                
                />

            
                
                <Button>Criar Card</Button>
            </form>

        </section>
    )


}


export default Form;