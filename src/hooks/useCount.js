
import { useState } from 'react'

export const useCount = (initial = 0,max) => {
  const [count, setCount] = useState(initial)

  const handleIncrement = () =>{
    
    count < max && setCount(count + 1);
  }

  const handleDecrement = () => {

    count > 0 && setCount(count  - 1)
  }

  return {count, handleIncrement, handleDecrement}
}
