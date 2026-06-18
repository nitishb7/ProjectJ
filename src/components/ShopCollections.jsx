import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ShopCollections.css";

import fanSlide from "../assets/FanSlide.png";
import playerSlide from "../assets/PlayerSide.jpg";
import retroSlide from "../assets/Retro.jpg";

const collections = [
  { id: "fan-editions", name: "Fan Editions", image: fanSlide, theme: "fan" },
  { id: "retro-classics", name: "Retro Classics", image: retroSlide, theme: "retro" },
  { id: "player-editions", name: "Player Editions", image: playerSlide, theme: "player" },
];

function ShopCollections() {
  return (
    <section className="shop-collections" aria-labelledby="collections-heading">
      <div className="collections-inner">
        <div className="collections-header">
          <h2 id="collections-heading">Shop by Collection</h2>
          <Link to="/products" className="view-collections-btn">
            View All Collections
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="collections-grid">
          {collections.map((collection) => (
            <article
              className={`collection-card collection-card--${collection.theme}`}
              id={collection.id}
              key={collection.id}
            >
              <div className="collection-image">
                <img src={collection.image} alt="" loading="lazy" />
              </div>

              <div className="collection-overlay">
                <h3>{collection.name}</h3>
                <Link
                  to="/products"
                  className="shop-collection-btn"
                  aria-label={`Shop ${collection.name}`}
                >
                  Shop
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopCollections;
