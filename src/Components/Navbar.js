import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'
import image from '../Assests/logo.svg'

function Navbar() {
    return (
        <header class="top-header">
		<nav class="navbar header-nav navbar-expand-lg">
            <div class="container">
				<a class="navbar-brand" href="index.html"><img src={image} alt="zenberg logo"/></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
					<span></span>
					<span></span>
					<span></span>
				</button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar-wd">
                    <ul class="navbar-nav">
                        <li><a class="nav-link active" href="/">Home</a></li>
                        <li><a class="nav-link" href="#about">About Us</a></li>
                        <li><a class="nav-link" href="#product">Products</a></li>
						<li><a class="nav-link" href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
	</header>
    )
}

export default Navbar;