import Data from "../Data.json";
import '../Styles/Navbar.css';
function Navbar() {
  return (
    <>

    <div className="navbar-main">

      <div className="navbar-left">
        <img src={require('../Images/' + Data.home_page.header.header_logo)} alt="logo"/>
      </div>
      <div className="navbar-right">
        <ul className="navbar-right-list">
          {/* <a href="">  */}
          {Data.home_page.header.nav_items.map((item) => {
            return <li>{item}</li>;
          })}
          {/* </a> */}
          {/* <a href=""> */}
          {Data.home_page.header.nav_btn.map((item) => {
            return (
              <li>
                <button>{item}</button>
              </li>
            );
          })}
          {/* </a> */}
        </ul>
      </div>
    </div>
    <div className="backImg">

      <img src={require('../Images/' + Data.home_page.home_back_img)} alt="background"/>
    </div>
    </>
  );
}
export default Navbar;
