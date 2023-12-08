
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"

import { AddProductButton } from "../AddProductButton/AddProductButton"
import { ItemDescription } from "../ItemDescription/ItemDescription"

export const ItemDetail = ({ urlImg, description, price, name, stock, id }) => {

    const product = {
        urlImg: urlImg,
        name: name,
        price: price,
        id: id,
        description: description

    }


    const [count, setCount] = useState(0)

    const handleCount = (number) => {
        setCount(number)
    }

    return (
        <div className={`${styles.details} flex flex-col`}>
            <ItemDescription {...product} />

            <div className="w-10/12">
                <ItemCount stock={stock} countFunction={handleCount} ></ItemCount>
                {
                    count > 0 ? <AddProductButton {...product} count={count} ></AddProductButton> :
                        <button type="button" disabled className={' cursor-not-allowed rounded border border-white  text-white mt-3 p-3'}>Agregar al carrito</button>
                }
            </div>

        </div>

    )
}
