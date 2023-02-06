import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import "../Styles/Landing.css";
import About from "./About";
import OurClients from "./OurClients";
import Presence from "./Presence";
function Landing() {
  return (
    <div className="landing-main">

      <div>
        <Navbar />
        <About/>
        <OurClients/>
        {/* <Testimonials/> */}
        <Presence/>
      </div>
      <div>
      </div>
    </div>
  );
}
export default Landing;
