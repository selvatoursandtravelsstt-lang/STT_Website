import { useState } from 'react'
import { ArrowRight, MapPin, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function contactLink(trip, duration, vehicle) {
  const amount = vehicle && Number.isFinite(vehicle.amount)
    ? currency.format(vehicle.amount)
    : ''
  const sourceAmount = vehicle?.sourceAmount
  const details = [
    `I would like to enquire about the ${duration.label.toLowerCase()} tour package: ${trip.title}.`,
    `Route: ${trip.route}.`,
    `Duration: ${duration.label}.`,
    vehicle ? `Vehicle: ${vehicle.name} (${vehicle.category}).` : '',
    amount ? `Displayed reference package amount: ${amount}.` : '',
    sourceAmount ? `The reference amount is unclear (${sourceAmount}); please confirm the current STT quotation.` : '',
    'Please confirm the current quotation and availability.',
  ].filter(Boolean).join('\n')
  const params = new URLSearchParams({
    type: 'Tour Package',
    destination: trip.route,
    duration: String(duration.days),
    message: details,
  })

  if (vehicle) {
    params.set('vehicle', `${vehicle.name} (${vehicle.category})`)
    if (amount) params.set('amount', amount)
  }

  return `/contact?${params.toString()}`
}

function TourPackageLayout({ duration, packages, durations }) {
  const [selection, setSelection] = useState({ durationId: duration.id, packageId: packages[0]?.id ?? '' })
  const selectedPackageId = selection.durationId === duration.id ? selection.packageId : packages[0]?.id
  const selectedPackage = packages.find(({ id }) => id === selectedPackageId) ?? packages[0]

  return (
    <div className="inner-page one-day-package-page">
      <section className="page-banner one-day-package-banner">
        <div className="page-width page-banner-inner">
          <p className="eyebrow">{duration.label.toUpperCase()} JOURNEYS FROM COIMBATORE</p>
          <h1>{duration.pageTitle}</h1>
          <p>Choose a route to review its vehicle tariffs, sightseeing itinerary, and listed charges. Enquiries are not confirmed bookings.</p>
          <nav className="package-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">›</span>
            <Link to="/tour-packages">Tour Packages</Link><span aria-hidden="true">›</span>
            <span aria-current="page">{duration.label}</span>
          </nav>
        </div>
      </section>

      <section className="one-day-package-layout page-width" aria-label={`${duration.label} tour packages`}>
        <aside className="one-day-package-sidebar" aria-labelledby="one-day-package-list-heading">
          <div className="one-day-sidebar-heading">
            <p className="eyebrow">CHOOSE A ROUTE</p>
            <h2 id="one-day-package-list-heading">{duration.label} packages</h2>
          </div>
          <nav className="one-day-package-list" aria-label={`${duration.label} tour package selector`}>
            {packages.map((trip) => (
              <button
                className={trip.id === selectedPackage?.id ? 'one-day-package-option is-selected' : 'one-day-package-option'}
                key={trip.id}
                type="button"
                aria-pressed={trip.id === selectedPackage?.id}
                onClick={() => setSelection({ durationId: duration.id, packageId: trip.id })}
              >
                <img src={trip.image} alt="" loading="lazy" />
                <span>{trip.title}</span>
              </button>
            ))}
          </nav>
          <p className="one-day-sidebar-hint">Select a route to view its details and tariff.</p>
        </aside>

        {selectedPackage && (
          <article className="one-day-package-detail" aria-labelledby="one-day-selected-title" aria-live="polite">
            <div className="one-day-package-content">
              <div className="one-day-package-heading">
                <p className="eyebrow"><MapPin size={14} aria-hidden="true" /> {duration.label.toUpperCase()} · {selectedPackage.destination}</p>
                <h2 id="one-day-selected-title">{selectedPackage.title}</h2>
                <p className="one-day-package-route">{selectedPackage.route}</p>
              </div>
              <div className="one-day-package-hero">
                <img className="one-day-package-image" src={selectedPackage.image} alt={selectedPackage.alt} />
                <span>{duration.label}</span>
              </div>

              <section className="one-day-detail-section one-day-tariff-section" aria-labelledby="one-day-tariff-heading">
                <div className="one-day-tariff-heading">
                  <div>
                    <p className="eyebrow"><Tag size={14} aria-hidden="true" /> REFERENCE TARIFF</p>
                    <h3 id="one-day-tariff-heading">Vehicle package amount</h3>
                  </div>
                  <span>Duration: {duration.label}</span>
                </div>
                <div className="one-day-tariff-scroll" tabIndex="0" aria-label="Scrollable vehicle tariff table">
                  <table className="one-day-tariff-table">
                    <caption className="visually-hidden">Vehicle package amounts for {selectedPackage.title}.</caption>
                    <thead>
                      <tr><th scope="col">Vehicles</th><th scope="col">Package Amount</th><th scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {selectedPackage.vehicleTariffs.map((vehicle) => (
                        <tr key={vehicle.id}>
                          <th scope="row">
                            <span>{vehicle.name}</span>
                            <small>{vehicle.category}</small>
                          </th>
                          <td>
                            {Number.isFinite(vehicle.amount)
                              ? currency.format(vehicle.amount)
                              : <span className="one-day-unclear-amount">Unclear source value: {vehicle.sourceAmount}</span>}
                            {vehicle.amountNote && <small className="one-day-amount-note">{vehicle.amountNote}</small>}
                          </td>
                          <td><Link className="one-day-book-button" to={contactLink(selectedPackage, duration, vehicle)} aria-label={`Enquire about ${vehicle.name} for ${selectedPackage.title}`}>{Number.isFinite(vehicle.amount) ? 'Book Now' : 'Enquire'} <ArrowRight size={15} aria-hidden="true" /></Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="one-day-detail-section" aria-labelledby="one-day-itinerary-heading">
                <h3 id="one-day-itinerary-heading">Sightseeing itinerary</h3>
                {selectedPackage.itinerary.length ? (
                  <ul className="one-day-itinerary">
                    {selectedPackage.itinerary.map((stop, index) => <li key={`${index}-${stop}`}>{stop}</li>)}
                  </ul>
                ) : (
                  <p className="one-day-reference-note">{selectedPackage.itineraryNote}</p>
                )}
              </section>

              <div className="one-day-inclusions-grid">
                <section className="one-day-detail-section">
                  <h3>Included charges listed by the reference</h3>
                  {selectedPackage.inclusions.length > 0 && (
                    <ul className="one-day-inclusions">
                      {selectedPackage.inclusions.map((inclusion) => <li key={inclusion}>{inclusion}</li>)}
                    </ul>
                  )}
                  {selectedPackage.inclusionText
                    ? <p className="one-day-reference-note">{selectedPackage.inclusionText}</p>
                    : selectedPackage.inclusions.length === 0 && <p className="one-day-reference-note">The reference does not specify included charges for this package.</p>}
                </section>
                <section className="one-day-detail-section">
                  <h3>Reference distances &amp; notes</h3>
                  {selectedPackage.mkt.length ? (
                    <ul className="one-day-inclusions">
                      {selectedPackage.mkt.map((value, index) => <li key={`${index}-${value}`}>{value}</li>)}
                    </ul>
                  ) : <p className="one-day-reference-note">No MKT or distance information is listed.</p>}
                  {selectedPackage.referenceNotes.map((note) => <p className="one-day-reference-note" key={note}>{note}</p>)}
                </section>
              </div>

              <div className="one-day-package-actions">
                <Link className="button button-gold" to={contactLink(selectedPackage, duration)}>Enquire about this tour <ArrowRight size={16} aria-hidden="true" /></Link>
                <p>Submitting an enquiry does not confirm a booking. STT will confirm arrangements directly.</p>
              </div>
            </div>
          </article>
        )}
      </section>

      <section className="duration-other-links" aria-labelledby="other-durations-heading">
        <div className="page-width">
          <p className="eyebrow">FIND ANOTHER DURATION</p>
          <h2 id="other-durations-heading">Explore other tour durations</h2>
          <div className="duration-other-grid">
            {durations.filter(({ id }) => id !== duration.id).map((item) => (
              <Link key={item.id} to={`/tour-packages/${item.id}`}>{item.label} <ArrowRight size={15} aria-hidden="true" /></Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TourPackageLayout
