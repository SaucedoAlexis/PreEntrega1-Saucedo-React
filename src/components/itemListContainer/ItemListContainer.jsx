import style from './ItemListContainer.module.css'

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className={`${style.greeting} d-flex justify-content-center align-items-center`}>
            <p className="text-center fs-1 text fw-bold text-light">{greeting}</p>
        </div>
    )
}
