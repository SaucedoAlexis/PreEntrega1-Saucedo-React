
import { useCount } from '../../hooks'

export const ItemCount = ({stock}) => {
        const {count, handleDecrement, handleIncrement} = useCount(0,stock)



    return (
        <div className='mt-3 flex justify-between items-center w-1/2 mx-auto border-5 border-white rounded-xl p-0'>
        <button className= 'text-4xl h-auto' onClick={handleIncrement}>+</button>
        <p className='text-3xl'>{count}</p>
        <button className='text-4xl' onClick={handleDecrement}>-</button>
        
        </div>
    )
}
