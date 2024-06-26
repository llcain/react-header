import 
{
BrowserRouter as Router, Route, Routes
}from 'react-router-dom';
import './App.scss';
import '../src/components/Header/Header.scss';
import '../src/components/Header/Header';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WhatWeDo from './components/WhatWeDo';
import Customer from './components/Customer';
import Testimonials from './components/Testimonials';
import Header from '../src/components/Header/Header';


function App() {
  return (
    
      <div className='App'>
        <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/whatwedo" exact element={<WhatWeDo/>} />
          <Route path="/customer" exact element={<Customer/>} />
          <Route path="/testimonials" exact element={<Testimonials/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        </Router>      
      </div>
    

  );
}

export default App;
