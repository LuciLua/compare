'use client'

import Form from "../components/Form/Form"
import Tables from "../components/Tables/Tables"
import UserContextProvider from "../contexts/userContext"
import styles from "../styles/home.module.scss"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (

        <div className={styles.wrap}>
            <UserContextProvider>
                <Form />
                <Tables />
            </UserContextProvider>
        </div>
    )
}
