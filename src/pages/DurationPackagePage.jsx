import { useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import TripDetailsDialog from '../components/TripDetailsDialog.jsx'
import { tourPackageDurations, tourPackages } from '../data/tourPackages.js'

function DurationPackagePage() {
  const { duration: durationId } = useParams()
  const duration = tourPackageDurations.find(({ id }) => id === durationId)
  const [selectedTrip, setSelectedTrip] = useState(null)

  if (!duration) return <Navigate to="/tour-packages" replace />

  const packages = tourPackages.filter((trip) => trip.duration === duration.id)

  return (
    <div className="inner-page duration-package-page">
      <section className="page-banner duration-package-banner">
        <div className="page-width page-banner-inner">
          <p className="eyebrow">SUGGESTED JOURNEYS FROM COIMBATORE</p>
          <h1>{duration.pageTitle}</h1>
          <nav className="package-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><ChevronRight size={15} aria-hidden="true" />
            <Link to="/tour-packages">Tour Packages</Link><ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">{duration.label}</span>
          </nav>
          <p>Explore route ideas for a {duration.label.toLowerCase()} trip. Routes, itinerary, vehicle availability, rates, and travel arrangements must be confirmed with the business.</p>
        </div>
      </section>

      <section className="section page-width duration-route-section" aria-labelledby="duration-routes-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ILLUSTRATIVE ROUTES</p>
            <h2 id="duration-routes-heading">Explore {duration.label.toLowerCase()} route ideas</h2>
          </div>
          <p>These examples are not confirmed package offers. Select a route to review vehicle categories and request current details.</p>
        </div>
        {packages.length ? (
          <div className="duration-route-grid">
            {packages.map((trip) => (
              <button
                className="duration-route-card"
                type="button"
                key={trip.id}
                aria-label={`View trip details for ${trip.title}`}
                onClick={() => setSelectedTrip(trip)}
              >
                <span className="duration-route-image">
                  <img src={trip.image} alt={trip.alt} loading="lazy" />
                  <span className="duration-route-badge">{duration.label}</span>
                </span>
                <span className="duration-route-copy">
                  <span className="duration-route-destination">{trip.destination}</span>
                  <span className="duration-route-title">{trip.title}</span>
                  <span className="duration-route-description">{trip.description}</span>
                  <span className="duration-route-pricing">Contact for pricing</span>
                  <span className="duration-route-action">View Details / Enquire Now <ArrowRight size={17} aria-hidden="true" /></span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="duration-empty-state">Route ideas for this duration have not been added yet. Contact us to discuss your plans.</p>
        )}
      </section>

      <section className="duration-other-links" aria-labelledby="other-durations-heading">
        <div className="page-width">
          <p className="eyebrow">FIND ANOTHER DURATION</p>
          <h2 id="other-durations-heading">Explore other tour durations</h2>
          <div className="duration-other-grid">
            {tourPackageDurations.filter(({ id }) => id !== duration.id).map((item) => (
              <Link key={item.id} to={`/tour-packages/${item.id}`}>{item.label} <ArrowRight size={15} aria-hidden="true" /></Link>
            ))}
          </div>
        </div>
      </section>

      <TripDetailsDialog key={selectedTrip?.id ?? 'closed'} trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
    </div>
  )
}

export default DurationPackagePage
