import Box from "./box";
export default function Boxes(){
    return (
        <>
        <div className="boxes">
            <Box
            name="fa-solid fa-cube"
            title="Easy Donation"
            desc="Quickly post your surplus food with photos and details. Our platform makes sharing simple and secure."
            />
            <Box
            name="fa-solid fa-cart-shopping"
            title="Quick Ordering"
            desc="Get groceries, medicines, and essentials delivered quickly through a simple, community-powered process."
            />
            <Box
            name="fa-solid fa-user-group"
            title="Community Impact"
            desc="Connect directly with families, shelters, and organizations in your community who need food assistance."
            />
        </div>
        </>
    );
}