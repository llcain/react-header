import Layout from "./Layout/Layout";
import Container from 'react-bootstrap/Container';
import '../App.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {

   const textareaStyle = {
      height: "200px"
  }

   return (
      <Layout>
          <Container>
            <Row>
               <Col>
                  <div>
                     <h2>Hours</h2>
                     <p>Monday - Friday</p>
                     <p>9 am to 5 pm</p>
                  </div>
               </Col>
               <Col>
                  <div>
                     <h2>Call Us</h2>
                     <p>Local: 573-815-1600</p>
                  </div>
               </Col>
            </Row>
          </Container>
          <div className="form-container">
            <form>
                <label for="fname">First Name</label>
                <input type="text" id="firstname" name="firstname" placeholder="Your first name..."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Your last name..."/>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email"/>

                <label for="phonenumber">Phone number</label>
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Your phone number..."/>

                <label for="message">Message</label>
                <textarea id="message" name="subject" placeholder="Write something..." style={textareaStyle}></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
       </Layout>
   )
}

export default Contact;