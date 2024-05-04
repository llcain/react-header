import React from "react";
import Layout from "./Layout/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Belleville from '../image/Belleville.jpg';
import magazines from '../image/magazines.jpg';
import tabloid from '../image/tabloid.jpg';

const Customer = () => {
    

    return (
       <Layout>
        <h2>Some of Our Customers</h2>
        <Container>
            <Row>
                <Col>
                    <div>
                        <img src={Belleville} alt="Belleville Customer" />
                        <p>Broadsheet</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={magazines} alt="2 magazine customers" />
                        <p>Magazines</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={tabloid} alt="One of our tabloid Customers" />
                        <p>Tabloid</p>
                    </div>
                </Col>
            </Row>
        </Container>        
       </Layout> 
    )
}

export default Customer;
