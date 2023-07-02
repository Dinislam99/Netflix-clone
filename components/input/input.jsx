import cl from './input.module.css'

const Input = ({id, onChange, value, label, type}) => {

    return (
        <div className={cl.container}>
            <input 
            className={cl.input} 
            onChange={onChange}
            type={type}
            value={value} 
            id={id} 
            placeholder=' ' />
            <label className={cl.label} htmlFor={id}>{label}</label>
        </div>
    )
}

export default Input