/* eslint-disable jsx-a11y/alt-text */
import image17 from '../Assests/17.svg'
import Footer from './Footer';
import Navbar from './Navbar';
import StarRateIcon from "@material-ui/icons/StarRate";
import Header from '../Components/Header';
function Product17(){
    return (
        <div>  <Header />
            <Navbar />
            <section className="container text-center   p-4 md:py-20 px-5 md:p-10 backgroundColor: to-blue-400">
            <section className=" grid grid-cols-1   md:grid-cols-2 xl:grid-cols-  3xl:grid-cols-5 gap-1 text-center">
            <div className='mt-12'>
                <img src={image17} />
            </div>
            <div className='mt-4 '>
                <h3 className='flex justify-self-start mb-4 text-sky-900'>
                NEOLOL-BETA 20
                </h3>
                <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> FDA Approved To treat symptoms of major depression.</h6>
                <br />
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Readily absorbed from the GI Tract (oral).</h6>
                <br />
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Prevents The reuptake of one neurotransmitter, by nerves.</h6>
            <br />
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Prevents The reuptake of one neurotransmitter, by nerves.</h6>

                <br />
                <h6 className='flex justify-self-start sm:flex sm:justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> FDA Approved To treat symptoms of major depression.</h6>
                <br />
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Readily absorbed from the GI Tract (oral).</h6>
                <br />
                
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Prevents The reuptake of one neurotransmitter, by nerves.</h6>
            <br />
                <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Prevents The reuptake of one neurotransmitter, by nerves.</h6>
                <button className='flex justify-self-center bg-sky-900 rounded-md text-gray-50 p-2'>Obessive-compulsive disorder
Major depression | Generalized anxiety disorder</button>
            </div>
        </section>
        </section>
        <Footer />
        </div >
        
    )
}

export default Product17;