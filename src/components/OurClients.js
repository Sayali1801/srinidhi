// import Slider from 'react-slick';
import Data from "../Data.json";
import "../Styles/OurClients.css";
function OurClients() {
  // const display = {
  //     dots:false,
  //     infinite: true,
  //     speed: 500,
  //     autoplaySpeed: 2000,
  //     autoplay: true,
  //     slidesToShow: 5,
  //     slidesToScroll: 5,
  //     arrows:false

  // };
  return (
    <div className="ourClient-main" id="our-client">
      <div className="ourClient-up">
        <h1>{Data.home_page.our_clients.our_clients_title}</h1>
        <p>{Data.home_page.our_clients.our_clients_desc}</p>
      </div>

      <div className="ourClient-down">
        {Data.home_page.our_clients.our_clients.map((item) => {
          return (
            <div className="our-clients">
              <div className="our-clients-scroll">
                <img
                  src={require("../Images/" + item.logo)}
                  alt="client logo"
                />
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default OurClients;
