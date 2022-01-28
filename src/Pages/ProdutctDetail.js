/* eslint-disable jsx-a11y/alt-text */
import image1 from '../Assests/1.svg'
import image2 from '../Assests/2.svg'
import image3 from '../Assests/3.svg'
import image4 from '../Assests/4.svg'
import image5 from '../Assests/5.svg'
import image6 from '../Assests/10.svg'
import image7 from '../Assests/7.svg'
import image8 from '../Assests/8.svg'
import image9 from '../Assests/9.svg'
import image10 from '../Assests/10.svg'
import image11 from '../Assests/11.svg'
import image12 from '../Assests/12.svg'
import image13 from '../Assests/13.svg'
import image14 from '../Assests/14.svg'
import image15 from '../Assests/15.svg'
import image16 from '../Assests/16.svg'
import image17 from '../Assests/17.svg'

import Item from "../Components/Item";
function ProductDetail() {
    return (
             <div>
        <section className="container text-center   p-4 md:py-20 px-5 md:p-10 backgroundColor: to-blue-400">
             <div className="section-intro pb-85px text-center section-heading-margin-less">
        <h2 className="text-4xl  font-medium mt-4">
          All Products
        </h2>
       
      </div>

            <section className=" grid grid-cols-1   md:grid-cols-2 xl:grid-cols-3  3xl:grid-cols-5 gap-10 text-center">

                <div >      <Item><img src={image1} /> </Item></div>
                <div ><Item><img src={image2} /> </Item>
                </div>
                <div >
                    <Item><img src={image3} /> </Item></div>
                <div > <Item><img src={image4} /> </Item></div>
                <div >      <Item><img src={image5} /> </Item></div>
                <div ><Item><img src={image6} /> </Item>
                </div>
                <div >
                    <Item><img src={image7} /> </Item></div>
                <div > <Item><img src={image8} /> </Item></div>
                <div >      <Item><img src={image9} /> </Item></div>
                <div ><Item><img src={image10} /> </Item>
                </div>
                <div >
                    <Item><img src={image11} /> </Item></div>
                <div > <Item><img src={image12} /> </Item></div>
                <div > <Item><img src={image13} /> </Item></div>
                <div > <Item><img src={image14} /> </Item></div>
                <div > <Item><img src={image15} /> </Item></div>
                <div > <Item><img src={image16} /> </Item></div>
                <div > <Item><img src={image17} /> </Item></div>



            </section>
        </section>
        </div>
    )
}

export default ProductDetail;;