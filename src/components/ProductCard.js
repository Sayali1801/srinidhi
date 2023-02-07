import '../Styles/productCard.css';
import Data from '../Data.json';
function ProductCard(){
    return(
        <div className='productCard-main'>
        {Data.products.product_card.map((item)=>{
            return(
                <>
                <div className='productCard'>
                    <img src={require('../Images/' + item.img)} alt="product"/>
                    <p>{item.name}</p>

                </div>
                </>
            )
        })}
        </div>
    )
}
export default ProductCard;