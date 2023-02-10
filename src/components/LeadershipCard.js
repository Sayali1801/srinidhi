import '../Styles/LeadershipCard.css';
function LeadershipCard({img,name,desg,desc}){
    return(
        <section className="leadership-card-main">
        <div >
            <img src={require('../Images/' + img)} alt="leadership-pho"/>
            </div>

            <div className='card'>

            <h1>{name}</h1>
            <h3>{desg}</h3>
            <p>{desc}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
        </section>
    )
}
export default LeadershipCard;