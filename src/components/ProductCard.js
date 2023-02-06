import '../Styles/productCard.css';
import Data from '../Data.json';
function ProductCard(){
    return(
        <div className='productCard-main'>
            <div className='productCard-img'>
                {Data.products.products_img.map((item)=>{
                    return(
                        <img src={require('../Images/' + item)} alt="card img"/>
                    )
                })}
            </div>
            <div className='productCard-name'>
                {Data.products.products_img_title.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductCard;