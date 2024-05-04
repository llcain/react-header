import Layout from "./Layout/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import executive1 from '../image/executive1.jpg';
import executive2 from '../image/executive2.jpg';

const Testimonials = () => {
    return (
        <Layout>
        <h1>Testimonials</h1>
        <Container>
            <Row>
                <Col>
                    <div>
                        <img src={executive1} alt="Lori Summer from Laclede" />
                        <p>"My name is Lori Summer from Laclede. I'm a satisfied customer. I've been getting my commercial printing done by Gannett close to 2 years."</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={executive2} alt="Becky from Jewish Chronicle" />
                        <p>"Hi. I'm Becky form Jewich Chronicle. The emplyees at Gannett does a good job printing our tabloid paper."</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </Layout>
    )
}

export default Testimonials;