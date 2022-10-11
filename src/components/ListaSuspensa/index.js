import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
                
                {/* {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })} */}
            </select>
        </div>
    )
}

export default ListaSuspensa