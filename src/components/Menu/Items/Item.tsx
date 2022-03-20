import Link from "next/link"
import styles from './item.module.scss'

interface PropsItemMenu {
    label?: string,
    href: string,
    icon: any
}

function ItemMenu(props: PropsItemMenu) {
    return (
        <>
            <li className={styles.li}>
                <Link href={props.href}>
                    <a>
                        <span className={styles.label}>
                            {props.label}
                        </span>
                        <span className={styles.icon}>
                            {props.icon}
                        </span>
                    </a>
                </Link>
            </li>
        </>
    )
}

export default ItemMenu