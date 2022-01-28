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
          <Item><img src={image1} /> </Item>
          <Item><img src={image2} /> </Item>
          <Item><img src={image3} /> </Item>
          <Item><img src={image4} /> </Item>
          <Item><img src={image5} /> </Item>
          <Item><img src={image6} /> </Item>
          <Item><img src={image7} /> </Item>
          <Item><img src={image8} /> </Item>
          <Item><img src={image9} /> </Item>
          <Item><img src={image10} /> </Item>
          <Item><img src={image11} /> </Item>
          <Item><img src={image12} /> </Item>
          <Item><img src={image13} /> </Item>
          <Item><img src={image14} /> </Item>
          <Item><img src={image15} /> </Item>
          <Item><img src={image16} /> </Item>
          <Item><img src={image17} /> </Item>




        </Carousel>

        <a className="flex flex-row-reverse md:flex align-middle justify-center mt-4e" href="/product/all">View All Articles</a>
      </div>
    </>
  );
}

export default Product;