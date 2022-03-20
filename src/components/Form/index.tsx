import useUser from "../../hooks/useUser"
import Table from "../Table/Table"
import styles from "./form.module.scss"

function Form() {

    const {
        user,
        novoUsuario,
        filter,
        setPage,
        setType,
        type,
        page,
        linkFinal,
        impostor,
        followers,
        following,
        getImpostor
    } = useUser()

    return (
        <div className={styles.container}>
            <div className={styles.boxInput}>
                <input
                    type="text"
                    placeholder="Your Username"
                    onChange={novoUsuario}
                />
                <button onClick={filter}>
                    Filter {user ? `for ${user}` : ""}
                </button>
            </div>
            <div className={styles.btnGroup}>
                <h1>Pages</h1>
                <button onClick={() => setPage(1)}>1</button>
                <button onClick={() => setPage(2)}>2</button>
                <button onClick={() => setPage(3)}>3</button>
                <button onClick={() => setPage(4)}>4</button>
                <button className={styles.pageActive}>{page}</button>
            </div>
            <div className={styles.types}>
                <label htmlFor="followers">followers
                    <input
                        type="radio"
                        name="type"
                        id="followers"
                        value={"followers"}
                        onClick={() => setType("followers")}
                    />
                </label>

                <label htmlFor="following">following
                    <input
                        type="radio"
                        name="type"
                        id="following"
                        value={"following"}
                        onClick={() => setType("following")}
                    />
                </label>
                <label className={styles.typeActive} htmlFor="type">
                    {type}
                </label>
            </div>
            <Table linkFinal={linkFinal} followers={followers} following={following} impostor={impostor} getImpostor={getImpostor}/>
        </div>
    )
}

export default Form