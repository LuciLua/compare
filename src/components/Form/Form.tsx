// os components que possuirem use client serão hidratados, ou seja:
// irao receber javascript do servidor (next), ou seja:
// adicionar funcionamento interactivo a esse componente
// todo o resto, nao0 precisa de javascrip para funcionar
'use client'

import styles from "./Form.module.scss"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import GitHubInfos from "./GitHubInfos/GitHubInfos"
import Image from "next/image"

export default function Form() {

    const { setUsername, fetchUserProfileData, userData, username } = useContext(UserContext)

    async function searchGitHubUser() {
        await fetchUserProfileData()
        await setUsername('')
    }

    return (
        <main className={styles.container}>
            <form onSubmit={e => e.preventDefault()}>
                <h1>🔎 Search for a user</h1>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder="GitHub User" />
                <button onClick={searchGitHubUser}>compare the lists</button>
            </form>
            {
                userData.name ?
                    <GitHubInfos userData={userData} />
                    : null
            }
        </main>
    )
}
