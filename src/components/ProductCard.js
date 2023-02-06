import Data from "../Data.json";
function ProductCard() {
  return (
    <div>
      <h1>{Data.home_page.products.products_title}</h1>
      <p>{Data.home_page.products.products_desc}</p>
      <div>
{Data.home_page.products.products_img.map((item)=>{
    return(<img src={item} alt=""/>)
})}
        {Data.home_page.products.products_img_title.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}
export default ProductCard;
