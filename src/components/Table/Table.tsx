import { ReactChild, ReactFragment, ReactPortal } from 'react'
import useUser from '../../hooks/useUser'
import styles from './table.module.scss'

interface PropsTable {
    linkFinal: string,
    getImpostor: any,
    impostor: any,
    followers: any,
    following: any
}

function Table(props: PropsTable) {

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.linkFinal}>{props.linkFinal}</span>
            </div>

            <button onClick={props.getImpostor} className={styles.getImpostorBtn}>
                get impostor
            </button>
            <div className={styles.impostor}>
                <b>impostor(es): {props.impostor.length}</b>
                <div className={styles.impostorList}>
                    {props.impostor.map((i: any) => {
                        return <p key={i}>{i}</p>
                    })}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.wrapFlex}>

                    <h1>Followers: {props.followers.length}</h1>
                    <div className={styles.followers}>
                        {props.followers.map((fw: any) => {
                            return <p key={fw.id}>{fw.login}</p>
                        })}
                    </div>

                </div>
                <div className={styles.wrapFlex}>

                    <h1>Following: {props.following.length}</h1>
                    <div className={styles.following}>
                        {props.following.map((fw: any) => {
                            return <p key={fw.id}>{fw.login}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table