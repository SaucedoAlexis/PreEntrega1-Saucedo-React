
import styles from "./NavBarSubItems.module.css"
export const NavBarSubItems = ({ subItemName, href }) => {
    return (
        <li className={`py-3 ${styles.hover} self-end`}>
            <a href={`${href}`}>{subItemName}</a>
        </li>

    )
}
