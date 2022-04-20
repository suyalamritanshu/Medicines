/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Components/Item";
import "../css/style.css";
import image1 from '../Assests/logo10.png'
import image2 from '../Assests/unnamed.jpg'
import image3 from '../Assests/download.jpg'
import image4 from '../Assests/download1.png'
import image5 from '../Assests/life.jpeg'



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
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

        <div className="manufactur_image_div">
          <div className="manufactur_image_div_1">
            <img src={image1} height='500px' width='300px' />
            <img src={image2} height='500px' width='300px' />
            <img src={image3} height='500px' width='300px' />
          </div>
          <div className="manufactur_image_div_2">
            <img src={image4} height='500px' width='300px' />
            <img src={image5} height='500px' width='300px' />
          </div>
        </div>







      </div>
    </>
  );
}

export default Manufacturing;