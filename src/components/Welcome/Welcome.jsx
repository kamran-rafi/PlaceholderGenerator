import Style from "./Welcome.module.css"
import Button from "../Button/Button"

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
                <Button title="Get Started!"/>
            </main>
        </section>
    )
}

export default Welcome