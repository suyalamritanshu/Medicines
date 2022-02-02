/* eslint-disable jsx-a11y/alt-text */
import image15 from '../Assests/15.svg'
import Footer from './Footer';
import Navbar from './Navbar';
import StarRateIcon from "@material-ui/icons/StarRate";
import Header from '../Components/Header';
import {useState, useEffect} from 'react';
import Dropdown from '../Components/Dropdown';
function Product15(){
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
        <div>  <Header />
   <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <section className="container text-center   p-4 md:py-20 px-5 md:p-10 backgroundColor: to-blue-400">
        <section className=" grid grid-cols-1   md:grid-cols-2 xl:grid-cols-  3xl:grid-cols-5 gap-1 text-center">
        <div className='mt-12'>
            <img src={image15} height={500} width={400} />
            <h6 className='flex justify-self-start mt-4 text-red-700 font-medium'>Note: Consult your doctor before consuming any medicine</h6>
        </div>
        <div className='mt-4 '>
            <h3 className='flex justify-self-start mb-4 text-sky-900'>
            REJFAST-CD3
            </h3>
            <h3 className='flex justify-self-start sm:flex sm:justify-self-start text-sky-900 text-xl'>Composition</h3>
            <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} />Alpha lipoic acid 200 MG</h6>
              
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Benfotiamine 150 MG</h6>
               
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Calcium carbonate 500 MG</h6>
      
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Chromium picolinate 200 MCG</h6>

        
                <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Folic acid 1.5 MG</h6>
             
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} />Inositol 100 MG</h6>
             
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Methylcobalamin 1500 MCG</h6>
       
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Pyridoxine 3 MG</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Vitamin D3 1000 IU</h6>
                <h3 className='flex justify-self-start sm:flex sm:justify-self-start text-sky-900 text-xl'>Used For</h3>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Nerve damage</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Numbness and tingling</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Pain in neurological disorders</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} />  Arthritis</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> High cholesterol</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Panic disorder</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Weight loss</h6>
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Vitamin d deficiency</h6>

                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Acid indigestion</h6>

                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Alzheimer's disease</h6>

                


        </div>
    </section>
    </section>
    <Footer />
    </div >
    
    )
}

export default Product15;