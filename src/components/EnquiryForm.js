import '../Styles/EnquiryForm.css';
function EnquiryForm(){
    return(
        <section>
            <form className='enquiry-form'>
            <h1>Enquiry Form</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='form-up'>
            <div className='form-up-title'>
            <label>Salutation</label>
            <label>First Name</label>
            <label>Last Name</label>
            </div>
            <div className='form-up-fields'>
            <select className='salutation-list'>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                </select>
                <input type="text" />
                <input type="text" />
            </div>
            </div>
            <div className='form-middel'>
            <div className='form-middle-title'>
            <label>Company Name</label>
            <label>Email Address</label>
            </div>
            <div className='form-middle-fields'>
            <input type="text"/>
            <input type="email"/>
            </div>
            <div className='form-middle-title'>
            <label>City</label>
            <label>Phone number</label>
</div>
            <div className='form-middle-fields'>
            <input type="text"/>
            <input type="email"/>
            </div>


            </div>
            <div className='form-down'>
            <div className='form-down-up'>

                <label>Subject</label> <br/>
                <input type="text" placeholder='lorem ipsum'/>
                </div>
                <div className='form-down-down'>

                    <label>Message</label>
                    <br/>
                <input type="text" placeholder='lorem ipsum dosh'/>
                </div>
            </div>
            </form>
        </section>
    )
}
export default EnquiryForm;