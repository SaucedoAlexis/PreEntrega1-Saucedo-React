import { ItemCount } from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"

export const ItemDetail = ({urlImg, description, price,name, stock}) => {
    return (
        <div className={`${styles.details}`}>
            <img src={urlImg} alt={`imagen de ${name}`} className={`${styles.image}`}/>
            <div className={`${styles.info}`}>
                <h2>{name}</h2>
                <h3>Precio: {price}$</h3>
                <p>{description}</p>
                <ItemCount stock={stock}></ItemCount>
                
            </div>
        </div>
    )
}
