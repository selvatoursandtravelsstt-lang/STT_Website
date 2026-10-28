import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whatsappHref } from '../config/business.js'

function WhatsAppButton() {
  const href = whatsappHref('Hello, I would like to enquire about a trip.')
  const content = <><MessageCircle size={20} aria-hidden="true" /><span>{href ? 'WhatsApp enquiry' : 'Contact Selva'}</span></>

  return href
    ? <a className="whatsapp-float" href={href} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp enquiry">{content}</a>
    : <Link className="whatsapp-float" to="/contact" aria-label="Contact Selva Tours and Travels">{content}</Link>
}

export default WhatsAppButton
