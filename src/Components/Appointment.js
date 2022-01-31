import { useEffect, useState } from "react"
import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'
import emailjs from '@emailjs/browser';
import InputField from "./InputField"
import TextareaField from "./TextareaField";

function Appointment(){
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      });
      const [status, setStatus] = useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_behla5o', 'template_s6um4ra', values, 'user_6wIJS1prmLBDYwW85H2VO')
          .then(response => {
            console.log('SUCCESS!', response);
            setValues({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });
      }
    
      useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);
    
      const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
      }

      const renderAlert = () => (
        <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
          <p>your message submitted successfully</p>
        </div>
      )
return(
    <div id="work" class="appointment-main">
        {status && renderAlert()}
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
                        <form  onSubmit={handleSubmit}>
                           
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="name">First Name</label>
                                        <InputField value={values.firstName} handleChange={handleChange}  name="firstName" type="text" placeholder="First Name" />
       
       
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group ">
                                    <label className="control-label" for="name">Last Name</label>
                                    <InputField value={values.lastName} handleChange={handleChange}  name="lastName" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                            
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="email">Email</label>
                                        <InputField value={values.email} handleChange={handleChange}  name="email" type="email" placeholder="jphn@example.com"  class="form-control input-md" />
                                    </div>
                                </div>
                             
                               
                              
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="phone">Phone</label>
                                        <InputField value={values.phone} handleChange={handleChange}  name="phone" type="number" placeholder="Phone Number"  class="form-control input-md" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" for="address">Address</label>
                                        <TextareaField value={values.address} handleChange={handleChange}  name="address" />
                                       
                                    </div>
                                </div>
                             
                               
                             
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button type="submit" className="new-btn-d br-2">SEND REQUEST</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                      
                    </div>
				</div>
                
				<div className="col-lg-6 col-md-6">
					<div className="well-block">
                        <div className="well-title">
                            <h2>Why Work With Us</h2>
                        </div>
                        <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">People Who Inspire</h4>
                                <div className="feature-content">
                                    <p>We believe that our people are at the heart of our company and the key to our future success. At Zenberg, we know that good ideas come from anywhere, and with hard work and dedication, anything is possible.</p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Inclusive Culture</h4>
                                <div className="feature-content">
                                    <p>We’re passionate about bringing together people who are not only talented but who embrace different perspectives and backgrounds. We benefit from the diverse strengths that each of us bring to the workplace and collectively engage the power of our talented people to win as a leader in the pharmaceutical industry. </p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Commitment To Sustainability</h4>
                                <div className="feature-content">
                                    <p>For us, scientific progress and responsible entrepreneurship go hand in hand, enabling us to create a sustainable future for everyone.</p>
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