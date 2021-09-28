import { useState } from "react";
import { useEffect } from "react";
const useFetchProducts = () => {
  const [products, setProducts] = useState("");
  const [fetched, setFetched] = useState(false);
  const url = "https://fakestoreapi.com/products?limit=5";

  useEffect(() => {
    console.log("fetching");
    const fetchProducts = async () => {
      const productsResponse = await fetch(url);
      const productsData = await productsResponse.json();
      setProducts(productsData);
      setFetched(true);
      console.log("products", products);
    };
    fetchProducts();
  }, []);
  return { products, fetched };
};

export default useFetchProducts;
