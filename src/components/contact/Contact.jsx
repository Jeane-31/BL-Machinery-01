import './contact.css'

const Contact = () => {
  return (
    <div className="contactus" id='contact'>
      <div className="contactLeft">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.6638857108514!2d72.77685845334344!3d23.00422279225468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7d7cd9baff5f%3A0xa75c57305487a7da!2sMARSHAL%20FLOURMILL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1694851717290!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
          <div className="contactRight">
              <form>
                  <h1>Contact Us</h1>
                  <div className="formField">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" placeholder='Name'/>
                  </div>
                  <div className="formField">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" placeholder='Email'/>
                  </div>
                  <div className="formField">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" name="subject" id="subject" placeholder='Subject'/>
                  </div>
                  <div className="formField">
                      <label htmlFor="subject">Subject</label>
                      <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                  </div>
                  <button type="submit">Send Message</button>
              </form>
      </div>
    </div>
  );
}

export default Contact