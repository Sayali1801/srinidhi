import '../Styles/Contact.css';
import Data from '../Data.json';
function Contact(){
    return(
        <div className='contact-main'>
            <h1>{Data.contact.contacts_title}</h1>
            <h3>{Data.contact.contacts_desc}</h3>

            <form className='contact-form'>
            <div className='contact-form-main'>
                    <input type="text" placeholder={Data.contact.contacts_form_name} className='contact-form-name'/>
                    <input type="email" placeholder={Data.contact.contacts_form_email} className='contact-form-email'/>
                    <input type="number" placeholder={Data.contact.contacts_form_number} className='contact-form-number'/>
                    <select className='contact-form-options'>
                    {Data.contact.contacts_form_referance.map((item)=>{
                        return(
                            <option>{item}</option>

                        )
                    })}
                    </select>
                    <button className='contact-form-btn'>{Data.contact.contacts_form_btn}</button>

            {/* {Data.contact.contacts_way.map((item)=>{
                return(
                    <div className='contact-way-main'>
                    <div className='contact-way'>
                    <img src={require('../Images/' + item.icon)} alt="contact way logo"/>

                    </div>
                    <div className='contact-way2'>
                    <p>{item.name}</p>
                    <p>{item.number}</p>

                    </div>
                    </div>


                )
            })} */}
            </div>


        <div className="contact_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4227378515593!2d77.68085121378817!3d12.815937021744823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c4055555555%3A0x19af6067b975ab21!2sSrinidhi%20Industries!5e0!3m2!1sen!2sin!4v1675925759114!5m2!1sen!2sin" 
        allowfullscreen={false} 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        width='450px'
        height='400px'
        >
        </iframe>
        </div>
        </form>

        </div>
    )
}
export default Contact;