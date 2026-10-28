const vehicleImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=320&q=80'

const vehicle = (id, type, rentPerDay, freeKmPerDay, ratePerKm, driverPerDay, totalAmount) => ({
  id,
  type,
  image: vehicleImage,
  imageAlt: `Illustrative vehicle image for ${type}; exact model may differ`,
  rentPerDay,
  freeKmPerDay,
  ratePerKm,
  driverPerDay,
  totalAmount,
})

export const outstationDayTariff = {
  path: '/tariff/outstation-day',
  title: 'Outstation Round Trip — Day Basis',
  breadcrumb: 'Outstation Tariff — Day Basis',
  pageTitle: 'Outstation Taxi Tariff — Day Basis | Selva Tours and Travels',
  metaDescription: 'Review day-basis outstation tariff values and discuss availability and final charges with Selva Tours and Travels.',
  tableHeading: 'OUTSTATION ROUND TRIP — DAY BASIS',
  tableIntro: 'Review the day-basis reference values below. Confirm availability, final charges, and trip details with Selva Tours and Travels.',
  showVehicleImages: false,
  introduction: 'Planning an outstation trip from Coimbatore? Review the supplied day-basis tariff values and contact Selva Tours and Travels to confirm your destination, trip duration, vehicle preference, and applicable charges.',
  approvalNotice: 'These reference values are provided for review and are not confirmed Selva Tours and Travels rates. Please obtain business approval before publishing.',
  columns: [
    ['rentPerDay', 'Rent / Day'],
    ['freeKmPerDay', 'Free KMs / Day'],
    ['ratePerKm', 'Rate / KM'],
    ['driverPerDay', 'Driver / Day'],
    ['totalAmount', 'Total Amount'],
  ],
  vehicles: [
    vehicle('etios-day', 'Toyota Etios AC (Sedan)', 2700, 100, 12, 400, 3100),
    vehicle('swift-day', 'Swift Dzire AC (Sedan)', 2700, 100, 12, 400, 3100),
    vehicle('crysta-day', 'Innova Crysta', 4800, 100, 17, 400, 5200),
    vehicle('traveller-day', 'Traveller AC (Mini Van)', 5150, 100, 19, 500, 5650),
  ],
  termsApprovalRequired: true,
  termsApprovalNote: 'These draft notes are adapted from the reference company’s policies. They are not Selva Tours and Travels terms and require approval before publication.',
  terms: [
    ['Calendar day', 'One day is defined as one calendar day, from midnight to midnight.'],
    ['Tolls and permits', 'Parking, tolls, and interstate permit charges are additional.'],
    ['Night driver allowance', 'An additional driver allowance may apply when driving takes place between 10:00 PM and 6:00 AM.'],
    ['Distance and time', 'Distance and time are calculated from office to office.'],
    ['Air-conditioning', 'Air-conditioning may not be available in uphill hill areas or while the vehicle is stopped or parked.'],
    ['Daily distance threshold', 'If average usage exceeds 300 km per day, the trip may be charged under the KM-basis tariff.'],
  ],
}
