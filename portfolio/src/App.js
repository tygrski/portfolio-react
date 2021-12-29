
import React, { useState} from 'react';
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';
// import logo from './logo.svg';
// import './App.css';
// import './index.css'
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'
import {Route, Routes} from "react-router-dom";



function App() {


 
  return (
    <div > 
      <Header >
      </Header>
     
      <div>
    <Routes>
         <Route path='/about-me' element={<About />} />
         <Route path='/projects' element={<Project />} />
         <Route path='/resume' element={<Resume />} />
         <Route path='/contact' element={<Contact />} />
      </Routes>
       </div>
       
    <Footer />
      </div>
    
  );
}

export default App;