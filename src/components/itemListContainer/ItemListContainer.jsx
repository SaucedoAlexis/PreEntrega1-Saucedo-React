
import { Item } from '../Item/Item'
import styles from './ItemListContainer.module.css'
import {useProducts} from "../../hooks/useProducts"
import { LoadingContainer } from '../LoadingContainer/LoadingContainer'

export const ItemListContainer = () => {
    
    const {whatProducts,categoryId,subCategoryId,isLoading} = useProducts()
   
    

    return (
        <div className={`inline-block h-screen w-full pt-4`}>
            <div className='flex flex-wrap items-center justify-center gap-2'>
                
                {isLoading ? <LoadingContainer/> : whatProducts(categoryId,subCategoryId).map((product) => <Item key={product.id} {...product} /> )}
            </div>
        </div>
    )
}
