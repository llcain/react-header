import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Col } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
import Layout from './Layout/Layout';
import bindery from '../image/bindery.jpg';

const Home = () => {
    return (
      <Layout>
        <div className='container'>
          <div className="row">
            <div className='column'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio earum qui officiis quo quia facere, sint facilis quaerat ratione inventore impedit culpa sequi, rerum consequatur! Facere quibusdam minima error?</p>
            </div>
            <div className='column'>
              <img src={bindery} alt='bindery photo' />

            </div>
          </div>
        </div>
    </Layout>
    );
}
    
export default Home;