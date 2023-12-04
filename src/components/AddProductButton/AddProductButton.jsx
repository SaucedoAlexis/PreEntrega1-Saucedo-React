import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


export const AddProductButton = ({id,name,count,price,urlImg}) => {
  const { addProduct } = useContext(CartContext)
  const product = {
    id:id,
    name:name,
    count:count,
    price:price,
    urlImg:urlImg
  }
  const handleProductAddition = () => {

    addProduct(product);
    
  };


  return (
    <button className="rounded bg-white text-black mt-3" onClick={handleProductAddition}>Agregar al carrito</button>
  )
}
