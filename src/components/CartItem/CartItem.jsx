import style from "./CartItem.module.css"


export const CartItem = ({ urlImg, name, count, price, total }) => {
  
  return (
    <>
      <div className="w-full rounded flex justify-around py-3 items-center text-white">

        <img src={urlImg} alt="" className={`${style.cartImg}`} />

        <h2>Nombre:
          <p>{name}</p>
        </h2>

        <h2>Cantidad:
          <p>{count}</p>
        </h2>

        <h2>
          Precio Unitario:
          <p>{price}$</p>
        </h2>

        <h2>
          Total:
          <p>{total}$</p>
        </h2>
        
      </div>

    </>
  )
}
