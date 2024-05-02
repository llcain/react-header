import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Layout from './Layout/Layout';
import press from '../image/press.jpg';
import ourCustomers from '../image/ourCustomers.jpg';
import saraPenny from '../image/saraPenny.jpg';

const Home = () => {
    return (
      <Layout>
        <h2>What We Do</h2>
        <Container>
          <Row>
            <Col>
              <div>
              <p>We are a commercial printing company that have the equipment, and resources that can print any of your printing needs. We have several presses that can print several thousand copies.</p>
              </div>
            </Col>
            <Col>
              <div>
                <img src={press} alt='bindery' />
              </div>
            </Col>
          </Row>
        </Container>
        <h2>Our Customers</h2>
        <Container>
          <Row>
            <Col>
              <img src={ourCustomers} alt='Meet our Customers'/>
            </Col>
            <Col>
              <div>
              <p>We have many customers. Some of our customers have different types of we print for them. We can print broadsheet, tabloid, and magazine jobs.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <h2>Customer Feedback</h2>
        <Container>
          <Row>
            <Col>
              <div>
               <p>"Hi. This is Sara Penny at Bellevile. The employees at Gannett always make sure I have my papers on time. They are awesome."</p>
              </div>
            </Col>
            <Col>
              <img src={saraPenny} alt='Sara Penny is one of our customers' />
            </Col>
          </Row>
        </Container>
        {/* <div className='container-lg my-5'>
          <Row className="row">
            <Col className='col-sm-6'>
              <div className="p-5 bg-primary text-light">
                <p>We are a commercial printing company that have the equipment, and resources that can print any of your printing needs. We have several presses that can print several thousand copies.</p>
              </div>              
            </Col>
            <Col className='col-sm-6'>
              <div>
                <img src={press} alt='bindery' />
              </div>
            </Col>
          </Row>
          <h2>Our Customers</h2>
          <Row className="row">
            <Col className='col-sm-6'>
              <div className="p-5 bg-primary text-light">
                <img src={ourCustomers} alt='Meet our Customers'/>
              </div>              
            </Col>
            <Col className='col-sm-6'>
              <div>
                <p>We have many customers. Some of our customers have different types of we print for them. We can print broadsheet, tabloid, and magazine jobs.</p>
              </div>
            </Col>
          </Row>
          <h2>Customer Feedback</h2>
          <Row className="row">
            <Col className='col-sm-6'>
              <div className="p-5 bg-primary text-light">
                <p>"Hi. This is Sara Penny at Bellevile. The employees at Gannett always make sure I have my papers on time. They are awesome."</p>
              </div>              
            </Col>
            <Col className='col-sm-6'>
              <div>
                <img src={saraPenny} alt='Sara Penny is one of our customers' />
              </div>             
            </Col>
          </Row>
        </div> */}
    </Layout>
    );
}
    
export default Home;