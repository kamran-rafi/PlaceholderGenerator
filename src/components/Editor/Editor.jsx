import { useState } from "react"
import Style from "./Editor.module.css"
import Input from "../Input/Input"
import DropMenu from "../DropMenu/DropMenu"
import Button from "../Button/Button"

const Editor = () => {
    const [filename, setFilename] = useState("")
    const [filetype, setFiletype] = useState("png")

    const downloadImage = () => {
        console.log(
            filename, filetype
        )
    }

    return (
        <section id={Style.Editor}>
            <aside className={Style.inputs}>
                <h2>Customize</h2>
                <div className={Style.inputsContainer}>
                    <Input hint="placeholder" value={filename} changeCallback={e => setFilename(e.target.value)} />
                    <DropMenu value={filetype} changeCallback={e => setFiletype(e.target.value)} />
                </div>
                <Button title="Download" clickCallback={downloadImage} />
            </aside>
            <aside className={Style.preview}>
                <h2>Preview</h2>
            </aside>
        </section>
    )
}

export default Editor