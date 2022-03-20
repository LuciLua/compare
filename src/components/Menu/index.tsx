import ItemMenu from "./Items/Item"
import styles from "./menu.module.scss"

import { compare, user, exit } from "../Menu/Items/Icons/icon"

function Menu(props) {
    return (
        <>
            <div className={styles.containerUl}>
                <ul>
                    <ItemMenu
                        href="#welcome"
                        icon={user} />
                    <ItemMenu
                        // label="F" 
                        href="#compare"
                        icon={compare} />
                    <ItemMenu
                        href="/"
                        icon={exit}
                    />
                </ul>
            </div>
            {props.children}
        </>
    )
}

export default Menu