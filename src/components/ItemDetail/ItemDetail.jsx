import styles from "./ItemDetail.module.css"

export const ItemDetail = ({urlImg, description, price,name}) => {
    return (
        <div className={`${styles.details}`}>
            <img src={urlImg} alt={`imagen de ${name}`} className={`${styles.image}`}/>
            <div className={`${styles.info}`}>
                <h2>{name}</h2>
                <h3>Precio: {price}$</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
