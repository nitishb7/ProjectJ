import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import "./ProductsPage.css";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import fanSlide from "../assets/FanSlide.png";
import playerSlide from "../assets/PlayerSide.jpg";
import retroSlide from "../assets/Retro.jpg";

const CATEGORIES = [
  { id: "all", label: "All Jerseys" },
  { id: "fan", label: "Fan Editions" },
  { id: "retro", label: "Retro Classics" },
  { id: "player", label: "Player Editions" },
];

const products = [
  {
    id: 1,
    name: "FC Barcelona Home Jersey",
    subtitle: "2024/25 Season",
    category: "fan",
    price: 89.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 124,
    badge: "New",
    image: slide1,
  },
  {
    id: 2,
    name: "Real Madrid Away Kit",
    subtitle: "2024/25 Season",
    category: "player",
    price: 94.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    badge: "Hot",
    image: slide2,
  },
  {
    id: 3,
    name: "Argentina '86 Retro Classic",
    subtitle: "World Cup Edition",
    category: "retro",
    price: 74.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 203,
    badge: "Sale",
    image: retroSlide,
  },
  {
    id: 4,
    name: "Manchester United Fan Edition",
    subtitle: "Home Kit 2024",
    category: "fan",
    price: 79.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    badge: null,
    image: fanSlide,
  },
  {
    id: 5,
    name: "Brazil 1970 World Cup",
    subtitle: "Retro Classic",
    category: "retro",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviews: 178,
    badge: "Sale",
    image: retroSlide,
  },
  {
    id: 6,
    name: "PSG Player Edition",
    subtitle: "2024/25 Season",
    category: "player",
    price: 109.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 67,
    badge: "New",
    image: playerSlide,
  },
  {
    id: 7,
    name: "Liverpool FC Fan Edition",
    subtitle: "Away Kit 2024",
    category: "fan",
    price: 84.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 211,
    badge: null,
    image: slide3,
  },
  {
    id: 8,
    name: "Italy 1982 Retro Classic",
    subtitle: "World Cup Edition",
    category: "retro",
    price: 72.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 144,
    badge: null,
    image: slide1,
  },
  {
    id: 9,
    name: "Ronaldo Limited Edition",
    subtitle: "Player Collection",
    category: "player",
    price: 119.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 43,
    badge: "Hot",
    image: slide2,
  },
];

const BADGE_COLORS = {
  New: { background: "#3769d6", color: "#fff" },
  Hot: { background: "#dc2626", color: "#fff" },
  Sale: { background: "#059669", color: "#fff" },
};

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className="product-badge" style={BADGE_COLORS[product.badge]}>
            {product.badge}
          </span>
        )}
        <button className="product-cart-btn" aria-label={`Add ${product.name} to cart`}>
          <ShoppingCart size={18} />
        </button>
      </div>
      <div className="product-info">
        <p className="product-subtitle">{product.subtitle}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <div className="star-rating">
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
          <span className="product-reviews">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="price-current">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="price-original">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </article>
  );
}

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="products-hero-inner">
          <p className="products-hero-eyebrow">The Full Range</p>
          <h1>All Jerseys</h1>
          <p className="products-hero-sub">Premium kits for fans who live the game</p>
        </div>
      </div>

      <div className="products-filters-bar">
        <div className="products-filters-inner">
          <div className="category-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn${activeCategory === cat.id ? " filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <span className="products-count">
            {filtered.length} {filtered.length === 1 ? "jersey" : "jerseys"}
          </span>
        </div>
      </div>

      <div className="products-grid-section">
        <div className="products-grid-inner">
          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="products-empty">No jerseys found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
