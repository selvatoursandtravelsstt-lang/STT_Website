const establishedYear = 2024
const yearsSinceEstablishment = Math.max(0, new Date().getFullYear() - establishedYear)
const travellersServed = 500
const safeAndHygienicVehicles = 10
const yearsOfExperience = yearsSinceEstablishment
const customerSatisfaction = 100 
const customizatbleItineries = 50
export const aboutStatistics = [ 
  
  { id: 'travellers-served', value: travellersServed, suffix: '+', label: 'Happy Tourists', verified: true },
  { id: 'safe & hygienic vehicles ', value: safeAndHygienicVehicles, suffix: '+', label: 'Safe & Hygienic Vehicles', verified: true },
  { id: 'customer-satisfaction', value: customerSatisfaction, suffix: '%', label: 'Customer Satisfaction', verified: true },
  { id: 'customizable-itineraries', value: customizatbleItineries, suffix: '+', label: 'Customizable Itineraries', verified: true },
].filter((statistic) => statistic.verified && typeof statistic.value === 'number')
