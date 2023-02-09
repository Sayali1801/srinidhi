import './Styles/Aboutsrinidhi.css';
import Data from './Data.json';
import LeadershipCard from '../src/components/LeadershipCard';
function Aboutsrinidhi(){
    return(
        <>
            {Data.home_page.about_srinidhi.map((item)=>{
                return(
                    <>
                    <section className="aboutsrinidhi-main">

                    <div className="about-text">
                    <h1>{item.about_srinidhi_mission_title}</h1>
                    <p className='about-text-p'>{item.about_srinidhi_mission_text}</p>
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

                    <section className='our-leadership-main'>
                    {Data.home_page.leadership.map((item)=>{
                        return(
                            <LeadershipCard img={item.leader_img} name={item.leader_name} desg={item.leader_desg} desc={item.leader_desc}/>

                        )
                    })}
                                    <div className='word-from-ceo'>
                                    <h1>{Data.home_page.leader_word.leader_word_title}</h1>
                                    <p className='word-from-ceo-p'>{Data.home_page.leader_word.leader_word_text}</p>
                                    <p className='word-from-ceo-p'>{Data.home_page.leader_word.leader_word_text}</p>

                                    </div>


                                
                    </section>


                    </>

                )
            })}
            </>

    )
}
export default Aboutsrinidhi;
