import {useEffect,useState} from "react";
import ProductBox from '../components/productBox'
import Navbar from '../components/Navbar';
import Share from '../components/share';
import MyButton from '../components/button';
import CartSummary from '../components/CartSummary';
import '../styles/shop.css';
export default function shop(){
   const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/shop", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
        })
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
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
            {products.map((product, index) => (
            <ProductBox key={index} {...product} />
            ))}
            </div>
            <CartSummary/>
        </>
    );
}