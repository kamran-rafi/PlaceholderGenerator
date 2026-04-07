import Style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer id={Style.Footer}>
            <p>Made with 🩵 by</p>
            <a href="https://github.com/kamran-rafi" target="_blank">Kamran</a>
        </footer>
    )
}

export default Footer