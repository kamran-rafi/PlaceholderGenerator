import Input from "../Input/Input"
import Style from "./ColorPicker.module.css"

const ColorPicker = props => {

    const { value, changeCallback, changeColor } = props

    const generateRandomColor = () => {
        const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
        changeColor(randomHex)
    }

    return (
        <div id={Style.ColorPicker}>
            <input className={Style.colors} type="color" value={value} onChange={changeCallback} />
            <Input value={value} changeCallback={changeCallback} />
            <button onClick={ generateRandomColor } className={Style.button}>Random</button>
        </div>
    )
}

export default ColorPicker