import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-image" role="img" aria-label="Mountain road winding through a green South Indian landscape" />
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <p className="hero-location"><MapPin size={15} aria-hidden="true" /> Based in Coimbatore, Tamil Nadu</p>
        <p className="hero-kicker">LOCAL &amp; OUTSTATION TRAVEL FROM COIMBATORE</p>
        <h1>Your Trusted<br /><em>Travel Partner in Coimbatore</em></h1>
        <p className="hero-intro">Discover comfortable and convenient travel with Selva Tours and Travels. From local taxi services and airport transfers to outstation trips and South India tour packages, we help you plan every journey with ease.</p>
        <div className="hero-actions">
          <Link className="button button-gold" to="/tour-packages">Explore tour packages <span aria-hidden="true">↗</span></Link>
          <Link className="button button-hero-outline" to="/contact">Contact us</Link>
        </div>
      </div>
      <div className="hero-side-label" aria-hidden="true">COIMBATORE · TAMIL NADU</div>
    </section>
  )
}

export default Hero
