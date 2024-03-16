import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Layout from './Layout/Layout';
import bindery from '../image/bindery.jpg';
import customer1 from '../image/customer1.jpg';
import Belleville from '../image/Belleville.jpg';

const Home = () => {
    return (
      <Layout>
        <div className='container-lg my-5'>
          <Row className="row">
            <Col className='col'>
              <div className="p-5 bg-primary text-light">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>              
            </Col>
            <Col className='col'>
              <div>
                <img src={bindery} alt='bindery' />
              </div>
            </Col>
          </Row>
          <Row className="row">
            <Col className='col'>
              <div className="p-5 bg-primary text-light">
                <img src={customer1} alt='Weekly Trder customer'/>
              </div>              
            </Col>
            <Col className='col'>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
          </Row>
          <Row className="row">
            <Col className='col'>
              <div className="p-5 bg-primary text-light">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>              
            </Col>
            <Col className='col'>
              <div>
                <img src={Belleville} alt='bindery' />
              </div>
            </Col>
          </Row>
        </div>
    </Layout>
    );
}
    
export default Home;