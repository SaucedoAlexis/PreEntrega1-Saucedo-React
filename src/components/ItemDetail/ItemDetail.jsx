
import { useContext, useEffect, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"
import { CartContext } from "../../Context/CartContext"
import { AddProductButton } from "../AddProductButton/AddProductButton"

export const ItemDetail = ({ urlImg, description, price, name, stock, id }) => {
   

   const [count, setCount] = useState(0)

   const handleCount = (number) =>{
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
                { count > 0 && <AddProductButton urlImg={urlImg} price={price} name={name} id={id} count={count}  ></AddProductButton>}
                
                
            </div>
        </div>
    )
}
