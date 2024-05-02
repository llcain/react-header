import Layout from "./Layout/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import press from '../image/press.jpg';
import dgmPress from '../image/dgm-press.jpg';
import gmaInserter from '../image/gma-inserter.jpg';

const WhatWeDo = () => {
    return (
        <Layout>
        <h2>What We Do</h2>
        <Container>
            <Row>
                <Col>
                    <div>
                        <img src={press} alt="Universal press"/>
                        <h3>Universal Press</h3>
                        <p>We have 2 universal presses that can print up to 45,000 broadsheet papers and hour.</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={dgmPress} alt="DGM press"/>
                        <h3>DGM Press</h3>
                        <p>Our DGM press can print 20,000 copies an hour.</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={gmaInserter} alt="GMS Inserter"/>
                        <h3>GMA Inserter</h3>
                        <p>We have 2 GMA inserters that have 12 and 10 pockets for inserts that can run about 10,000 copies an hour.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </Layout>
    )
}

export default WhatWeDo;