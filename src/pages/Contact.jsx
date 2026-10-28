import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { business, emailHref, isConfigured, phoneHref, whatsappHref } from '../config/business.js'
import EnquiryForm from '../components/EnquiryForm.jsx'

const officeAddress = 'No 5A/8, Subbathal Layout, 3rd Street, Rathinapuri, Coimbatore, Tamil Nadu – 641027, India'
const encodedOfficeAddress = encodeURIComponent(officeAddress)
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedOfficeAddress}&output=embed`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedOfficeAddress}`

function Contact() {
  const [searchParams] = useSearchParams()
  const phone = phoneHref()
  const email = emailHref()
  const wa = whatsappHref('Hello, I would like to enquire about Selva Tours and Travels.')
  const duration = searchParams.get('duration')
  const initialMessage = duration ? `I would like to enquire about a ${duration}-day tour.` : ''
  const initialType = searchParams.get('type') || ''
  const initialDestination = searchParams.get('destination') || searchParams.get('category') || ''

  return (
    <div className="inner-page">
      <section className="page-banner contact-banner">
        <div className="page-width page-banner-inner">
          <p className="eyebrow">WE’RE HERE TO HELP YOU PLAN</p>
          <h1>Contact Selva<br /><em>Tours and Travels</em></h1>
          <p>Planning a local trip, an outstation journey, or a holiday from Coimbatore? Contact Selva Tours and Travels to discuss your destination, travel dates, vehicle requirements, and tariff.</p>
        </div>
      </section>

      <section className="section page-width contact-information">
        <div className="contact-main">
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2>Let’s talk about<br /><em>your travel plans.</em></h2>
          <p className="contact-intro">Contact options will be activated as soon as verified business details are added to the central configuration.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <span><MapPin size={19} aria-hidden="true" /></span><div><small>LOCATION</small><strong>{business.location}</strong>{isConfigured(business.address) && <p>{business.address}</p>}
              {isConfigured(business.mapsUrl) && <a href={business.mapsUrl} target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={14} aria-hidden="true" /></a>}</div>
            </div>
            <div className="contact-detail">
              <span><Phone size={19} aria-hidden="true" /></span><div><small>PHONE</small><strong>{isConfigured(business.phone) ? business.phone : '+91 9894376366'}</strong>{phone && <a href={phone}>Call now <ArrowUpRight size={14} aria-hidden="true" /></a>}</div>
            </div>
            <div className="contact-detail">
              <span><MessageCircle size={19} aria-hidden="true" /></span><div><small>WHATSAPP</small><strong>{isConfigured(business.whatsapp) ? business.whatsapp : '+91 9894376366'}</strong>{wa && <a href={wa} target="_blank" rel="noreferrer">Start a chat <ArrowUpRight size={14} aria-hidden="true" /></a>}</div>
            </div>
            <div className="contact-detail">
              <span><Mail size={19} aria-hidden="true" /></span><div><small>EMAIL</small><strong>{isConfigured(business.email) ? business.email : 'selvatoursandtravels.stt@gmail.com'}</strong>{email && <a href={email}>Send an email <ArrowUpRight size={14} aria-hidden="true" /></a>}</div>
            </div>
            {isConfigured(business.operatingHours) && <div className="contact-detail">
              <span><Clock3 size={19} aria-hidden="true" /></span><div><small>BUSINESS HOURS</small><strong>{business.operatingHours}</strong></div>
            </div>}
          </div>
          <div className="contact-related-links"><Link to="/tariff">Taxi tariff options <ArrowUpRight size={14} aria-hidden="true" /></Link><Link to="/tour-packages">Suggested destinations <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="contact-enquiry-layout page-width" aria-label="Travel enquiry and office location">
        <div className="contact-form-panel">
          <EnquiryForm initialType={initialType} initialDestination={initialDestination} initialMessage={initialMessage} />
        </div>
        <aside className="contact-map-panel">
          <div className="contact-map-heading">
            <p className="eyebrow">VISIT OUR OFFICE</p>
            <h2>Find us in Coimbatore</h2>
            <p>{officeAddress}</p>
          </div>
          <iframe
            className="contact-map-frame"
            src={mapEmbedUrl}
            title="Google Map showing Selva Tours and Travels at Rathinapuri, Coimbatore"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="button button-outline contact-directions-button" href={directionsUrl} target="_blank" rel="noreferrer">
            Get Directions <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </aside>
      </section>
    </div>
  )
}

export default Contact
