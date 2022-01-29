/* eslint-disable jsx-a11y/alt-text */
import image15 from '../Assests/15.svg'
import Footer from './Footer';
import Navbar from './Navbar';
import StarRateIcon from "@material-ui/icons/StarRate";

function Product15(){
    return (
        <div>
        <Navbar />
        <section className="container text-center   p-4 md:py-20 px-5 md:p-10 backgroundColor: to-blue-400">
        <section className=" grid grid-cols-1   md:grid-cols-2 xl:grid-cols-  3xl:grid-cols-5 gap-1 text-center">
        <div className='mt-12'>
            <img src={image15} />
        </div>
        <div className='mt-4 '>
            <h3 className='flex justify-self-start mb-4 text-sky-900'>
            REJFAST-CD3
            </h3>
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> FDA Approved To treat symptoms of major depression.</h6>
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Readily absorbed from the GI Tract (oral).</h6>
            <h6 className='flex justify-self-start'>  <StarRateIcon style={{ color: "#28328c" }} /> Prevents The reuptake of one neurotransmitter, by nerves.</h6>
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

export default Product15;