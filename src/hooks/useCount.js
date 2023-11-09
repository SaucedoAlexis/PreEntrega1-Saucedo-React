
import { useState } from 'react'

export const useCount = (initial = 0,max) => {
  const [count, setCount] = useState(initial)

  const increment = () =>{
    
    count < max && setCount(count + 1);
  }

  const decrement = () => {

    count > 1 && setCount(count  - 1)
  }

  return {count, increment, decrement}
}
