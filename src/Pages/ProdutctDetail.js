/* eslint-disable jsx-a11y/alt-text */
import image1 from '../Assests/1.svg'
import image2 from '../Assests/2.svg'
import image3 from '../Assests/3.svg'
import image4 from '../Assests/4.svg'
import image5 from '../Assests/5.svg'
import image6 from '../Assests/10.svg'
import image7 from '../Assests/7.svg'
import image8 from '../Assests/8.svg'
import image9 from '../Assests/9.svg'
import image10 from '../Assests/10.svg'
import image11 from '../Assests/11.svg'
import image12 from '../Assests/12.svg'
import image13 from '../Assests/13.svg'
import image14 from '../Assests/14.svg'
import image15 from '../Assests/15.svg'
import image16 from '../Assests/16.svg'
import image17 from '../Assests/17.svg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import {useState, useEffect} from 'react';
import Dropdown from '../Components/Dropdown';

import Item from "../Components/Item";
function ProductDetail() {
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
             <div className="section-intro pb-85px text-center section-heading-margin-less">
        <h2 className="text-4xl  font-medium mt-4">
          All Products
        </h2>
       
      </div>

            <section className=" grid grid-cols-1   md:grid-cols-2 xl:grid-cols-3  3xl:grid-cols-5 gap-10 text-center">

                <div >      <Item><a href='/product-1'><img src={image1}/></a> </Item>
                <h4>CBG-FORTE</h4>
                </div>
                <div ><Item><a href='/product-2'><img src={image2} /></a> </Item> <h4> VITSEV</h4>
                </div>
                <div >
                    <Item><a href='/product-3'><img src={image3} /></a> </Item> <h4>  REJFAST-PLUS</h4></div>
                <div > <Item><a href='/product-4'><img src={image4} /></a> </Item> <h4> SEVGLO</h4></div>
                <div >      <Item><a href='/product-5'><img src={image5} /></a> </Item> <h4>     ZEE-PRAM-PLUS/FORTE</h4></div>
                <div ><Item><a href='/product-6'><img src={image6} /></a> </Item> <h4>  PAROFEN-S</h4>
                </div>
                <div >
                    <Item><a href='/product-7'><img src={image7} /></a> </Item> <h4
                    > SUPRAZOLE-DSR</h4></div>
                <div > <Item><a href='/product-8'><img src={image8} /> </a></Item> <h4>     TRYPCET-D</h4></div>
                <div >      <Item><a href='/product-9'><img src={image9} /></a> </Item> <h4> TRIOTEL-H-40</h4></div>
                <div ><Item><a href='/product-10'><img src={image10} /></a> </Item> <h4>     PAROFEN-S</h4>
                </div>
                <div >
                    <Item><a href='/product-11'><img src={image11} /> </a></Item> <h4>  CITRAVIN</h4></div>
                <div > <Item><a  href='/product-12'><img src={image12} /></a> </Item> <h4>   AZIEL-500</h4></div>
                <div > <Item><a href='/product-13'><img src={image13} /></a> </Item> <h4>  SAMOCID</h4></div>
                <div > <Item><a href='/product-14'><img src={image14} /></a> </Item> <h4> ASVIK-CV 625</h4></div>
                <div > <Item><a href='/product-15'><img src={image15} /></a> </Item> <h4> REJFAST-CD3</h4></div>
                <div > <Item><a href='/product-16'><img src={image16} /></a> </Item> <h4> REJFAST FORTE</h4></div>
                <div > <Item><a href='/product-17'><img src={image17} /></a> </Item> <h4> NEOLOL-BETA 20</h4></div>



            </section>
        </section>
        <Footer />
        </div>
    )
}

export default ProductDetail;;