
import { ItemCard } from '../ItemCard/ItemCard'
import styles from './ItemListContainer.module.css'
import { getProductById, getProducts, getProductsByCategory, getProductsBySubCategory } from '../../ItemsMock'
import { useEffect } from 'react'
import { useState } from 'react'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getProducts()
            .then(resp => {
                setProducts(resp)
                setIsLoading(!isLoading)

            })
            .catch(error => console.log(error))

    }, [])

    return (
        <div className={`inline-block h-screen w-full pt-4`}>
            <div className='flex flex-wrap items-center justify-center gap-2'>
                {products.map((product) => <ItemCard key={product.id} {...product} /> )}
            </div>
        </div>
    )
}
// flex justify-content-center align-items-center