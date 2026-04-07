import Style from "./Preview.module.css"

const Preview = props => {

    const { reference } = props

    return (
        <div id={Style.Preview} ref={reference}>

        </div>
    )
}

export default Preview