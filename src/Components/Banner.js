import '../css/style.css'
import React, { useState } from 'react';
import banner12 from '../Assests/banner.jpeg'
function Banner() {

	return (
<div className='container1'>

		<div className='banner123'>
			<img  src={banner12} alt='img' />
			<h3 className='heading'>Welcome to </h3>
			<h3 className='heading123'>Zenberg <span className='text-orange-500'>Pharmaceutical</span> </h3>

			<p className='para'>India’s leading pharmaceutical company</p>
			
		
		</div>
	</div>


	)
}

export default Banner;