import "../Styles/EnquiryForm.css";
function EnquiryForm() {
  return (
    <section className="enquiry-form-main">
      <h1>Enqury Form</h1>
      <p>
        Lorem ipsum dolor sit amet,ut labore et dolore magna aliquaLorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do
      </p>
      <form className="enquiry-form-main">
        <div className="form-first">
          <div className="form-first-names">
            <label>
              Salutation <span className="required-start">*</span>
            </label>
            <label>
              First Name <span className="required-start">*</span>
            </label>
            <label>
              Last Name <span className="required-start">*</span>
            </label>
          </div>
          <div className="form-first-input">
            <select className="form-first-salutation">
              <option className="form-first-salutation">Smt.</option>
              <option className="form-first-salutation">Mr.</option>
              <option className="form-first-salutation">Mrs.</option>
            </select>
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <div className="form-second">
          <div className="form-second-names">
            <label>
              Comapny Name <span className="required-start">*</span>
            </label>
            <label>
              Email Address <span className="required-start">*</span>
            </label>
          </div>
          <div className="form-second-input">
            <input type="text" />
            <input type="email" />
          </div>

          <div className="form-third">
            <div className="form-third-names">
              <label>
                Mobile Number <span className="required-start">*</span>
              </label>
              <label>
                City <span className="required-start">*</span>
              </label>
            </div>
            <div className="form-third-input">
              <input type="text" />
              <input type="email" />
            </div>
          </div>

          <div className="form-fourth">
            <label>
              Subject <span className="required-start">*</span>
            </label>
            <input type="text" className="form-fourth-subject" />

            <label>
              Message <span className="required-start">*</span>
            </label>
            <textarea type="textarea" className="form-fourth-message" />
          </div>
        </div>
        <div className="term-condition">
        <p className="term-condition-heading">Term & Condition <span className="required-start">*</span></p>
        <input type="checkbox" id="term-condition" name="term-condition" value="xyz" />
        <label for="term-condition" className="term-condition-text">Srinidhi Industry is collecting, processing and storing your indicated personal data in order to work on your request. Herewith I agree that my email address and all the given personal data above are allowed to be used in order to process my request.  </label>
        </div>
        <div className="contact-foem-submit-btn">
            <button>SUBMIT</button>
        </div>

      </form>
    </section>
  );
}
export default EnquiryForm;
