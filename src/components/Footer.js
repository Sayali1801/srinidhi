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
                <p>Lorem Ipsum</p>
                <h1>Lorem Ipsum</h1>
            </div>
            <div className='footer-divs'>
                <h1>Social media links</h1>
                <div className='social-media-icons'>
                    <img src={require('../Images/youtube.png')} alt=""/>
                    <img src={require('../Images/IG.png')} alt=""/>
                    <img src={require('../Images/linkedin.png')} alt=""/>
                    <img src={require('../Images/Twitter.png')} alt=""/>

                </div>
                </div>

        </div>
        <hr className='line'/>
        <div className='privacy'>Vriksh Fertility  ©   2023 All Right Reserved.</div>

        </div>
    )
}
export default Footer;