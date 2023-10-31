import styles from "./CartWidget.module.css"
import { BsCart4 } from 'react-icons/bs';
// "${}} bi bi-cart4"
export const CartWidget = () => {
    return (
        <div className={`flex justify-center items-center`}>
            <BsCart4 color="white" fontSize="2.5rem"/>
            <span className={`${styles.number}`}>1</span>
        </div>
    )
}
