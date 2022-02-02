/* eslint-disable jsx-a11y/alt-text */
import image3 from '../Assests/3.svg'
import Footer from './Footer';
import Navbar from './Navbar';
import StarRateIcon from "@material-ui/icons/StarRate";
import Header from '../Components/Header';
import {useState, useEffect} from 'react';
import Dropdown from '../Components/Dropdown';
import '../css/product3.css';
function Product3(){
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
        <div>
            <Header />
            <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
            <section className="container text-center   p-4 md:py-20 px-5 md:p-10 backgroundColor: to-blue-400">
            <section className=" grid grid-cols-1   md:grid-cols-2 xl:grid-cols-  3xl:grid-cols-5 gap-1 text-center">
            <div className='mt-12'>
                <img src={image3} height={500} width={400} />
                <h6 className='flex justify-self-start mt-4 text-red-700 font-medium'>Note: Consult your doctor before consuming any medicine</h6>
            </div>
            <div className='mt-4 '>
                <h3 className='flex justify-self-start mb-4 text-sky-900'>
                REJFAST-PLUS
                </h3>
                <h3 className='flex justify-self-start sm:flex sm:justify-self-start text-sky-900 text-xl'>Composition</h3>
                <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> BORON-1.5mg</h6>
           
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> CALCITRIOL-0.25mcg</h6>
        
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> CALCIUM CARBONATE-500mg</h6>
       
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> DOCOSAHE-XAENOIC ACID-60mg</h6>

      
                <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> EICOSAPENTAENOIC ACID-90mg</h6>
      
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> FOLIC ACID-400mcg</h6>
          
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> METHYLCOBALAMIN-1500mcg</h6>
            <h3 className='flex justify-self-start sm:flex sm:justify-self-start text-sky-900 text-xl'>Used For</h3>
            <h6 className='flex justify-self-start '> <StarRateIcon style={{ color: "#28328c" }} /> Calcium supplementation in deficiencies and growth   </h6>
      

            <h6 className='flex justify-self-start mr-4'> <StarRateIcon style={{ color: "#28328c" }} /> As a supplement in pregnancy & lactation   </h6>
            <h6 className='flex justify-self-start mr-4'> <StarRateIcon style={{ color: "#28328c" }} /> It is effective in Chronic arthritis and Osteoporosis </h6>
            <h6 className='flex justify-self-start mr-4'> <StarRateIcon style={{ color: "#28328c" }} />As a supplement  to keep bones healthy and strong  </h6>

        

          

      
               
            </div>
        </section>
        </section>
        <Footer />
        </div >
        
    )
}

export default Product3;