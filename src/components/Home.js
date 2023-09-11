import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const Home = () => {
    return (
      <div style={{ display: 'block', width: 960, padding: 30 }}>
      <h4>React-Bootstrap Col Component</h4>
      <Row>
        <Col style={{
          backgroundColor: 'red',
        }}>
          Sample First Col
      </Col>
        <Col style={{
          backgroundColor: 'yellow',
        }}>
          Sample Second Col
      </Col>
       
      </Row>
      <Row>
        <Col style={{ backgroundColor: 'purple'}}>
          Column
        </Col>
        <Col style={{ backgroundColor: 'grey'}}>
          Column
        </Col>
      </Row>
      <Row>
      <Col style={{
          backgroundColor: 'green',
        }}>
          Sample Third Col
      </Col>
      <Col style={{
          backgroundColor: 'blue',
        }}>
          Sample Third Col
      </Col>
      </Row>
    </div>
    );
}
    
export default Home;