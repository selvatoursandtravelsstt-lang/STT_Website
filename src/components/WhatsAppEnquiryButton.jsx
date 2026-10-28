import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whatsappHref } from '../config/business.js'

function WhatsAppEnquiryButton({ category, vehicle, packageGroup, packageAmount, rateDetails = [] }) {
  const vehicleText = vehicle ? ` for ${vehicle}` : ''
  const formatAmount = (value) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
  const amountText = packageAmount === null || packageAmount === undefined
    ? 'Contact for Rates'
    : formatAmount(packageAmount)
  const rateText = rateDetails.map(([label, value]) => `${label}: ${value}`).join('. ')
  const message = packageGroup
    ? `Hello, I would like to enquire with Selva Tours and Travels about ${category}. Vehicle: ${vehicle}. Package group: ${packageGroup}. Displayed package amount: ${amountText}. ${rateText}. Please confirm availability and final charges.`
    : `Hello, I would like to enquire with Selva Tours and Travels about ${category}${vehicleText}. Displayed package amount: ${amountText}. ${rateText ? `${rateText}. ` : ''}Please confirm availability and final charges.`
  const href = whatsappHref(message)

  if (!href) {
    return (
      <Link className="button button-outline tariff-enquire-button" to="/contact" aria-label={`Contact the business to enquire about ${category}${vehicleText}; WhatsApp is not configured`}>
        <MessageCircle size={15} aria-hidden="true" /> Contact to Enquire
      </Link>
    )
  }

  return (
    <a className="button button-gold tariff-enquire-button" href={href} target="_blank" rel="noreferrer">
      <MessageCircle size={15} aria-hidden="true" /> Enquire on WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppEnquiryButton
