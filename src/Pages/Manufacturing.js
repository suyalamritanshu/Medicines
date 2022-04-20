/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Components/Item";
import "../css/style.css";
import image1 from '../Assests/logo10.png'
import image2 from '../Assests/unnamed.jpg'
import image3 from '../Assests/download.jpg'
import image4 from '../Assests/download1.png'
import image5 from '../Assests/download1.png'
import image6 from '../Assests/download1.png'



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Manufacturing() {

  return (
    <>

      <div id="product">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-box">
              <h2>Our Business Partners</h2>
            </div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
        <Item><a href='/product-1'><img src={image1}/></a>  </Item>
        <Item><a href='/product-2'><img src={image2}/></a> </Item>
        <Item><a href='/product-3'><img src={image3}/></a> </Item>
        <Item><a href='/product-4'><img src={image4}/></a> </Item>
        <Item><a href='/product-5'><img src={image5}/></a> </Item>
        <Item><a href='/product-5'><img src={image6}/></a> </Item>





        </Carousel>

             </div>
    </>
  );
}

export default Manufacturing;