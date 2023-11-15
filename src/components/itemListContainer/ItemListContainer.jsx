

import { useProducts } from "../../hooks/useProducts"
import { LoadingContainer } from '../LoadingContainer/LoadingContainer'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const { whatProducts, categoryId, subCategoryId, isLoading } = useProducts()



    return (
        <div className={`inline-block h-screen w-full pt-4`}>
            

                {isLoading ? <LoadingContainer /> : <ItemList products={whatProducts(categoryId,subCategoryId)}></ItemList>}
            
        </div>
    )
}
