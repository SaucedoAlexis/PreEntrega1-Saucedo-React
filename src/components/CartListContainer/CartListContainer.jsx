import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { CartList } from "../CartList/CartList."

import { CheckOut } from "../../CheckOut/CheckOut"

export const CartListContainer = () => {
    const { cartItems, buyingTotal } = useContext(CartContext)
    

    return (

        <div>

            {cartItems ? <CartList products={cartItems} ></CartList> :
                <div className="text-white text-center ">
                    No hay productos en el carrito 😒😒😒
                </div>
            }

            <div className="text-white p-5 text-3xl">
                Total a pagar: {buyingTotal}$
            </div>

            <CheckOut cartItems={cartItems} total={buyingTotal}></CheckOut>
           
        </div>
    )
}
