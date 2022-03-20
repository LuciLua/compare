import Form from "../components/Form"
import Menu from "../components/Menu"
import Section from "../components/Sections"
import styles from "../styles/home.module.scss"

function Home() {
    return (
        <>
            <div className={styles.container}>
                <Section title="Bem-Vindo" subtitle="GitHub Info" id="welcome">
                    <p>
                        Filtre quem não te segue de volta no GitHub e obtenha um link para o perfil do(s) usuário(s) encontrado(s)!
                    </p>
                </Section>
                <Section title="Compare" id="compare">
                    <Form  />
                </Section>
            </div>
        </>
    )
}

export default Home