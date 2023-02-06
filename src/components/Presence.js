import '../Styles/Presence.css';
import Data from '../Data.json';
function Presence(){
    return(
        <div className='presence-main'>
        <div className='presence-up'>
        <h1>{Data.home_page.our_presence.our_presence_title}</h1>
        <p>{Data.home_page.our_presence.our_presence_desc}</p>
        </div>
        <div className='presence-down'>
            <img src={require('../Images/' + Data.home_page.our_presence.our_presence_img)} alt="map"/>
        </div> 

        </div>
    )
}
export default Presence