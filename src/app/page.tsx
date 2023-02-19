'use client'

import Form from "../components/Form"
import Table from "../components/Table/Table"
import UserContextProvider from "../contexts/userContext"
import styles from "../styles/home.module.scss"

export default function Home() {
    return (

        <div className={styles.wrap}>
            <UserContextProvider>
                <Form />
                <Table />
            </UserContextProvider>
        </div>
    )
}
