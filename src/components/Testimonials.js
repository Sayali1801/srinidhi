import Data from "../Data.json";
import '../Styles/Testimonials.css';
function Testimonials(){
    return(
        <section>
        <h1>{Data.testimonials.testimonials_title}</h1>
        <p>{Data.testimonials.testimonials_desc}</p>
        <div>
            <div className="testimonials-card-left">
                {Data.testimonials.testimonials_carasoul.testimonials_carasoul_img.map((item)=>{
                    return(
                        <img src={require('../Images/' + item)} alt=""/>
                    )
                })}
                {Data.testimonials.testimonials_carasoul.testimonials_carasoul_name.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })}
                {Data.testimonials.testimonials_carasoul.testimonials_carasoul_desig.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })}
            </div>
            <div className="testimonials-card-right">
            {Data.testimonials.testimonials_carasoul.testimonials_carasoul_title.map((item)=>{
                return(
                    <h1>{item}</h1>
                )
            })}
            {Data.testimonials.testimonials_carasoul.testimonials_carasoul_desc.map((item)=>{
                return(
                    <p>{item}</p>
                )
            })}


            </div>
        </div>
        </section>
    )       
}
export default Testimonials