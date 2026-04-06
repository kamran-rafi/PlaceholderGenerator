import Style from "./Button.module.css"

const Button = props => {

    const { title, clickCallback } = props

    return (
        <button id={Style.Button} onClick={clickCallback}>
            {title || "button"}
        </button>
    )
}

export default Button