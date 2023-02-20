'use client'

import styles from './table.module.scss'
import { useContext } from "react"
import { UserContext } from '../../contexts/userContext'

import TableByType from './TableByType/TableByType'

function Tables() {

    const { notReciprocate, iNotReciprocate } = useContext(UserContext)

    // await new Promise(resolve => setTimeout(resolve, 2000))

    return (
        <main className={styles.container}>
            <div className={styles.c_tables}>
                {
                    notReciprocate.length > 0 ?
                        <TableByType
                            title="😡 Follow back do not reciprocate"
                            type={notReciprocate} />
                        : null
                }
                {
                    notReciprocate.length > 0 ?
                        <TableByType
                            title="🚶 follow me and i don't follow yet"
                            type={iNotReciprocate} />
                        : null
                }
            </div>
        </main>
    )
}
export default Tables
