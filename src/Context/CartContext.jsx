import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);



export const CartContextProvider = ({ children }) => {
  // UseState para el control de la cantidad y los items
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [buyingTotal, setBuyingTotal] = useState(0)
  // Funciones


  useEffect(() => {
    let quantity = 0
    let totalPrice = 0
    for (const prod of cartItems) {
      quantity += prod.count
      totalPrice += prod.total
    }
    setCount(quantity)
    setBuyingTotal(totalPrice)



  }, [cartItems])

  const addProduct = (product) => {
    
    //Busco el indice del producto para saber si existe o no
    const index = cartItems.findIndex((prod) => prod.id === product.id)
    
    if (index != -1 ) {

      //Copio los items del cart existente
      const cartCopy = [...cartItems]

      //modifico el item que me interesa
      cartCopy[index].count += product.count 
      cartCopy[index].total = cartCopy[index].price * cartCopy[index].count
      //establezco la lista modificada
      setCartItems(cartCopy)

    } else {
      const total = product.count * product.price
      const prodToAdd = { ...product, total }
      setCartItems([...cartItems, prodToAdd])

    }

  }

 

  


  const objectProvider = {
    addProduct,
    count,
    cartItems,
    buyingTotal
  }
  return (
    <CartContext.Provider value={objectProvider}>{children}</CartContext.Provider>
  )
}

