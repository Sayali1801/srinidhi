import Data from "../Data.json";
import "../Styles/Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
          <img
            src={require("../Images/" + Data.home_page.header.header_logo)}
            alt="logo"
          />
        </div>
        <div className="navbar-right">
          <ul className="navbar-right-list">
            <li>About Us</li>
            <li>Our Clients</li>
            <li>Testimonials</li>
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
