import Data from '../Data.json';
import '../Styles/Footer.css';
function Footer(){
    return(
        <div className='footer-main'>
        <div className='footer'> 
            <div>
                <img src={require('../Images/logo.png')} className="company-logo"/>
            </div>
            <div className='footer-divs'>
                <h1>company</h1>
                <p>About Us</p>
                <h1>Testimonials</h1>
            </div>
            <div className='footer-divs'>
                <h1>Product</h1>
                <p>View all products</p>
                <h1>Contact Us</h1>
            </div>
            <div className='footer-divs'>
                <h1>get qoute</h1>
                <p></p>
                <h1></h1>
            </div>
            <div className='footer-divs'>
                <h1>Social media links</h1>
        {Data.footer.footer_social_media.map((item)=>{
            return(
                <img src={require('../Images/' + item)} alt="social media links"/>
            )
        })}
                </div>

        </div>
        <hr className='line'/>
        <div>Vriksh Fertility    2023 All Right Reserved.</div>

        </div>
    )
}
export default Footer;