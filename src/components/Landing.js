import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import "../Styles/Landing.css";
import About from "./About";
import OurClients from "./OurClients";
import Presence from "./Presence";
import Product from './Product';
import Footer from "./Footer";
import SlickSlider from "../SlickSlider";
import AllProduct from "./AllProduct";
import MachineDetail from "./MachineDetail";
function Landing() {
  return (
    <div className="landing-main">

      <div>
        <Navbar />
        <About/>
        <OurClients/>
        <Presence/>
        <Product/>
                <Testimonials/>
                <AllProduct/>
                <MachineDetail/>
                {/* <SlickSlider/> */}

        {/* <Footer/> */}
      </div>
      <div>
      </div>
    </div>
  );
}
export default Landing;
