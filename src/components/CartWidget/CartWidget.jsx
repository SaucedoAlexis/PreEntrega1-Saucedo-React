import { useContext } from "react";
import styles from "./CartWidget.module.css"
import { BsCart4 } from 'react-icons/bs';
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {
    const {count} = useContext(CartContext)
    return (
        <div className={`flex justify-center items-center`}>
            <BsCart4 color="white" fontSize="2.5rem"/>
            <span className={`${styles.number}`}>{count}</span>
        </div>
    )
}
