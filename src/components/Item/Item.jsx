import { useCount } from "../../hooks"

import styles from "./Item.module.css"
import { Link } from "react-router-dom"

export const Item = ({ id, name, price, category, subCategory, urlImg, stock }) => {
  const { count, increment, decrement } = useCount(0, stock)

  return (
    <div className={`text-white ${styles.card}`}>
      <img src={`${urlImg}`} alt={`Imagen de ${name}`} />
      <h2>{name}</h2>
      <h3>{category}</h3>
      <h3>{subCategory}</h3>
      <h3>Precio: {price} $</h3>
      
      <Link to={`/item/${id}`}>
        <button className={`${styles.detailButton}`}>Detalles</button>
      </Link>

    </div>
  )
}
