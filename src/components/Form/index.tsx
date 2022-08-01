import useUser from "../../hooks/useUser"
import Table from "../Table/Table"
import styles from "./form.module.scss"
import { AiFillCamera, AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"
import Image from "next/image"

interface PropsForm {
    linkFinal?: any,
    getImpostor?: any,
    getIamImpostor?: any,
    impostor?: any,
    iamImpostor?: any,
    followers?: any,
    following?: any,
    getMyPhoto?: any,
    userId?: any
}


function Form(props:PropsForm) {

    const [photo, setPhoto] = useState(`/gh.png`)

    const {
        user,
        novoUsuario,
        // setPage,
        setType,
        type,
        // page,
        linkFinal,
        impostor,
        followers,
        following,
        paginator,
        getImpostor,
        getIamImpostor,
        iamImpostor,
        getMyPhoto,
        userId,
    } = useUser()

    async function showPhoto() {
        const userID = await userId()
        setPhoto(`https://avatars.githubusercontent.com/u/${userID}`)
    }

    async function execPaginatorAndPhoto() {
        await paginator()
        await showPhoto()
    }



    return (
        <div className={styles.container}>
            <div className={styles.profilePhoto}>
                <Image
                    src={photo}
                    layout='fill'
                />
            </div>
            <div className={styles.boxInput}>
                <div className={styles.inputAndButton}>
                    <input
                        type="text"
                        placeholder="Your Username"
                        onChange={novoUsuario}
                    />
                    <button onClick={execPaginatorAndPhoto}>
                        <AiOutlineSearch />
                    </button>
                </div>

                <p>{user ? `Searching for ${user}` : ""}</p>
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
            <Table
                linkFinal={linkFinal}
                followers={followers}
                following={following}
                impostor={impostor}
                getImpostor={getImpostor}
                getIamImpostor={getIamImpostor}
                iamImpostor={iamImpostor}
                getMyPhoto={getMyPhoto}
                userId={userId} />
        </div>
    )
}

export default Form