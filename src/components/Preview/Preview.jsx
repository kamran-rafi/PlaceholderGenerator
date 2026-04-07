import Style from "./Preview.module.css"

const Preview = props => {

    const { reference, color } = props

    const style = { 
        backgroundColor: color || "#000000" 
    }

    return (
        <div style={style} id={Style.Preview} ref={reference}>

        </div>
    )
}

export default Preview