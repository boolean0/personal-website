import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Leadership from './components/pages/Leadership';

function App() {
  return (
    <div className = "App">
        <Navbar />
        <Routes>
          <Route path = '/personal-website' element = {<Home/>}/>
          <Route path = '/personal-website/projects' element = {<Projects/>}/>
          <Route path = '/personal-website/leadership' element = {<Leadership/>} />
        </Routes>        
    </div>
  );
}

export default App;
