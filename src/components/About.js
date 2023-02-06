import Data from '../Data.json';
import '../Styles/About.css';
function About(){
    return(
        <div className='about-main'>
        <h1>{Data.home_page.about_us.about_us_title}</h1>
        <div className='about-fan-text'>
          {Data.home_page.about_us.about_us_text.about_us_desc.map((item) => {
            return (
                <div className='about-fan-text-main'>
                <p>{item}</p>
                </div>
            );
          })}
          </div>
          <div className='about-fan-img'>
          {Data.home_page.about_us.about_us_text.about_us_fan.map((item)=>{
                    return(
                        <img src={require('../Images/' + item)} alt=""/>
                    )
                })}
</div>
      </div>

    )
}
export default About;