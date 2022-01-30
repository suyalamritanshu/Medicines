/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Components/Item";
import "../css/style.css";
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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Product() {
  return (
    <>

      <div id="product">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-box">
              <h2>Our Products</h2>
            </div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
        <Item><a href='/product-1'><img src={image1}/></a>  </Item>
        <Item><a href='/product-2'><img src={image2}/></a> </Item>
        <Item><a href='/product-3'><img src={image3}/></a> </Item>
        <Item><a href='/product-4'><img src={image4}/></a> </Item>
        <Item><a href='/product-5'><img src={image5}/></a> </Item>
        <Item><a href='/product-6'><img src={image6}/></a> </Item>
        <Item><a href='/product-7'><img src={image7}/></a> </Item>
        <Item><a href='/product-8'><img src={image8}/></a> </Item>
        <Item><a href='/product-9'><img src={image9}/></a> </Item>
        <Item><a href='/product-10'><img src={image10}/></a> </Item>
        <Item><a href='/product-11'><img src={image11}/></a> </Item>
        <Item><a href='/product-12'><img src={image12}/></a> </Item>
        <Item><a href='/product-13'><img src={image13}/></a> </Item>
        <Item><a href='/product-14'><img src={image14}/></a> </Item>
        <Item><a href='/product-15'><img src={image15}/></a> </Item>
        <Item><a href='/product-16'><img src={image16}/></a> </Item>
        <Item><a href='/product-17'><img src={image17}/></a> </Item>



        </Carousel>

        <a className="flex flex-row-reverse md:flex align-middle justify-center mt-4 text-2xl text-cyan-900" href="/product/all">View All Products</a>
      </div>
    </>
  );
}

export default Product;