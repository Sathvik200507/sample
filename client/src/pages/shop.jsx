import ProductBox from '../components/productBox'
import Navbar from '../components/Navbar';
import Share from '../components/share';
import MyButton from '../components/button';
import CartSummary from '../components/CartSummary';
import '../styles/shop.css';
export default function shop(){
    return(
        <>
            <Navbar btn1="Home" btn2="Profile"/>
            <Share title="Rewards Shop" desc="Use your donation points to get discounts on electronics and restaurant coupons"/>
            <div className="shop-btns">
                <MyButton btnName="All Products" className="btn btn-success"/>
                <MyButton btnName="Electronics" className="btn btn-outline-secondary"/>
                <MyButton btnName="Coupons" className="btn btn-outline-secondary"/>
            </div>
            <div className='shopItems'>
            <ProductBox category="Electronics" image="/assets/headphones.jpg" title="Wireless Headphones" desc="High-quality wireless headphones with noise cancellation"/>
            <ProductBox category="Electronics" image="/assets/smartphone.jpg" title="Smartphone Stand" desc="Adjustable smartphone stand for desk and bedside"/>
            <ProductBox category="Electronics" image="/assets/usbcable.jpg" title="USB-C Cable" desc="Fast charging USB-C cable, 6ft length, supports higher speeds and wattage"/>
            <ProductBox category="Coupons" image="/assets/pizzaCoupon.jpg" title="Pizza Palace Coupon" desc="$25 voucher for Pizza Palace - Valid for 6 months"/>
            <ProductBox category="Coupons" image="/assets/burgerCoupon.jpg" title="Burger House Coupon" desc="$20 voucher for Burger House - Valid for 3 months"/>
            <ProductBox category="Coupons" image="/assets/coffeCoupon.jpg" title="Coffee Shop Coupon" desc="$15 voucher for premium coffee and pastries"/>
            </div>
            <CartSummary/>
        </>
    );
}