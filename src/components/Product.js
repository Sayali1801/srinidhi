import Data from "../Data.json";
import '../Styles/Product.css';
// import ProductCard from "./ProductCard";
function Product() {
  return (
    <div className="product-main">
    <div>
      <h1>{Data.products.products_title}</h1>
      <p>{Data.products.products_desc}</p>
    </div>
    {/* <ProductCard/> */}
    </div>
  );
}
export default Product;
