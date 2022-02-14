import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'

function Address() {
	return (
		<div class="col-lg-12 col-xs-12">
			<div class="left-contact">
				<h2>Address</h2>
				<div class="media cont-line">
					<div class="media-left icon-b">
						<i class="fa fa-location-arrow" aria-hidden="true"></i>
					</div>
					<div class="media-body dit-right">
						<h4>Address</h4>
						<p>Fleming 196 Woodside Circle Mobile, FL 36602</p>
					</div>
				</div>
				<div class="media cont-line">
					<div class="media-left icon-b">
						<i class="fa fa-envelope" aria-hidden="true"></i>
					</div>
					<div class="media-body dit-right">
						<h4>Email</h4>
						<a href="#">demoinfo@gmail.com</a><br />
						<a href="#">demoinfo@gmail.com</a>
					</div>
				</div>
				<div class="media cont-line">
					<div class="media-left icon-b">
						<i class="fa fa-volume-control-phone" aria-hidden="true"></i>
					</div>
					<div class="media-body dit-right">
						<h4>Phone Number</h4>
						<a href="#">12345 67890</a><br />
						<a href="#">12345 67890</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Address;