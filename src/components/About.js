import React from "react";
import PhotoIMG1 from '../image/photoIMG1.jpg';

const About = () => {
    return (
        <section className="about-section">
            <div className="row">
                <div className="about-col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laudantium nostrum ut suscipit ullam illo earum aut veritatis. Rem atque obcaecati dicta quam non consectetur, impedit totam similique quasi nobis!</p>
                </div>
                <div className="about-col">
                    <img className="about-img" src={PhotoIMG1} alt="Clouds" />
                </div>
            </div>
        </section>
    )
};
    


export default About;