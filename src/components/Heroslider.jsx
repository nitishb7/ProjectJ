import { useEffect, useState } from "react";
import "./Heroslider.css";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const slides = [
  {
    id: 1,
    eyebrow: "New Season Collection",
    title: "Wear The Game. Own The Moment.",
    description:
      "Shop premium club jerseys, retro kits, and player editions made for real football fans.",
    primaryButton: "Shop Jerseys",
    secondaryButton: "Explore Retro",
    image: slide1,
  },
  {
    id: 2,
    eyebrow: "Retro Classics",
    title: "Bring Back Iconic Football Eras.",
    description:
      "Discover vintage-inspired jerseys from unforgettable seasons, legends, and matchday memories.",
    primaryButton: "Shop Retro",
    secondaryButton: "View Collection",
    image: slide2,
  },
  {
    id: 3,
    eyebrow: "Player Edition Kits",
    title: "Built For Fans Who Live Football.",
    description:
      "Upgrade your wardrobe with sharp, match-inspired kits designed for comfort and style.",
    primaryButton: "Shop Now",
    secondaryButton: "Learn More",
    image: slide3,
  },
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="hero-slider">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="hero-slide" key={slide.id}>
            <div className="hero-inner">
              <div className="hero-content">
                <p className="hero-eyebrow">{slide.eyebrow}</p>
                <h1>{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-buttons">
                  <button className="hero-primary-btn">{slide.primaryButton}</button>
                  <button className="hero-secondary-btn">{slide.secondaryButton}</button>
                </div>
              </div>
              <div className="hero-image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={currentSlide === index ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
