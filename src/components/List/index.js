import "./List.css"


const List = (props) => {




    return(
        <div className="lista-suspensa">
        <label>{props.label}</label>
        <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
            <option value="" disabled >Selecione seu time</option>
            {props.itens.map(item => {
            return <option key={item}>{item}</option>}
            )}

        </select>


    </div>


    )


}


export default List;