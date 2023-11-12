import React, { useState } from 'react'

export const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        
        if(count < stock){
            setCount(count + 1)
        }
    }

    const handleDecremente = () =>{
        if(count != 0){
            setCount(count - 1)
        }
    }



    return (
        <div className='mt-3 flex justify-between items-center w-1/2 mx-auto border-5 border-white rounded-xl p-0'>
        <button className= 'text-4xl h-auto' onClick={handleIncrement}>+</button>
        <p className='text-3xl '>{count}</p>
        <button className='text-4xl' onClick={handleDecremente}>-</button>
        
        </div>
    )
}
