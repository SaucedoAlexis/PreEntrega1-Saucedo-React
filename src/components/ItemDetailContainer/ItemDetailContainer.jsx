import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useProductId } from "../../hooks/useProductId";
import { LoadingContainer } from "../LoadingContainer/LoadingContainer";

export const ItemDetailContainer = () => {

    const {isLoading,product} = useProductId()
    
    return (
    
      <div className="flex items-center justify-center h-fit">
              { isLoading ? <LoadingContainer/> : <ItemDetail {...product}/> }
      </div>
    )
  }
