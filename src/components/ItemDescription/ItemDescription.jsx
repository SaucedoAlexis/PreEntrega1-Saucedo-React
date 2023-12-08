import React from 'react'
import styles from './ItemDescription.module.css'
export const ItemDescription = ({ urlImg, description, price, name}) => {
  return (
    <>
    <img src={urlImg} alt={`imagen de ${name}`} className={`${styles.image}`} />
            <div className={`${styles.info}`}>
                <h2>{name}</h2>
                <h3>Precio: {price}$</h3>
                <p>{description}</p></div>
    </>
  )
}
