import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
     <header className="navbar">
         <div className="navbar-logo">
            <div className="logo-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>JERSEY SHOP</h2>
        </div>

        <nav className="navbar-links">
            <a href="#">Home</a>
            <a href="#">Jerseys</a>
            <a href="#">Clubs</a>
            <a href="#">Retro</a>
            <a href="#">About</a>
        </nav>

         <div className="navbar-actions">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>

        <button className="cart-btn">
          <ShoppingCart size={21} />
        </button>
      </div>

     </header>
    
  )
}

export default Navbar
