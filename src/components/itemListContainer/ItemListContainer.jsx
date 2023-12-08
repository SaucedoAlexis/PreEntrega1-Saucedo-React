

import { collection, getDocs, query, where } from "firebase/firestore"
import { LoadingContainer } from '../LoadingContainer/LoadingContainer'
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from "react"
import { ashitaProducts } from "../../config/ashitaConfig"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    //filtros
    const { categoryId } = useParams()
    const { subCategoryId } = useParams()

    //Controladores
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([])


    useEffect(() => {

        let marketProducts = "";
        //Sí hay una categoría o sub categoría se filtrarán
        if (categoryId || subCategoryId) {

            categoryId ? marketProducts = query(collection(ashitaProducts, "products"), where("category", "==", categoryId))
                : marketProducts = query(collection(ashitaProducts, "products"), where("subCategory", "==", subCategoryId))
            !isLoading && setIsLoading(true)

        }//y si no se cargan todos los productos de la base de datos
        else {
            marketProducts = query(collection(ashitaProducts, "products"));
            !isLoading && setIsLoading(true)

        }//transformamos lo obtenido de la promesa en datos legibles y los pasamos a un arreglo
        getDocs(marketProducts)
            .then(resp => {
                setIsLoading(false);
                setProducts(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                
            })
            .catch(err => {
                console.log(err);
                
            })

    }, [categoryId, subCategoryId])
    return (
        <div className={`inline-block h-screen w-full pt-4`}>
            {isLoading ? <LoadingContainer /> : <ItemList products={products}></ItemList>}
        </div>
    )
}
