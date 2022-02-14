import React from 'react';
import '../css/style.css'
import '../css/responsive.css'
import '../css/custom.css'
import '../css/pogo-slider.min.css'
import '../css/bootstrap.min.css'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4  flex-row-reverse items-center bg-white z-auto'
          : 'hidden'
      }
      onClick={toggle}
    >
     <a class=" p-2 text-black active:bg-orange-600" href="/">Home</a>
      <a class="p-2 text-black active:bg-orange-600" href="#about">About Us</a>
      <a class="p-2 text-black active:bg-orange-600" href="/product/all">Products</a>
      <a class="p-2 text-black active:bg-orange-600" href="#contact">Contact Us</a>
    </div>
  );
};

export default Dropdown;