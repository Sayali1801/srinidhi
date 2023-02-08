import Data from "../Data.json";
import '../Styles/Testimonials.css';
import TestimonialsCard from './TestimonialsCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Styles/SlickSlider.css';


function Testimonials(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplaySpeed: 2000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
        
        };
    
    return(
        <section className="testimonials-main" id="testimonials">
        <h1>{Data.testimonials.testimonials_title}</h1>
        <p>{Data.testimonials.testimonials_desc}</p>
            <Slider {...settings}>
        {Data.testimonials.testimonials_carasoul.map((item)=>{
            return(
                <TestimonialsCard 
                img={item.testimonials_carasoul_img}
                name={item.testimonials_carasoul_name}
                desg={item.testimonials_carasoul_desig}
                title={item.testimonials_carasoul_title}
                desc={item.testimonials_carasoul_desc}
                />
            )
        })}
            </Slider>

        </section>
    )       
}
export default Testimonials








  
// return(
//     <div>
//     <Slider {...settings}>
//     {Data.map((item)=>{
//       return(
//         <div className="card">
//         <div>{item.id}</div>
//         <img src={item.img} alt="" className="card-img"/>
//         </div>
//       )
//     })}
//     </Slider>
//   </div>
// );

// }
// export default SlickSlider;
