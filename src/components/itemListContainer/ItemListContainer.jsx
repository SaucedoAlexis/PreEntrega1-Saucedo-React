
import { Item } from '../Item/Item'
import styles from './ItemListContainer.module.css'
import { getProducts} from '../../ItemsMock'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({products}) => {
    
   
    

    return (
        <div className={`inline-block h-screen w-full pt-4`}>
            <div className='flex flex-wrap items-center justify-center gap-2'>
                
                {products.map((product) => <Item key={product.id} {...product} /> )}
            </div>
        </div>
    )
}
// flex justify-content-center align-items-center