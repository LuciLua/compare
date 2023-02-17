'use client'

import styles from './table.module.scss'
import { useState, useContext } from "react"
import { UserContext } from '../../contexts/userContext'
import Link from 'next/link'
import Image from 'next/image'

function Table(props) {

    const { followers, followings } = useContext(UserContext)

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
                                    <th>Profile</th>
                                    <th>Bio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    followers ?
                                        followers.map(follower => {
                                            return (
                                                <tr key={follower.id}>
                                                    <td>{follower.login}</td>
                                                    <td><Link href={`https://github.com/${follower.login}`}>GitHub</Link></td>
                                                    <td>
                                                        {/* <Image fill={true} alt='img_user' src={`${follower.avatar_url}`} /> */}
                                                    </td>
                                                </tr>
                                            )
                                        })

                                        : null
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
                                    <th>Profile</th>
                                    <th>Bio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    followings ?
                                        followings.map(following => {
                                            return (
                                                <tr key={following.id}>
                                                    <td>{following.login}</td>
                                                    <td><Link href={`https://github.com/${following.login}`}>GitHub</Link></td>
                                                    <td>
                                                        {/* <Image
                                                        fill={true}
                                                        alt='img_user'
                                                        src={`${following.avatar_url}`} /> */}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        : null
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