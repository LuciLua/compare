import styles from "./section.module.scss"

interface PropsSection {
    title: string,
    subtitle?: string,
    id: string,
    children: any
}

function Section(props: PropsSection) {
    return (
        <section className={styles.section} id={props.id}>
            <header>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </header>
            <main>
                {props.children}
            </main>
        </section>

    )
}

export default Section