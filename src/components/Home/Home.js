import { bannerImg } from "../../products";
import Product from "../Product/Product";
import "../../componentStyle/products.css";
import "../../componentStyle/home.css";
import useFetchProducts from "../hooks/useFetchProducts";

const Home = () => {
  const { products, fetched } = useFetchProducts();
  console.log("fetched", fetched);
  console.log("products", products);
  return (
    <div id="home">
      <img src={bannerImg} className="home-image" alt="Error" />
      <div id="productContainer">
        {fetched &&
          products.map((product) => {
            return (
              <Product
                className="home-row"
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
