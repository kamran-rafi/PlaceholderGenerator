import Style from "./Preview.module.css"

const Preview = ({ reference, color, width = 128, height = 128 }) => {
    const maxPreviewSize = 320
    const scale = Math.min(maxPreviewSize / width, maxPreviewSize / height)

    // Pick smaller of width or height for emoji size
    const emojiSize = Math.min(width, height) * 0.6 // 60% of smaller side

    return (
        <div id={Style.Preview}>
            {/* Wrapper for visual scaling */}
            <div
                style={{
                    width: `${maxPreviewSize}px`,
                    height: `${maxPreviewSize}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                }}
            >
                {/* Inner scaling layer */}
                <div
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "center"
                    }}
                >
                    {/* Actual content container - ref here for export */}
                    <div
                        style={{
                            backgroundColor: color || "#000000",
                            width: `${width}px`,
                            height: `${height}px`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        ref={reference}
                    >
                        <p style={{
                            margin: 0,
                            lineHeight: 1,
                            fontSize: `${emojiSize}px`
                        }}>🙂</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview