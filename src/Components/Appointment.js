import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'

function Appointment(){
return(
    <div id="work" class="appointment-main">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="title-box">
						<h2>Work With Us</h2>
						<p className='-mt-4'>Innovate . Learn . Grow</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6">
					<div class="well-block">
                        <div class="well-title">
                            <h2>Book an Appointment</h2>
                        </div>
                        <form>
                           
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="name">First Name</label>
                                        <input id="name" name="name" type="text" placeholder="First Name" class="form-control input-md"/>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group ">
                                    <label class="control-label" for="name">Last Name</label>
                                        <input  id="name" name="name" type="text" placeholder="Last Name" class="form-control input-md"/>
                                    </div>
                                </div>
                            
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="email">Email</label>
                                        <input id="email" name="email" type="text" placeholder="E-Mail" class="form-control input-md"/>
                                    </div>
                                </div>
                             
                               
                              
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="phone">Phone</label>
                                        <input id="phone" name="phone" type="number" placeholder="Phone Number" class="form-control input-md"/>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="address">Address</label>
                                        <textarea
                  id="address" name="address"
                  cols="10"
                  rows="5"
                  type="text" placeholder="Address"
                  class="form-control input-md"
                ></textarea>
                                       
                                    </div>
                                </div>
                             
                               
                             
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button id="singlebutton" name="singlebutton" class="new-btn-d br-2">SEND REQUEST</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                      
                    </div>
				</div>
				<div class="col-lg-6 col-md-6">
					<div class="well-block">
                        <div class="well-title">
                            <h2>Why Work With Us</h2>
                        </div>
                        <div class="feature-block">
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">24/7 Hours Available</h4>
                                <div class="feature-content">
                                    <p>Integer nec nisi sed mi hendrerit mattis. Vestibulum mi nunc, ultricies quis vehicula et, iaculis in magnestibulum.</p>
                                </div>
                            </div>
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">Experienced Staff Available</h4>
                                <div class="feature-content">
                                    <p>Aliquam sit amet mi eu libero fermentum bibendum pulvinar a turpis. Vestibulum quis feugiat risus. </p>
                                </div>
                            </div>
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">Low Price & Fees</h4>
                                <div class="feature-content">
                                    <p>Praesent eu sollicitudin nunc. Cras malesuada vel nisi consequat pretium. Integer auctor elementum nulla suscipit in.</p>
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

export default Appointment;