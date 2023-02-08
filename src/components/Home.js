import Data from '../Data.json';
function Home(){
    return(
        <div id="AnchorLink"> 

<img
            src={require("../Images/" + Data.home_page.header.header_logo)}
            alt="logo"
          />



        </div>
    )
}
export default Home;
