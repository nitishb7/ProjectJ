import "./FeaturedProducts.css";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const products = [
  {
    id: 1,
    category: "Home Kit",
    name: "Real Madrid 25/26 Jersey",
    price: "$89.00 USD",
    image: slide1,
  },
  {
    id: 2,
    category: "Retro Collection",
    name: "Classic Club Jersey",
    price: "$79.00 USD",
    image: slide2,
  },
  {
    id: 3,
    category: "Player Edition",
    name: "Premium Match Jersey",
    price: "$109.00 USD",
    image: slide3,
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="featured-header">
        <h2>Featured Products</h2>
        <button className="view-products-btn">See All Products</button>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-details">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
