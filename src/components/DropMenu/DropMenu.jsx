import Style from "./DropMenu.module.css"

const DropMenu = props => {

    const { value, changeCallback } = props

    return (
        <select id={Style.Select} value={value} onChange={changeCallback}>
            <option value="png">png</option>
            <option value="jpeg">jpeg</option>
            <option value="svg">svg</option>
        </select>
    )
}

export default DropMenu