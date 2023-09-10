import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div style={{ display: 'block', 
                  width: 700, padding: 30 }}>
      <h4>React-Bootstrap Row Component</h4>
      <Row style={{
        backgroundColor: 'red',
      }}>
        Sample First Row
      </Row>
      <Row style={{
        backgroundColor: 'yellow',
      }}>
        Sample Second Row
      </Row>
      <Row style={{
        backgroundColor: 'green',
      }}>
        Sample Third Row
      </Row>
    </div>
    );
}
    
export default Home;