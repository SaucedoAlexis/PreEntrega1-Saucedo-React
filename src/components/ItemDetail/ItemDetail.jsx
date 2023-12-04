
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"

import { AddProductButton } from "../AddProductButton/AddProductButton"

export const ItemDetail = ({ urlImg, description, price, name, stock, id }) => {
    
    const product = {
        urlImg: urlImg,
        name: name,
        price: price,
        id: id

    }
    

    const [count, setCount] = useState(0)

    const handleCount = (number) => {
        setCount(number)
    }

    return (
        <div className={`${styles.details}`}>
            
            <img src={urlImg} alt={`imagen de ${name}`} className={`${styles.image}`} />
            <div className={`${styles.info}`}>
                <h2>{name}</h2>
                <h3>Precio: {price}$</h3>
                <p>{description}</p>

                <ItemCount stock={stock} countFunction={handleCount} ></ItemCount>
                {
                    count > 0 ? <AddProductButton {...product} count={count} ></AddProductButton> :
                    <button className="rounded border border-white  text-white mt-3">Agregar al carrito</button>
                }


            </div>
        </div>
    )
}
