import '../Styles/Product.css';
import ProductCard from "./ProductCard";
import Data from '../Data.json';
function Product() {
  return (
    <div className="product-main">
    <h1>{Data.products.products_title}</h1>
    <p>{Data.products.products_desc}</p>
    <ProductCard/>
    </div>
  );
}
export default Product;
