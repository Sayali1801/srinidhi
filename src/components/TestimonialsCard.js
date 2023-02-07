import Data from '../Data.json';
import '../Styles/TestimonialsCard.css';
function TestimonialsCard(){
    return(
        <section className='testimonialsCard-main'>
        {Data.testimonials.testimonials_carasoul.map((item)=>{
            return(
                <div className='testimonialsCard-left'>
                <img src={require('../Images/' + item.testimonials_carasoul_img)} alt="testimonial carasoul img"/>
                <h2>{item.testimonials_carasoul_name}</h2>
                <h3>{item.testimonials_carasoul_desig}</h3>
                </div>
            )
        })}
        <div className='testimonialsCard-center'>
            <h1>“</h1>
                <hr/>
        </div>
        <div >
{Data.testimonials.testimonials_carasoul.map((item)=>{
    return(
        <div className='testimonialsCard-right'>
            <h1>{item.testimonials_carasoul_title}</h1>
            <h2>{item.testimonials_carasoul_desc}</h2>
        </div>
    )
})}
        </div>


        </section>
    )
}
export default TestimonialsCard;