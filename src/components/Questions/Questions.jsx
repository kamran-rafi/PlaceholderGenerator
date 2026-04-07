import { useState } from "react"
import Style from "./Questions.module.css"

const Question = props => {

    const [showAnswer, setShowAnswer] = useState(false)

    const answerStyle = {
        display: showAnswer ? "" : "none"
    }

    return (
        <div className={Style.question}>
            <div onClick={()=>setShowAnswer(!showAnswer)} className={Style.header}>
                <h2>{props.q}</h2>
                <p>{showAnswer ? "-" : "+"}</p>
            </div>
            <p style={answerStyle} className={Style.answer}>
                {props.a}
            </p>
        </div>
    )
}

const Questions = () => {
    return (
        <div id="Questions" className={Style.Questions}>
            <h1>But Why?</h1>
            <div style={{display: "flex", flexDirection: "column", gap:"32px"}}>
                <Question q="Is this tool offline?" a="Yes. Everything runs in your browser — no uploads, no API calls, no tracking." />
                <Question q="Why not use real images?" a="Random images often clash with your UI colors and design. This tool helps you generate placeholders that match your app’s theme." />
                <Question q="Why does your UI feel off?" a="Bad placeholders ruin good design." />
            </div>
        </div>
    )
}

export default Questions