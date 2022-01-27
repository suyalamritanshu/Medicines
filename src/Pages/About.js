import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'

function About(){
    return(
        <div id="about" class="about-box">
		<div class="about-a1">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="title-box">
							<h2>About Us</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12">
						<div class="row align-items-center about-main-info">
							<div class="col-lg-6 col-md-6 col-sm-12">
								<h2> Welcome to Zenberg Pharma </h2>
								<p>ZENBERG PHARMACEUTICALS PVT. LTD. established in year, 2018, is an India based company dealing in pharmaceuticals which are procured from various reputed and GMP - certified manufacturing companies. Our company follows quality and care oriented growth policies in our work.</p>	
								<p>We intend to bring quality pharmaceutical products at reasonably inexpensive price. We believe in business action characterised by fair trade policies, value and maintenance of enduring relationships, abiding with laws of state and market and promptness to deliver business commitments. </p>
								<a href="/" class="new-btn-d br-2">Read More</a>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-12">
								<div class="about-m">
									<ul id="banner">
										<li>
											<img src="images/about-img-01.jpg" alt=""/>
										</li>
										<li>
											<img src="images/about-img-02.jpg" alt=""/>
										</li>
										<li>
											<img src="images/about-img-03.jpg" alt=""/>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default About;