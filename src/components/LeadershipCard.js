import '../Styles/LeadershipCard.css';
function LeadershipCard({img,name,desg,desc}){
    return(
        <section className="leadership-card-main">
        <div className='card'>
        <div>
            <img src={require('../Images/' + img)} alt="leadership-pho"/>
            <h1>{name}</h1>
            <h3>{desg}</h3>
            <p>{desc}</p>
            </div>
</div>
        </section>
    )
}
export default LeadershipCard;