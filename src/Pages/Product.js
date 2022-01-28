/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom";
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
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtUnaNxxKAS_bDUJeq_DW7bBbUJzs8UhpHg&usqp=CAU"/> </Item>
        </Carousel>
      </div>
    </>
  );
}

export default Product;