import "./Team.css"
import Colaborador from "../Colaborador";

const Team = (props) => {

    return(
        
        props.colaboradores.length > 0 ? <section className="team" style={{backgroundColor: props.corSecundaria}}>
        
        <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
        
        <div className="colaboradores">
            
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome} />)}

        </div>
        
        </section>
        : ''

    )




}


export default Team