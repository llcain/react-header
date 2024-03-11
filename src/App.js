import 
{
BrowserRouter as Router, Route, Routes
}from 'react-router-dom';
import './App.scss';
import '../src/components/Header/Header.scss';

import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WhatWeDo from './components/WhatWeDo';


function App() {
  return (
    
      <div className='App'>
        <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/whatwedo" exact element={<WhatWeDo/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        </Router>      
      </div>
    

  );
}

export default App;
