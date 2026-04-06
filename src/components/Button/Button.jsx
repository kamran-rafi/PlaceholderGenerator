const Button = props => {

    const { title, clickCallback } = props

    return (
        <button onClick={clickCallback}>
            {title || "button"}
        </button>
    )
}

export default Button