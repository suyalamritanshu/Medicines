
import React from 'react';
import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'
import image from '../Assests/logo.svg'
const Navbar = ({ toggle }) => {
    return (
        <nav
            className=' fixed flex justify-between items-center h-16 bg-white text-black relative shadow-sm'
            role='navigation'
        >
            <a className="navbar-brand ml-36" href="/"><img src={image} alt="zenberg logo"   />
            <i className='care_logo'>Care for Smile</i>
            
            </a>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>
            <div className='pr-8 md:block  hidden'>
                <a class=" p-3 text-black   active:bg-orange-700 " href="/">Home</a>
                <a class="p-3 text-black active:bg-orange-700" href="#about">About Us</a>
                <a class="p-3 text-black active:bg-orange-700" href="/product/all">Products</a>
                <a class="p-3 text-black active:bg-orange-700" href="#contact">Contact Us</a>

            </div>
        </nav>
    );
};

export default Navbar;
