import { Mail, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { business, emailHref, isConfigured, phoneHref } from '../config/business.js'
import { corporateTariff } from '../data/corporateTariff.js'
import { localTariff } from '../data/localTariff.js'
import { outstationDayTariff } from '../data/outstationDayTariff.js'
import { outstationKmTariff } from '../data/outstationKmTariff.js'
import TariffHero from '../components/TariffHero.jsx'
import TariffSidebar from '../components/TariffSidebar.jsx'
import TariffTable from '../components/TariffTable.jsx'
import TariffTerms from '../components/TariffTerms.jsx'

const tariffPages = [localTariff, outstationDayTariff, outstationKmTariff, corporateTariff]

function CorporateContent() {
  const telephoneLink = phoneHref()
  const businessEmailLink = emailHref()

  return (
    <section className="corporate-contact-block" aria-labelledby="corporate-contact-title">
      <div className="tariff-content-heading">
        <p className="eyebrow">CORPORATE ENQUIRIES</p>
        <h2 id="corporate-contact-title">Please Contact Us</h2>
      </div>
      <div className="corporate-contact-details">
        <p><strong>Call:</strong> {isConfigured(business.phone) ? business.phone : '+91 9894376366'}</p>
        <p><strong>Email:</strong> {isConfigured(business.email) ? business.email : 'selvatoursandtravels.stt@gmail.com'}</p>
      </div>
      
    
      <p className="corporate-contact-followup">You can also <Link to="/contact">visit the contact page</Link> to send a general travel enquiry.</p>
    </section>
  )
}

function Tariff() {
  const { pathname } = useLocation()
  const page = tariffPages.find((item) => item.path === pathname) || localTariff
  const isCorporate = page.path === corporateTariff.path

  return (
    <div className="inner-page tariff-page">
      <TariffHero title={page.title} breadcrumb={page.breadcrumb} />
      <section className="tariff-page-content">
        <div className="page-width tariff-layout">
          <TariffSidebar />
          <main className="tariff-main-content">
            <p className="tariff-introduction">{page.introduction}</p>
            {isCorporate ? <CorporateContent /> : <TariffTable tariff={page} />}
            {!isCorporate && <TariffTerms />}
          </main>
        </div>
      </section>
    </div>
  )
}

export default Tariff
