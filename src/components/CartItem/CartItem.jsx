import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


export const CartItem = ({ urlImg, name, count, price,total }) => {
  const { buyingTotal } = useContext(CartContext)
  return (
    <>
      <div className="w-full rounded flex justify-around px-5 items-center text-white">
        {/* <div className={`${styles.itemsBox}`}> */}
        <img src={urlImg} alt="" className="w-1/12" />
        <h2>Nombre:
          <p>{name}</p>
        </h2>
        <h2>Cantidad:
          <p>{count}</p>
        </h2>
        <h2>
          Total:
          <p>{total}</p>
        </h2>
      </div>
      
      
    </>
  )
}
