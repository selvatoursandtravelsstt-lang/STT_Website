export const business = {
  name: 'Selva Tours and Travels',
  shortName: 'Selva',
  logoPath: '',
  websiteUrl: '',
  location: 'Coimbatore, Tamil Nadu',
  phone: '',
  // Add a verified WhatsApp number with country code before launch.
  whatsapp: '',
  email: '',
  address: '',
  mapsUrl: '',
  operatingHours: '',
  corporateCabBookings: false,
  socialLinks: {},
}

export const isConfigured = (value) => Boolean(value && value.trim())

export const phoneHref = () => (isConfigured(business.phone) ? `tel:${business.phone.replace(/[^\d+]/g, '')}` : '')
export const emailHref = () => (isConfigured(business.email) ? `mailto:${business.email}` : '')
export const whatsappHref = (message = 'Hello, I would like to enquire about a tour.') => {
  if (!isConfigured(business.whatsapp)) return ''
  const number = business.whatsapp.replace(/\D/g, '')
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : ''
}
