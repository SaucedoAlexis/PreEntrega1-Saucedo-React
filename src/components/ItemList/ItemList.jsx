import { Item } from "../Item/Item"


export const ItemList = ({products}) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
       
        {products.map((prod) => <Item key={prod.id} {...prod}></Item>)}
    </div>
  )
}
