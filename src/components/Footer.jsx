import { Globe, X, Play, Users, Shield, RotateCcw, Star, Package } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const trustItems = [
  { icon: Shield, label: "Secure Checkout" },
  { icon: RotateCcw, label: "Free Returns" },
  { icon: Star, label: "4.9 / 5 Rating" },
  { icon: Package, label: "Fast Delivery" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>JERSEY SHOP</span>
            </Link>
            <p>Premium jerseys for real football fans. New season collections, retro kits, and player editions delivered worldwide.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram"><Globe size={18} /></a>
              <a href="#" aria-label="X / Twitter"><X size={18} /></a>
              <a href="#" aria-label="YouTube"><Play size={18} /></a>
              <a href="#" aria-label="Community"><Users size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Shop</h4>
              <Link to="/products">All Jerseys</Link>
              <Link to="/products">Fan Editions</Link>
              <Link to="/products">Retro Classics</Link>
              <Link to="/products">Player Editions</Link>
              <a href="#sale">Sale</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#">FAQ</a>
              <a href="#">Shipping & Returns</a>
              <a href="#">Size Guide</a>
              <a href="#">Track Order</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-trust">
        <div className="footer-trust-inner">
          {trustItems.map(({ icon: Icon, label }) => (
            <div className="trust-item" key={label}>
              <Icon size={18} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} Jersey Shop. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
