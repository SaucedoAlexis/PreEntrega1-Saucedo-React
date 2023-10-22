import styles from "./CartWidget.module.css"
// "${}} bi bi-cart4"
export const CartWidget = () => {
    return (
        <div className={`d-flex justify-content-center align-items-center ${styles.cartDiv}`}>
            <i className={`${styles.cart} bi bi-cart4`}></i>
            <span className={`${styles.number}`}>1</span>
        </div>
    )
}
