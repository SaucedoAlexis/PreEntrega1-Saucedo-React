import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { CartList } from "../CartList/CartList."
import { CheckOut } from "../CheckOut/CheckOut"

export const CartListContainer = () => {
    const { cartItems, buyingTotal } = useContext(CartContext)

    return (

        <div >
            {cartItems.length > 0 ? <CartList products={cartItems} ></CartList> :
                <div className="text-white text-center align-middle text-3xl p-4">
                    <p>
                        No hay productos en el carrito 😒😒😒
                        <br/><br/>
                        Ingresa productos para poder completar el formulario 😎
                    </p>
                </div>
            }

            <div className="text-white p-5 text-3xl">
                Total a pagar: {buyingTotal}$
            </div>
            {cartItems.length > 0 && <CheckOut cartItems={cartItems} total={buyingTotal}></CheckOut>}


        </div>
    )
}
