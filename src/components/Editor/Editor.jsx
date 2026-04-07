import { useRef, useState } from "react"
import * as htmlToImage from 'html-to-image';
import Style from "./Editor.module.css"
import Input from "../Input/Input"
import DropMenu from "../DropMenu/DropMenu"
import Button from "../Button/Button"
import Preview from "../Preview/Preview"
import ColorPicker from "../ColorPicker/ColorPicker";

const Editor = () => {
    const [filename, setFilename] = useState("placeholder")
    const [filetype, setFiletype] = useState("png")
    const [width, setWidth] = useState("128")
    const [height, setHeight] = useState("128")
    const [color, setColor] = useState("#009cfc")
    const [emoji, setEmoji] = useState("❤️")

    const previewRef = useRef()

    const downloadImage = async () => {
        const current = previewRef.current

        const targetWidth = Number(width) || 128
        const targetHeight = Number(height) || 128

        const scale = 4 // 👈 render 4x bigger for quality

        let convertFn
        if (filetype === "jpeg") convertFn = htmlToImage.toJpeg
        else if (filetype === "svg") convertFn = htmlToImage.toSvg
        else convertFn = htmlToImage.toPng

        // 🧠 Step 1: render BIG (no distortion)
        const dataUrl = await convertFn(current, {
            width: targetWidth * scale,
            height: targetHeight * scale,
            style: {
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                width: `${targetWidth}px`,
                height: `${targetHeight}px`,
            },
            pixelRatio: 1,
            fontEmbedCSS: false,
        })

        // 🧠 Step 2: downscale to final size
        const img = new Image()
        img.src = dataUrl

        img.onload = () => {
            const canvas = document.createElement("canvas")
            canvas.width = targetWidth
            canvas.height = targetHeight

            const ctx = canvas.getContext("2d")
            ctx.drawImage(img, 0, 0, targetWidth, targetHeight)

            const finalUrl = canvas.toDataURL(`image/${filetype || "png"}`)

            const link = document.createElement("a")
            link.download = `${filename.trim() || "placeholder"}.${filetype || "png"}`
            link.href = finalUrl
            link.click()
        }
    }

    return (
        <section id={Style.Editor}>
            <aside className={Style.inputs}>
                <h2>Customize</h2>
                <div className={Style.inputsContainer}>
                    <Input hint="placeholder" value={filename} changeCallback={e => setFilename(e.target.value)} />
                    <DropMenu value={filetype} changeCallback={e => setFiletype(e.target.value)} />
                </div>
                <ColorPicker value={color} changeCallback={e => setColor(e.target.value)} changeColor={setColor} />
                <div className={Style.inputsContainer}>
                    <Input hint="width (defualt: 128px)" value={width} changeCallback={e => setWidth(e.target.value)} type="number" />
                    <span> - </span>
                    <Input hint="height (defualt: 128px)" value={height} changeCallback={e => setHeight(e.target.value)} type="number" />
                </div>
                <div className={Style.inputsContainer}>
                    <Input hint="Insert one emoji" value={emoji} changeCallback={e => setEmoji(e.target.value)} max="3" />
                </div>
                <Button title="Download" clickCallback={downloadImage} />
            </aside>
            <aside className={Style.preview}>
                <h2>Preview</h2>
                <Preview
                    reference={previewRef}
                    color={color}
                    width={width}
                    height={height}
                    emoji={emoji}
                />
            </aside>
        </section>
    )
}

export default Editor