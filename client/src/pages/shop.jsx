import ProductBox from '../components/productBox'
import Navbar from '../components/Navbar';
import Share from '../components/share';
import '../styles/shop.css';
export default function shop(){
    return(
        <>
            <Navbar btn1="Home" btn2="Profile"/>
            <Share title="Rewards Shop" desc="Use your donation points to get discounts on electronics and restaurant coupons"/>
            <div className='shopItems'>
            <ProductBox image="/assets/headphones.jpg" title="Wireless Headphones" desc="High-quality wireless headphones with noise cancellation"/>
            <ProductBox image="/assets/smartphone.jpg" title="Smartphone Stand" desc="Adjustable smartphone stand for desk and bedside"/>
            <ProductBox image="/assets/usbcable.jpg" title="USB-C Cable" desc="Fast charging USB-C cable, 6ft length, supports higher speeds and wattage"/>
            <ProductBox image="/assets/usbcable.jpg" title="USB-C Cable" desc="Fast charging USB-C cable, 6ft length, supports higher speeds and wattage"/>
            </div>
        </>
    );
}