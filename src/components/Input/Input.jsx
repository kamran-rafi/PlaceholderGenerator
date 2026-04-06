const Input = props => {

    const { hint, value, changeCallback, type} = props

    return (
        <input
            placeholder={hint}
            value={value}
            onChange={changeCallback}
            type={type || "text"}
        />
    )
}

export default Input