import React from 'react'
import { CartItem } from '../CartItem/CartItem'

export const CartList = ({products}) => {
  return (
    <div>
        {products.map((prod) => <CartItem key={prod.id} {...prod}></CartItem>)}
    </div>
  )
}
