import Layout from "./Layout/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
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
       </Layout>
   )
}

export default Contact;