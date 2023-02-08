import './Styles/Aboutsrinidhi.css';
import Data from './Data.json';
function Aboutsrinidhi(){
    return(
        <>
            {Data.home_page.about_srinidhi.map((item)=>{
                return(
                    <>
                    <section className="aboutsrinidhi-main">

                    <div className="about-text">
                    <h1>{item.about_srinidhi_mission_title}</h1>
                    <p>{item.about_srinidhi_mission_text}</p>
                    </div>
                    <div className='about-img'>
                        <img src={require('./Images/' + item.about_srinidhi_img)} alt=""/>
                    </div>
                    </section>


                    <div className='mission-vission-main'>
                        <div className='vission'>
                            <h2>{item.about_srinidhi_vision_title}</h2>
                            <p>{item.about_srinidhi_vision_text}</p>
                        </div>
                        <div className='mission'>
                        <h2>{item.about_srinidhi_mission_title}</h2>
                            <p>{item.about_srinidhi_mission_text}</p>

                        </div>
                    </div>


                    </>

                )
            })}
            </>

    )
}
export default Aboutsrinidhi;
