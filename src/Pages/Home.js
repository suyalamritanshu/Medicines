import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import About from './About';
import Product from './Product';
import Appointment from '../Components/Appointment';
import Footer from '../Components/Footer';
import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'

function Home() {
  return (
      <div id='home'>
          <Header />
          <Navbar />
          <Banner />
          <About />
          <Product />
          <Appointment />
          <Footer />
      </div>
  )    
}

export default Home;