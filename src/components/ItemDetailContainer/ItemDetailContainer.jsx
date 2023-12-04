import { ItemDetail } from "../ItemDetail/ItemDetail";

import { LoadingContainer } from "../LoadingContainer/LoadingContainer";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ashitaProducts } from "../../config/ashitaConfig";

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState({})

  useEffect(() => {
    
    const docRef = doc(ashitaProducts, "products", id);
    
    const docSnap = getDoc(docRef)
    
      .then(resp => {
        setProduct(resp.data())
        
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      })
      
  }

    , [])

  return (

    <div className="flex items-center justify-center h-fit">
    {isLoading ? <LoadingContainer /> : product ? <ItemDetail {...product} key={id} id={id} /> :  <h1 className="text-white text-4xl pt-24">No se ha encontrado el producto</h1>}
    </div>
  )
}
