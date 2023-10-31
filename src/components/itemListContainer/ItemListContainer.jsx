import style from './ItemListContainer.module.css'

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className={`${style.greeting} flex justify-center items-center`}>
            
            <p className="text-center text-4xl font-bold text-white">{greeting}</p>
            
        </div>
    )
}
// flex justify-content-center align-items-center