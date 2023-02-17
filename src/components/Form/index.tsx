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

    const { setUsername, fetchUserProfileData, userData} = useContext(UserContext)

    async function searchGitHubUser() {
        fetchUserProfileData()
    }

    return (
        <main className={styles.container}>
            <form action="" onSubmit={e => e.preventDefault()}>
                <input onChange={e => setUsername(e.target.value)} type="text" placeholder="GitHub User" />
                <button onClick={searchGitHubUser}>compare the lists</button>
            </form>
            <div className={styles.user_info}>
                <Suspense fallback={<p>⌛ loading github infos...</p>}>
                    {userData ?
                        <ul>
                            <header>
                                <div className={styles.c_img}>
                                    <img src={userData.avatar_url} />
                                </div>
                                <h1>{userData.name}</h1>
                            </header>

                            {userData.bio ?
                                <li>
                                    Bio: {userData.bio}
                                </li>
                                :
                                null}
                            {
                                userData.twitter_username ?
                                    <li>
                                        Twitter: {userData.twitter_username}
                                    </li>
                                    : null
                            }
                            <li>
                                Followers: {userData.followers}
                            </li>
                            <li>
                                Following: {userData.following}
                            </li>
                        </ul>
                        : <p>
                            ⌛waiting for input...
                        </p>
                    }
                </Suspense>
            </div>
        </main>
    )
}