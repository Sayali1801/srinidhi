import Data from '../Data.json';
import '../Styles/OurClients.css';
function OurClients(){
    return(
        <div className='ourClient-main'>
        <div className='ourClient-up'>
            <h1>{Data.home_page.our_clients.our_clients_title}</h1>
            <p>{Data.home_page.our_clients.our_clients_desc}</p>

        </div>
        <div className='ourClient-down'>
                   {Data.home_page.our_clients.our_clients_logo.map((item)=>{
                return(
                    <img  src={require('../Images/' + item)} alt="client logo"/>
                )
            })}
 
        </div>
        </div>
    )
}
export default OurClients;