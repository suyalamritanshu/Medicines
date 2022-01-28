/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
function Banner() {
	const [index, setIndex] = useState(0);
  
	const handleSelect = (selectedIndex, e) => {
	  setIndex(selectedIndex);
	};
    return (
    

		
		  
			
		<Carousel fade>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbjmnlzLycPBzci1ZnnWb_nivt8HLtto5DA&usqp=CAU"
			alt="First slide"
		  />
		  <Carousel.Caption>
			<h3>First slide label</h3>
			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwOf1C7xxsyEEW3CQDTRJm307tfpbnNkkCw&usqp=CAU"
			alt="Second slide"
		  />
	  
		  <Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXWUMr_Vcw6KhaHLTy0SNSljgWrMIi5rFQ&usqp=CAU"
			alt="Third slide"
		  />
	  
		  <Carousel.Caption>
			<h3>Third slide label</h3>
			<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		  </Carousel.Caption>
		</Carousel.Item>
	  </Carousel>
		 
	
     )
}

export default Banner;