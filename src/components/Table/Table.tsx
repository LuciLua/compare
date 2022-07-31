import Link from 'next/link'
import styles from './table.module.scss'
import { AiFillGitlab, AiOutlineUser, AiFillCamera } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'

interface PropsTable {
    linkFinal: any,
    getImpostor: any,
    getIamImpostor: any,
    impostor: any,
    iamImpostor: any,
    followers: any,
    following: any,
    getMyPhoto: any,
    userId: any
}

function Table(props: PropsTable) {

    const [photo, setPhoto] = useState(`photo here`)


    async function showPhoto(props) {
        const userID = await props.userId()
        setPhoto(`https://avatars.githubusercontent.com/u/${userID}`)
    }


    return (
        <div className={styles.container}>

            <button onClick={() => showPhoto(props)}>
                <AiFillCamera />
            </button>

            <div className={styles.profilePhoto}>

                <Image
                    src={photo}
                    layout='fill'
                />
            </div>

            <div className={styles.impostors}>

                <div className={styles.btnCollection}>
                    <button onClick={props.getImpostor} className={styles.getImpostorBtn}>
                        <AiFillGitlab />
                    </button>
                    <button onClick={props.getIamImpostor} className={styles.getImpostorBtn}>
                        <AiOutlineUser />
                    </button>
                </div>
                <div className={styles.impostor}>
                    <b>impostor(es): {props.impostor.length}</b>
                    <div className={styles.impostorList}>
                        {props.impostor.map((i: any) => {
                            return (
                                <a key={i} href={`https://github.com/${i}`}>
                                    {i}
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.impostor}>
                    <b>I am impostor of: {props.impostor.length}</b>
                    <div className={styles.impostorList}>
                        {props.iamImpostor.map((i: any) => {
                            return (
                                <a key={i} href={`https://github.com/${i}`}>
                                    {i}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.wrapFlex}>
                    <h1>Followers: {props.followers.length}</h1>
                    <div className={styles.followers}>
                        {props.followers.map((fw: any) => {
                            return (
                                <Link href={`https://github.com/${fw.login}`} key={fw.id}>
                                    <a>{fw.login}</a>
                                </Link>
                            )
                        })}
                    </div>

                </div>
                <div className={styles.wrapFlex}>
                    <h1>Following: {props.following.length}</h1>
                    <div className={styles.following}>
                        {props.following.map((fw: any) => {
                            return (
                                <Link href={`https://github.com/${fw.login}`} key={fw.id}>
                                    <a>{fw.login}</a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table