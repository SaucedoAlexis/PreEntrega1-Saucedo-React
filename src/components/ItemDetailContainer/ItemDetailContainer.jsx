import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../../ItemsMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";



export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        
        getProductById(id)
            .then(resp => {
                setProduct(resp)
                
                setIsLoading(!isLoading)

            })
            .catch(error => console.log(error))

    }, [])
    
    console.log(getProductById(2));

    return (
    
      <div className="d-flex justify-content-center mt-5">
              { isLoading ? <h2>Cargando detalles...</h2> : <ItemDetail {...product} /> }
      </div>
    )
  }
