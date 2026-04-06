import Style from "./Welcome.module.css"

const Welcome = () => {
    return (
        <section id={Style.Welcome}>
            <main className={Style.main}>
                <h1>
                    Make Ugly <span>Placeholders</span>
                    <br />
                    Beautifully Fast
                </h1>
                <p>
                    Generate bold, customizable placeholder images offline. Set size, colors, text, and vibe—then download instantly.
                </p>
                <button>
                    Get Started!
                </button>
            </main>
        </section>
    )
}

export default Welcome