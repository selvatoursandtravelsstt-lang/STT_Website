import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Packages from './pages/Packages.jsx'
import DurationPackagePage from './pages/DurationPackagePage.jsx'
import Tariff from './pages/Tariff.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import { business } from './config/business.js'
import { tourPackageDurations } from './data/tourPackages.js'
import './styles/navbar.css'
import './styles/home.css'
import './styles/about.css'
import './styles/packages.css'
import './styles/tariff.css'
import './styles/contact.css'
import './styles/brief.css'
import './styles/duration-packages.css'
import './styles/one-day-packages.css'
import './styles/gallery.css'

const pageMeta = {
  '/': ['Selva Tours and Travels | Taxi Services in Coimbatore', 'Explore local taxi services, airport transfers, outstation journeys, and tour options from Coimbatore with Selva Tours and Travels.'],
  '/about': ['About Us | Selva Tours and Travels Coimbatore', 'Learn about Selva Tours and Travels, a Coimbatore-based travel business helping visitors plan local, outstation, and tour enquiries.'],
  '/tour-packages': ['Tour Packages from Coimbatore | Selva Tours and Travels', 'Explore suggested destinations and enquire about tour options from Coimbatore. Itineraries and availability are confirmed directly.'],
  '/tariff/local-hours': ['Local Tariff — Hour Basis | Selva Tours and Travels', 'Review the 8-hour and 10-hour local taxi reference packages for Coimbatore. Rates and terms require Selva owner approval; contact us to confirm current prices.'],
  '/tariff/outstation-day': ['Outstation Duty — Day Basis | Selva Tours and Travels', 'Review the round-trip day-basis reference table for outstation taxi travel. Rates and terms require Selva owner approval; contact us to confirm a current quote.'],
  '/tariff/outstation-km': ['Outstation Duty — KM Basis | Selva Tours and Travels', 'Review the round-trip kilometre-basis reference table for outstation taxi travel. Rates and terms require Selva owner approval; contact us to confirm a current quote.'],
  '/tariff/corporate': ['Corporate Cab Bookings | Selva Tours and Travels', 'Discuss your organisation’s travel requirements, vehicle preferences, schedules, and quotation needs with Selva Tours and Travels.'],
  '/contact': ['Contact Selva Tours and Travels | Coimbatore', 'Contact Selva Tours and Travels to discuss local travel, outstation journeys, airport transfers, and tour enquiries from Coimbatore.'],
  '/gallery': ['Gallery | Selva Tours and Travels', 'Explore illustrative journeys, destinations, and travel experiences from Selva Tours and Travels in Coimbatore.'],
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const durationId = pathname.match(/^\/tour-packages\/([^/]+)$/)?.[1]
    const duration = tourPackageDurations.find(({ id }) => id === durationId)
    const [title, description] = duration
      ? [
        `${duration.pageTitle} from Coimbatore | Selva Tours and Travels`,
        `Review ${duration.label.toLowerCase()} tour routes, itineraries, and vehicle rates from Coimbatore. Confirm current prices and availability directly with Selva Tours and Travels.`,
      ]
      : pageMeta[pathname] || pageMeta['/']
    document.title = title
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    ogTitle?.setAttribute('content', title)
    ogDescription?.setAttribute('content', description)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      const configuredSite = business.websiteUrl.trim().replace(/\/+$/, '')
      ogUrl.setAttribute('content', `${configuredSite || window.location.origin}${pathname}`)
    }
    const configuredSite = business.websiteUrl.trim().replace(/\/+$/, '')
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (configuredSite) {
      if (!canonicalTag) {
        canonicalTag = document.createElement('link')
        canonicalTag.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalTag)
      }
      canonicalTag.setAttribute('href', `${configuredSite}${pathname}`)
    } else {
      canonicalTag?.remove()
    }
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <PageMeta />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tariff" element={<Navigate to="/tariff/local-hours" replace />} />
          <Route path="/tariff/*" element={<Tariff />} />
          <Route path="/tour-packages" element={<Packages />} />
          <Route path="/tour-packages/:duration" element={<DurationPackagePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Navigate to="/tour-packages" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
