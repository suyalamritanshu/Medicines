/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Components/Item";
import "../css/style.css";

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
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/1_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/2_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/3_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/4_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/5_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/6_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/7_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/9_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/8_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/10_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/11_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/12_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/13_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/14_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/15_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/16_223x226.jpeg"/> </Item>
          <Item><img src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/17_223x226.jpeg"/> </Item>

        </Carousel>
      </div>
    </>
  );
}

export default Product;