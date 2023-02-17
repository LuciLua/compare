// os components que possuirem use client serão hidratados, ou seja:
// irao receber javascript do servidor (next), ou seja:
// adicionar funcionamento interactivo a esse componente
// todo o resto, nao0 precisa de javascrip para funcionar
'use client'

import styles from "./form.module.scss"
import { Suspense, useState } from "react"
import useUser from "../../hooks/useUser"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"

export default function Form() {
    const [githubUser, setGithubUser] = useState<any>({})

    const { setUsername, username, fetchFollowers } = useContext(UserContext)


    async function searchGitHubUser() {

        // const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        //     // const response = await fetch(`https://api.github.com/users/${username}`, {
        //     cache: 'no-store'
        // })
        // const data = await response.json()
        // setGithubUser(await data)

        fetchFollowers()

        // 30 itens por pagina
        // const page = 1
        // const followersURL = `https://api.github.com/users/${username}/following?page=${page}`
        // const followingURL = `https://api.github.com/users/${username}/followers?page=${page}`

        // setUser(username) 
    }

    return (
        <main className={styles.container}>
            <form action="" onSubmit={e => e.preventDefault()}>
                <input onChange={e => setUsername(e.target.value)} type="text" placeholder="GitHub User" />
                <button onClick={searchGitHubUser}>compare the lists</button>
            </form>
            <div className={styles.user_info}>
                <Suspense fallback={<p>⌛ loading github infos...</p>}>
                    {githubUser.login ?
                        <ul>
                            <header>
                                <div className={styles.c_img}>
                                    <img src={githubUser.avatar_url} />
                                </div>
                                <h1>{githubUser.name}</h1>
                            </header>

                            {githubUser.bio ?
                                <li>
                                    Bio: {githubUser.bio}
                                </li>
                                :
                                null}
                            {
                                githubUser.twitter_username ?
                                    <li>
                                        Twitter: {githubUser.twitter_username}
                                    </li>
                                    : null
                            }
                            <li>
                                Followers: {githubUser.followers}
                            </li>
                            <li>
                                Following: {githubUser.following}
                            </li>
                        </ul>
                        : <p>
                            ⌛waiting for input...
                        </p>}
                </Suspense>
            </div>
        </main>
    )
}