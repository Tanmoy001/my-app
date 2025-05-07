import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import { About } from './Component/About/About';
import { Faq } from './Component/Faq/Faq';
import { Testimonial } from './Component/Testimonial/Testimonial';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { Client } from './Component/Client/Client';
import { Footber } from './Component/Footer/Footber';
import Model from './Component/Models/Models';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Client/>
      <Testimonial/>
      <Model/>
      <Faq/>
      <Footber/>
    </div>
  );
}

export default App;
