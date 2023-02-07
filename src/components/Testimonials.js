import Data from "../Data.json";
import '../Styles/Testimonials.css';
import TestimonialsCard from './TestimonialsCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Testimonials(){
        const settings = {
            dots:true,
            infinite:true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            autoplay: true,    
          };
    
    return(
        <section className="testimonials-main">
        <h1>{Data.testimonials.testimonials_title}</h1>
        <p>{Data.testimonials.testimonials_desc}</p>
        <Slider {...settings}>
            <TestimonialsCard/>
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
