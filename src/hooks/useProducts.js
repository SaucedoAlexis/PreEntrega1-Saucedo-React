import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../ItemsMock";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  const { subCategoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((resp) => {
        setProducts(resp);
        setInterval(() => {
          setIsLoading(!isLoading);
        }, 2000);
      })
      .catch((error) => console.log(error));
  }, [products]);

  const whatProducts = (categoryId, subCategoryId) => {
    let filterProd = products;
    if (categoryId) {
      filterProd = products.filter((prod) => prod.category == categoryId);
    } else if (subCategoryId) {
      filterProd = products.filter((prod) => prod.subCategory == subCategoryId);
    }
    return filterProd;
  };

  return {
    isLoading,
    categoryId,
    subCategoryId,
    whatProducts,
  };
};
