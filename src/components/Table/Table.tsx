'use client'

import styles from './table.module.scss'
import { useContext } from "react"
import { UserContext } from '../../contexts/userContext'
import Link from 'next/link'
import Image from 'next/image'
import { DiGithubAlt } from "react-icons/di"

function Table() {
    const { notReciprocate, iNotReciprocate } = useContext(UserContext)

    return (
        <main className={styles.container}>
            <div className={styles.c_table}>
                <div className={styles.table}>
                    <h1>😡 Follow back do not reciprocate</h1>
                    <div className={styles.table_type}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>GitHub</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    notReciprocate.length > 0 ?
                                        notReciprocate.map(follower => {
                                            return (
                                                <tr key={follower.id}>
                                                    <td>{follower.login}</td>
                                                    <td>
                                                        <Link
                                                            href={`https://github.com/${follower.login}`}>
                                                            <DiGithubAlt /> GitHub
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Image
                                                            sizes='40'
                                                            fill={true}
                                                            alt='img_user'
                                                            src={`${follower.avatar_url}`} />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td>...</td>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.table}>
                    <h1>🚶 follow me and i don't follow yet</h1>
                    <div className={styles.table_type}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>GitHub</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    iNotReciprocate.length > 0 ?
                                        iNotReciprocate.map(following => {
                                            return (
                                                <tr key={following.id}>
                                                    <td>{following.login}</td>
                                                    <td>
                                                        <Link
                                                            href={`https://github.com/${following.login}`}>
                                                            <DiGithubAlt /> GitHub
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Image
                                                            sizes='40'
                                                            fill={true}
                                                            alt='img_user'
                                                            src={`${following.avatar_url}`} />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td>...</td>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Table
