import {useEffect,useState} from "react";
import ProductBox from '../components/productBox'
import Navbar from '../components/Navbar';
import Share from '../components/share';
import MyButton from '../components/button';
import CartSummary from '../components/CartSummary';
import '../styles/shop.css';
export default function shop(){
   const [products, setProducts] = useState([]);
   const [error, setError] = useState(null);

    useEffect(() => {
    fetch("http://localhost:5000/shop", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    })
        .then(async (res) => {
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Something went wrong");
        }
        return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => {
        console.error("Error fetching products:", err.message);
        setProducts([]); // optional: clear product list
        setError(err.message); // set a user-friendly message
        });
    }, []);


    return (
  <>
    {error ? (
      <div className="error-message">
        <h6 align="center" >{error} – <a href="/login">Login here</a></h6>

      </div>
    ) : (
      <>
        <Navbar btn1="DashBoard" btn2="Profile" />
        <Share
          title="Rewards Shop"
          desc="Use your donation points to get discounts on electronics and restaurant coupons"
        />
        <div className="shop-btns">
          <MyButton btnName="All Products" className="btn btn-success" />
          <MyButton btnName="Electronics" className="btn btn-outline-secondary" />
          <MyButton btnName="Coupons" className="btn btn-outline-secondary" />
        </div>
        <div className="shopItems">
          {products.map((product, index) => (
            <ProductBox id={product.title} title={product.title} offerPrice={product.offerPrice} finalPrice={product.finalPrice} key={index}  {...product} />
          ))}
        </div>
        <CartSummary />
      </>
    )}
  </>
);

}