import { useContext } from "react"
import { CartContext, CartContextProvider } from "../../Context/CartContext"


export const AddProductButton = (id) => {
  const { addProduct } = useContext(CartContext)
  
  const handleProductAddition = () => {

    addProduct(id);
    
  };


  return (
    <button className="rounded bg-white text-black mt-3 absolute" onClick={handleProductAddition}>Agregar al carrito</button>
  )
}
