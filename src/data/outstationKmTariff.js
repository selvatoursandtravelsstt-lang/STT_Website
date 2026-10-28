const vehicleImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=320&q=80'

const vehicle = (id, type, minimumKmPerDay, ratePerKm, driverPerDay, totalAmount) => ({
  id,
  type,
  image: vehicleImage,
  imageAlt: `Illustrative vehicle image for ${type}; exact model may differ`,
  minimumKmPerDay,
  ratePerKm,
  driverPerDay,
  totalAmount,
})

export const outstationKmTariff = {
  path: '/tariff/outstation-km',
  title: 'Outstation Round Trip — KM Basis',
  breadcrumb: 'Outstation Tariff — KM Basis',
  pageTitle: 'Outstation Taxi Tariff — KM Basis | Selva Tours and Travels',
  metaDescription: 'Review kilometre-basis outstation tariff values and request confirmation from Selva Tours and Travels.',
  tableHeading: 'OUTSTATION ROUND TRIP — KM BASIS',
  tableIntro: 'Review the kilometre-basis reference values below. Confirm availability, final charges, and trip details with Selva Tours and Travels.',
  showVehicleImages: false,
  introduction: 'Explore kilometre-based tariff options for longer journeys from Coimbatore. Share your route, travel dates, trip duration, and vehicle preference to request confirmation from Selva Tours and Travels.',
  approvalNotice: 'These reference values are provided for review and are not confirmed Selva Tours and Travels rates. Totals are displayed exactly as supplied and have not been recalculated. Please obtain business approval before publishing.',
  columns: [
    ['minimumKmPerDay', 'Minimum Charging KMs / Day'],
    ['ratePerKm', 'Rate / KM'],
    ['driverPerDay', 'Driver / Day'],
    ['totalAmount', 'Total Amount'],
  ],
  vehicles: [
    vehicle('etios-km', 'Toyota Etios AC (Sedan)', 300, 14, 400, 4600),
    vehicle('swift-km', 'Swift Dzire AC (Sedan)', 300, 14, 400, 4600),
    vehicle('innova-km', 'Innova AC (SUV)', 350, 20, 400, 7400),
    vehicle('crysta-km', 'Innova Crysta', 400, 23, 400, 9600),
    vehicle('traveller-km', 'Traveller AC (Mini Van)', 400, 28, 500, 11700),
  ],
  termsApprovalRequired: true,
  termsApprovalNote: 'These draft notes are adapted from the reference company’s policies. They are not Selva Tours and Travels terms and require approval before publication.',
  terms: [
    ['Tolls and permits', 'Parking, tolls, and interstate permit charges are additional.'],
    ['Calendar day', 'One day is defined as one calendar day, from midnight to midnight.'],
    ['Night driver allowance', 'An additional driver allowance may apply when driving takes place between 10:00 PM and 6:00 AM.'],
    ['Distance and time', 'Distance and time are calculated from office to office.'],
    ['Air-conditioning', 'Air-conditioning may not be available in uphill hill areas or while the vehicle is stopped or parked.'],
    ['Night halt and hill-station charges', 'Night-halt and hill-station charges may apply to hill-station trips.'],
  ],
}
