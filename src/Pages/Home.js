import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Dropdown from '../Components/Dropdown';
import Banner from '../Components/Banner';
import About from './About';
import Product from './Product';
import Appointment from '../Components/Appointment';
import Footer from '../Components/Footer';
import { useState, useEffect } from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
      <div id='home' >
          <Header />
          <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
          <Banner />
          <About />
          <Product />
          <Appointment />
          <Footer />
      </div>
  )    
}

export default Home;