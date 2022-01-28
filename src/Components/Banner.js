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
			src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/hello_398x194.jpg"
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
			src="http://www.simpleimageresizer.com/_uploads/photos/aef928fe/hello1_398x194.jpg"
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
			src="https://media.istockphoto.com/photos/medicine-doctor-holding-hologram-virtual-interface-electronic-medical-picture-id1274407122?b=1&k=20&m=1274407122&s=170667a&w=0&h=NzJ25QLc-fdSeLg_RJAiMaMJOv5Ghj5aDSrxZ93x3YM="
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