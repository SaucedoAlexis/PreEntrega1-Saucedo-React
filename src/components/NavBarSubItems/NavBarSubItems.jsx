import { Link } from "react-router-dom"
import styles from "./NavBarSubItems.module.css"

export const NavBarSubItems = ({subItemName}) => {

    return (

        <li className={`py-3 ${styles.hover} self-end`}>
            <Link to={`/subCategory/${subItemName}`}>
                {subItemName}
            </Link>
        </li>

    )
}
