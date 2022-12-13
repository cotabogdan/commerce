import Announcement from "../Components/Announcement";
import CartComponent from "../Components/CartComp";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";



const Cart = () => {
  return (
   <div>
    <Announcement />
      <NavBar />
      <CartComponent />
      <Footer />
      </div>
  );
};

export default Cart;