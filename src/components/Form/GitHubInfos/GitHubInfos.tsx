import styles from "../form.module.scss"
import { FiTwitter, FiGithub } from "react-icons/fi"
import { CgWebsite } from "react-icons/cg"
import Link from "next/link"

function GitHubInfos({ userData }) {
    return (
        <div className={styles.user_info}>
            <ul>
                <aside>
                    {
                        userData.html_url ?
                            <Link
                                target='_blank'
                                href={userData.html_url}>
                                <FiGithub />
                            </Link>
                            : null
                    }
                    {
                        userData.twitter_username ?
                            <Link
                                target='_blank'
                                href={`https://twitter.com/${userData.twitter_username}`}>
                                <FiTwitter />
                            </Link>
                            : null
                    }
                    {
                        userData.blog ?
                            <Link
                                target='_blank'
                                href={`https://${userData.blog}`}>
                                <CgWebsite />
                            </Link>
                            : null
                    }
                </aside>
                <aside>

                    <header>
                        <div className={styles.c_img}>
                            <img src={userData.avatar_url} />
                        </div>
                        <div className={styles.about}>
                            <h1>{userData.name} ({userData.type})</h1>
                            {
                                userData.bio ?
                                    <h2 className={styles.bio}>
                                        Bio: {userData.bio}
                                    </h2>
                                    :
                                    null}
                        </div>
                    </header>


                    <div className={styles.followersAndFollowing}>
                        <li className={styles.followers}>
                            Followers: {userData.followers}
                        </li>
                        <li className={styles.following}>
                            Following: {userData.following}
                        </li>
                    </div>
                </aside>
            </ul>
        </div>
    )
}

export default GitHubInfos