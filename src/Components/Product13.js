/* eslint-disable jsx-a11y/alt-text */
import image13 from '../Assests/13.svg'
import Footer from './Footer';
import Navbar from './Navbar';
import StarRateIcon from "@material-ui/icons/StarRate";
import Header from '../Components/Header';
import {useState, useEffect} from 'react';
import Dropdown from '../Components/Dropdown';
function Product13(){
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
        <div> <Header />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <section className="container text-center   p-4 md:py-20 px-5 md:p-10 backgroundColor: to-blue-400">
        <section className=" grid grid-cols-1   md:grid-cols-2 xl:grid-cols-  3xl:grid-cols-5 gap-1 text-center">
        <div className='mt-12'>
            <img src={image13} height={500} width={400} />
            <h6 className='flex justify-self-start mt-4 text-red-700 font-medium'>Note: Consult your doctor before consuming any medicine</h6>
        </div>
        <div className='mt-4 '>
            <h3 className='flex justify-self-start mb-4 text-sky-900'>
            SAMOCID
            </h3>
            <h3 className='flex justify-self-start sm:flex sm:justify-self-start text-sky-900 text-xl'>Composition</h3>
            <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} />Magnesium Hydroxide 98mg</h6>
       
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} />Dried Aluminium Hydroxide gel 380mg (suger free base)</h6>
    
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} />  Oxtacaine 10mg.</h6>
            <h3 className='flex justify-self-start sm:flex sm:justify-self-start text-sky-900 text-xl'>Usage</h3>

                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Dyspepsia</h6>

     
                <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Peptic ulcer</h6>
    
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} />Flatulence</h6>
          
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Post operative Gas pain</h6>
  
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Heart burn</h6>
   
        </div>
    </section>
    </section>
    <Footer />
    </div >
    
    )
}

export default Product13;