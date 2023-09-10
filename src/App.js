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


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
