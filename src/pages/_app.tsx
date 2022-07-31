import '../styles/globals.scss'
import Menu from "../components/Menu"

function App({ Component, pageProps }) {
    return (
        <main>
            <Component {...pageProps} />
            <Menu />
        </main>
    )
}

export default App