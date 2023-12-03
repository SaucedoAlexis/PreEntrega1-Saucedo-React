import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../ItemsMock";

export const useProductId = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProductById(id)
      .then((resp) => {
        setProduct(resp);

        setIsLoading(!isLoading);
      })
      .catch((error) => console.log(error));
  }, []);

  return {
    product,
    isLoading,
  };
};
