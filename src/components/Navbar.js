import AnchorLink from "react-anchor-link-smooth-scroll";
import Data from "../Data.json";
import "../Styles/Navbar.css";
import Home from "./Home";
function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
        <AnchorLink href="#home-page">
        <Home/>
          </AnchorLink>
        </div>
        <div className="navbar-right">
          <ul className="navbar-right-list">
            <li>
              <AnchorLink href="#about-us">About Us</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#our-client">Our Clients</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#testimonials">Testimonials</AnchorLink>
            </li>
            <li>
              <button>Get Qoute</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="backImg">
        <img
          src={require("../Images/" + Data.home_page.home_back_img)}
          alt="background"
        />
      </div>
    </>
  );
}
export default Navbar;
