import '../styles/globals.scss'
import Menu from "../components/Menu"

function App({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <Component {...pageProps} />
        </>
    )
}

export default App