import '../Styles/TestimonialsCard.css';
function TestimonialsCard({img, name , desg, title, desc}){
    return(
        <section className='testimonialsCard-main'>
                <div className='testimonialsCard-left'>
                <img src={require('../Images/' + img)} alt="testimonial carasoul img"/>
                <h2>{name}</h2>
                <h3>{desg}</h3>
                </div>
            
        <div className='testimonialsCard-center'>
            <h1>“</h1>
                <hr/>
        </div>
        <div >
        <div className='testimonialsCard-right'>
            <h1>{title}</h1>
            <h2>{desc}</h2>
        </div>
    
        </div>


        </section>
    )
}
export default TestimonialsCard;