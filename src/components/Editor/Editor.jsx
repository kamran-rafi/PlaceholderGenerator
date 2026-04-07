import { useRef, useState } from "react"
import * as htmlToImage from 'html-to-image';
import Style from "./Editor.module.css"
import Input from "../Input/Input"
import DropMenu from "../DropMenu/DropMenu"
import Button from "../Button/Button"
import Preview from "../Preview/Preview"

const Editor = () => {
    const [filename, setFilename] = useState("")
    const [filetype, setFiletype] = useState("png")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")

    const previewRef = useRef()

    const downloadImage = () => {
        const current = previewRef.current

        let convertFn

        if (filetype === "jpeg") {
            convertFn = htmlToImage.toJpeg
        } else if (filetype === "svg") {
            convertFn = htmlToImage.toSvg
        } else {
            convertFn = htmlToImage.toPng
        }

        convertFn(current,
            {
                canvasWidth: width || 128,
                canvasHeight: height || 128,
                pixelRatio: 1,
            }
        ).then((dataUrl) => {
            const link = document.createElement("a")
            link.download = `${filename.trim() || "placeholder"}.${filetype || "png"}`
            link.href = dataUrl
            link.click()
        })
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
                <Preview
                    reference={previewRef}
                />
            </aside>
        </section>
    )
}

export default Editor