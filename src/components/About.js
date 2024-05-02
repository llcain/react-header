import React from "react";
import frankEarnestGannett from '../image/frankEarnestGannettPhoto.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from "./Layout/Layout";

const About = () => {
    return (
        <Layout>
        <h2>About Us</h2>
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>Behind the Success</h2>
                        <p>Gannett was founded by Frank Gannett in 1906. Frank started buying small newspapers in New York. By the 2000's, Gannett Publishing were publishing over 100 publications. Gannett bought the Tribune - a family owned newspaper company - a few years ago. Printing is a craft and we are proud of the quality work we do. We have the proper equipment - GMAs, stitchers, and 2 universal presses, along with a DGM press - for all of your commercial needs.</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>Frank Earnst Gannett</h2>
                        <h3>Founder</h3>
                        <img src={frankEarnestGannett} alt="Founder Frank Earnest Gannett"/>
                    </div>
                </Col>
            </Row>            
        </Container>    
        {/* <section className="about-section">
            <div className="row">
                <div className="about-col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laudantium nostrum ut suscipit ullam illo earum aut veritatis. Rem atque obcaecati dicta quam non consectetur, impedit totam similique quasi nobis!</p>
                </div>
                <div className="about-col">
                    <img className="about-img" src={PhotoIMG1} alt="Clouds" />
                </div>
            </div>
            <div className="row">
                <div className="about-col">
                    <img className="about-img" src={PhotoIMG1} alt="Clouds" />
                </div>
                <div className="about-col">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laudantium nostrum ut suscipit ullam illo earum aut veritatis. Rem atque obcaecati dicta quam non consectetur, impedit totam similique quasi nobis!</p>
                </div>
            </div>
            <div className="row">
                <div className="about-col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laudantium nostrum ut suscipit ullam illo earum aut veritatis. Rem atque obcaecati dicta quam non consectetur, impedit totam similique quasi nobis!</p>
                </div>
                <div className="about-col">
                    <img className="about-img" src={PhotoIMG1} alt="Clouds" />
                </div>
            </div>
        </section> */}
        </Layout>
    )
};
    


export default About;