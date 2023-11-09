import { useCount } from "../../hooks"


export const Button = ({initial,incrementFunction,decrementFunction}) => {
  return (

    <div className="flex justify-between items-center w-full px-2 mb-1">
        <button className="text-white text-2xl" onClick={decrementFunction}>-</button>
        <span>{initial}</span>
        <button className="text-white text-2xl" onClick={incrementFunction}>+</button>
    </div>
  )
}
