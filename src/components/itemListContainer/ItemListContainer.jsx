
import style from './ItemListContainer.module.css'

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className={`inline-block h-screen w-full`}>
            <div className=''>
                <p className="text-center text-4xl font-bold text-white">{greeting}</p>
            </div>
        </div>
    )
}
// flex justify-content-center align-items-center