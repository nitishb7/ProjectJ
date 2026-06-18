import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./SaleOffer.css";

import saleImage from "../assets/sale-lifestyle.png";

function SaleOffer() {
  return (
    <section className="sale-offer" id="sale" aria-labelledby="sale-heading">
      <div className="sale-inner">
        <div className="sale-copy">
          <p className="sale-eyebrow">Limited Time Offer</p>
          <h2 id="sale-heading">Matchday Sale</h2>
          <p>
            Save up to 30% on selected fan editions, retro classics, and player
            kits.
          </p>
          <Link className="sale-cta" to="/products">
            Shop Sale
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="sale-visual" aria-hidden="true">
          <img src={saleImage} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default SaleOffer;
