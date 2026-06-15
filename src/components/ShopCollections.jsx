import { ArrowRight } from "lucide-react";
import "./ShopCollections.css";

import fanSlide from "../assets/FanSlide.png";
import retroSlide from "../assets/Retro.jpg";
import slide3 from "../assets/slide3.png";

const collections = [
  {
    id: "fan-editions",
    name: "Fan Editions",
    description: "Comfortable everyday jerseys made for loyal supporters.",
    image: fanSlide,
    theme: "fan",
  },
  {
    id: "retro-classics",
    name: "Retro Classics",
    description: "Iconic designs inspired by unforgettable football eras.",
    image: retroSlide,
    theme: "retro",
  },
  {
    id: "player-editions",
    name: "Player Editions",
    description: "Premium match-style jerseys with a performance-focused fit.",
    image: slide3,
    theme: "player",
  },
];

function ShopCollections() {
  return (
    <section
      className="shop-collections"
      aria-labelledby="collections-heading"
    >
      <div className="collections-header">
        <h2 id="collections-heading">Shop by Collection</h2>
        <button className="view-collections-btn" type="button">
          View All Collections
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="collections-grid">
        {collections.map((collection) => (
          <article
            className={`collection-card collection-card--${collection.theme}`}
            id={collection.id}
            key={collection.id}
          >
            <div className="collection-image">
              <img src={collection.image} alt="" />
            </div>

            <div className="collection-content">
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>
              <button
                className="shop-collection-btn"
                type="button"
                aria-label={`Shop ${collection.name}`}
              >
                Shop Collection
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ShopCollections;
