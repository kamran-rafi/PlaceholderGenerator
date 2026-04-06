import Style from "./Input.module.css"

const Input = props => {

    const { hint, value, changeCallback, type} = props

    return (
        <input
            id={Style.Input}
            placeholder={hint}
            value={value}
            onChange={changeCallback}
            type={type || "text"}
        />
    )
}

export default Input