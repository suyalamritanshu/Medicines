/* eslint-disable react/style-prop-object */
import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'
function Banner() {
    return (
    
<div class="ulockd-home-slider">
		<div class="container-fluid">
			<div class="row">
				<div class="pogoSlider" id="js-main-slider">
					<div class="pogoSlider-slide" data-transition="fade" data-duration="1000">
						<div class="lbox-caption pogoSlider-slide-element">
							<div class="lbox-details">
								<h1>Welcome to Zenberg Pharma</h1>
								<p>India's Trusted Pharmaceutical Company </p>
								
							</div>
						</div>
					</div>
					<div class="pogoSlider-slide" data-transition="fade" data-duration="1000" >
						<div class="lbox-caption pogoSlider-slide-element">
							<div class="lbox-details">
								<h1>We are Expert in The Field of Medicine</h1>
								<p>20 Years of research and expertise</p>
							</div>
						</div>
					</div>
					
						
					
				</div>
			</div>
		</div>
	</div>
	
	
     )
}

export default Banner;