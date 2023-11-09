

export const ItemDetailContainer = ({urlImg, descripcion, precio,name}) => {
    return (
        <div className="flex text-white">
            <img src={urlImg} alt={`imagen de ${name}`} />
            <div>
                <h2>{name}</h2>
                <h3>{precio}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}
