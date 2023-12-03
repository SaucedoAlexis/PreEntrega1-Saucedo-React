

import { useEffect } from 'react'
import { useCount } from '../../hooks'


export const ItemCount = ({ stock, urlImg, name, price, countFunction }) => {
    const { count, handleDecrement, handleIncrement } = useCount(0, stock)
    
    useEffect(() => {

        countFunction(count)

    }, [count])

    return (
        <>
            <div className='mt-3 mx-auto flex justify-between items-center w-1/2  border-5 border-white rounded-xl p-0'>
                <button className='text-4xl h-auto' onClick={handleIncrement}>+</button>
                <p className='text-3xl' >{count}</p>
                <button className='text-4xl' onClick={handleDecrement}>-</button>

            </div>


        </>
    )
}
