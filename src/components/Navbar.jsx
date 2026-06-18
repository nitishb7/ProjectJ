import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="navbar-logo-text">JERSEY SHOP</span>
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Jerseys</Link>
          <a href="#">Clubs</a>
          <a href="#">Retro</a>
          <a href="#">About</a>
        </nav>

        <div className="navbar-actions">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
          <button className="cart-btn" aria-label="Shopping cart">
            <ShoppingCart size={21} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
