import Style from "./Preview.module.css"

const Preview = ({ reference, color, width = 128, height = 128, emoji, showDimensions }) => {
    const maxPreviewSize = 320
    const scale = Math.min(maxPreviewSize / width, maxPreviewSize / height)

    // Pick smaller of width or height for emoji size
    const fontSize = Math.min(width, height)

    const lightenHexColor = (hex, percent) => {
        // Remove '#' if present
        hex = hex.replace(/^#/, "");

        // Parse r, g, b
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Increase each channel by percent (0-100)
        const newR = Math.min(255, Math.round(r + (255 - r) * (percent / 100)));
        const newG = Math.min(255, Math.round(g + (255 - g) * (percent / 100)));
        const newB = Math.min(255, Math.round(b + (255 - b) * (percent / 100)));

        // Return new hex color
        return `#${newR.toString(16).padStart(2, "0")}${newG
            .toString(16)
            .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
    }

    const fontColor = lightenHexColor(color, 50)

    const widthTextStyle = {
        position: "absolute",
        top: "0",
        left: "50%",          // center horizontally
        transform: "translateX(-50%)", // horizontal centering
        margin: 0,
        fontSize: fontSize * 0.1,
        color: fontColor,
        fontWeight: "bold",
        zIndex: 1
    }

    const heightTextStyle = {
        position: "absolute",
        left: "0",
        transform: "rotate(90deg)",
        color: fontColor,
        fontSize: fontSize * 0.1,
        zIndex: 1   
    }

    return (
        <div id={Style.Preview}>
            {/* Wrapper for visual scaling */}
            <div
                className={Style.previewContainer}
                style={{
                    width: `${maxPreviewSize}px`,
                    height: `${maxPreviewSize}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor:"yellow"
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
                        {showDimensions
                        ? 
                            <>
                                <p style={widthTextStyle}>{width}</p>
                                <p style={heightTextStyle}>{height}</p>
                            </>
                        :
                            <></>
                        }

                        <p style={{
                            fontSize: `${fontSize * 0.5}px`,
                            color: fontColor
                        }}>{emoji}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview