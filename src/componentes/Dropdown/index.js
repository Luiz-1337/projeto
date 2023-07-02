import './Dropdown.css'
const Dropdown = ({label, items, valor, aoAlterado, obrigatorio = false}) => {
    return (
        <div className='dropdown'>
        <label>{label}</label>   
        <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
        <option value=""></option>
        {items.map(item => <option key={item}>{item}</option>)}   
        </select>
        </div>
    )
}

export default Dropdown  