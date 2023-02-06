import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Testimonials from "./Testimonials";
import "../Styles/Landing.css";
import About from "./About";
import OurClients from "./OurClients";
function Landing() {
  return (
    <div className="landing-main">
      <div>
        <Navbar />
        <About/>
        <OurClients/>
      </div>
      <div>
      </div>
      {/* <ProductCard/> */}
      {/* <Testimonials/> */}
    </div>
  );
}
export default Landing;
