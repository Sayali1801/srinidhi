import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import "../Styles/Landing.css";
import About from "./About";
import OurClients from "./OurClients";
import Presence from "./Presence";
import Product from './Product';
import Footer from "./Footer";
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

        {/* <Footer/> */}
      </div>
      <div>
      </div>
    </div>
  );
}
export default Landing;
