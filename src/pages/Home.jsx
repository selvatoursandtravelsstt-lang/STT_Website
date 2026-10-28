import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <img
          className="home-hero-image"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90"
          alt="A scenic road winding through a lush South Indian landscape"
          fetchPriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content page-width">
          <h1 id="home-title">Your Trusted Travel Partner in Coimbatore</h1>
          <p className="hero-intro">Discover comfortable and convenient travel with Selva Tours and Travels. From local taxi services and airport transfers to outstation journeys, we help you plan your next trip with ease.</p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/tour-packages">Explore Tour Packages</Link>
            <Link className="button button-hero-outline" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="home-introduction page-width" aria-labelledby="introduction-title">
        <div className="home-introduction-copy">
          <p className="eyebrow">TRAVEL FROM COIMBATORE</p>
          <h2 id="introduction-title">Discover Travel Made Simple with Selva Tours and Travels</h2>
          <p>Every journey begins with a destination in mind. Whether you are planning a local trip around Coimbatore, an airport transfer, an outstation journey, or a holiday with family and friends, Selva Tours and Travels helps you explore suitable travel options.</p>
          <p>We aim to make planning your journey straightforward by helping you discuss your destination, travel requirements, vehicle preferences, and tariff before confirming your arrangements.</p>
        </div>
        <img
          className="home-introduction-image"
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
          alt="Mountain road through the scenic Western Ghats of South India"
          loading="lazy"
        />
      </section>

      <section className="home-about" aria-labelledby="know-more-title">
        <div className="page-width home-about-content">
          <p className="eyebrow">A LITTLE MORE ABOUT SELVA</p>
          <h2 id="know-more-title">Know More About Selva Tours and Travels</h2>
          <p>We understand that every traveller has different plans and preferences. Our goal is to help you explore travel options that suit your destination, schedule, and requirements. Learn more about Selva Tours and Travels, our approach to travel planning, and the services you can enquire about.</p>
          <Link className="button button-gold" to="/about">Know More About Us</Link>
        </div>
      </section>
    </>
  )
}

export default Home
