'use client'

import Image from "next/image"
import Link from "next/link"
import { DiGithubAlt } from "react-icons/di"

import styles from "../table.module.scss"

function TableByType({title, type}) {

    return (
        <div className={styles.c_table}>
            <h1>{title}</h1>
            <div className={styles.table}>
                <div className={styles.item}>
                    <div className={styles.c_who}>
                        <span>Username</span>
                    </div>
                    <div><p>Type</p></div>
                    <div>
                        Link
                    </div>
                </div>
                {type.map(followingOrFollower => {
                    return (
                        <div key={followingOrFollower.id} className={styles.item}>
                            <div className={styles.c_who}>
                                <span>{followingOrFollower.login}</span>
                                <div className={styles.c_img}>
                                    <Image
                                        sizes='40'
                                        fill={true}
                                        alt='img_user'
                                        src={`${followingOrFollower.avatar_url}`} />
                                </div>
                            </div>
                            <div><p>{followingOrFollower.type}</p></div>
                            <div>
                                <p>

                                    <Link
                                        href={`https://github.com/${followingOrFollower.login}`}>
                                        <DiGithubAlt /> GitHub
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TableByType