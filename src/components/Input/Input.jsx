const Input = props => {

    const { value, changeCallback } = props

    return (
        <input 
            value={value}
            onChange={changeCallback}
        />
    )
}

export default Input