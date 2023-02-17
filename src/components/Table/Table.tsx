'use client'

import styles from './table.module.scss'
import { useState, useContext } from "react"
import { UserContext } from '../../contexts/userContext'

function Table(props) {
    const { followers, followings, username } = useContext(UserContext)
    return (
        <main className={styles.container}>
            <button onClick={() => console.log(username)}>CLIQUE</button>
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
                                <tr>
                                    <td>Luci Lua</td>
                                    <td>Link</td>
                                    <td>Bio here</td>
                                </tr>
                                <tr>
                                    <td>Luci Lua</td>
                                    <td>Link</td>
                                    <td>Bio here</td>
                                </tr>
                                <tr>
                                    <td>Luci Lua</td>
                                    <td>Link</td>
                                    <td>Bio here</td>
                                </tr>
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
                                <tr>
                                    <td>Luci Lua</td>
                                    <td>Link</td>
                                    <td>Bio here</td>
                                </tr>
                                <tr>
                                    <td>Luci Lua</td>
                                    <td>Link</td>
                                    <td>Bio here</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Table