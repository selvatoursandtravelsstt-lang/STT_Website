const localVehicle = (id, type, category, packageFare, extraHourCharge, extraKilometreCharge, referenceNote = '') => ({
  id,
  type,
  category,
  packageFare,
  extraHourCharge,
  extraKilometreCharge,
  referenceNote,
})

const localPackage = (hours, vehicles) => ({
  id: `local-${hours}-hours`,
  hours,
  includedHours: hours,
  freeKms: 80,
  name: `${hours}-Hour Package`,
  vehicles: vehicles.map((vehicle) => ({ ...vehicle, includedHours: hours, freeKms: 80 })),
})

const localSedans = (fare) => [
  localVehicle('logan', 'LOGAN / VERITO A/c', 'Sedan', fare, 250, 13),
  localVehicle('swift-dzire', 'SWIFT DZIRE A/C', 'Sedan', fare, 250, 13),
  localVehicle('etios', 'TOYOTA Etios A/C', 'Sedan', fare, 250, 13),
]

const localSuvs = (fare, xyloAndInnovaExtraHour) => [
  localVehicle('tavera', 'TAVERA A/C', 'SUV', fare, 250, 15),
  localVehicle('xylo', 'MAHINDRA XYLO A/C', 'SUV', fare, xyloAndInnovaExtraHour, 15),
  localVehicle('innova', 'INNOVA A/C', 'SUV', fare, xyloAndInnovaExtraHour, 15),
]

const localTraveller = (id, type, fare, extraKilometreCharge) => (
  localVehicle(id, type, 'Mini van · 14-seater', fare, 500, extraKilometreCharge)
)

const localTariff = {
  path: '/tariff/local-hours',
  title: 'Local Tariff — Hour Basis',
  breadcrumb: 'Local Tariff — Hour Basis',
  showVehicleImages: false,
  introduction: 'Choose a local taxi package for travel within Coimbatore. The reference lists 8-hour and 10-hour packages, each with 80 included kilometres. Contact Selva Tours and Travels to confirm current availability and pricing.',
  tableHeading: 'Coimbatore Local Tariff',
  tableIntro: 'Reference fares are shown for owner review only. They are not approved Selva Tours and Travels prices.',
  enquiryType: 'Local Taxi',
  approvalNotice: 'Pending Selva business-owner approval: the figures below are copied from the linked reference tariff page and must not be treated as approved Selva rates. Contact Selva for current pricing. The reference lists 8-hour and 10-hour packages only; it does not list a 4-hour package.',
  columns: [
    ['includedHours', 'Included Hours'],
    ['freeKms', 'Free Kilometres'],
    ['packageFare', 'Package Fare'],
    ['extraHourCharge', 'Extra-Hour Fare'],
    ['extraKilometreCharge', 'Extra-Kilometre Fare'],
  ],
  packages: [
    localPackage(8, [
      ...localSedans(2450),
      ...localSuvs(3500, 300),
      localTraveller('traveller-8-non-ac', 'Traveller Non A/C', 4500, 18),
      localVehicle(
        'traveller-8-duplicate-label',
        'Traveller Non A/C',
        'Mini van · 14-seater',
        4800,
        500,
        19,
        'Reference ambiguity: the source repeats “Traveller Non A/C” for two rows; confirm the vehicle type for this ₹4,800 fare.',
      ),
    ]),
    localPackage(10, [
      ...localSedans(2650),
      ...localSuvs(3600, 300),
      localTraveller('traveller-10-non-ac', 'Traveller Non A/C', 5000, 18),
      localTraveller('traveller-10-ac', 'Traveller A/C', 5200, 19),
    ]),
  ],
  termsApprovalRequired: true,
  termsApprovalNote: 'These conditions are transcribed from the third-party reference and require Selva approval before publication as business terms.',
  terms: [
    ['Parking and toll charges', 'Parking and toll charges are excluded from the reference fares.'],
    ['Office-to-office calculation', 'Kilometres and time are calculated office to office.'],
    ['Night driver allowance', 'An additional driver allowance applies if the driver drives after 10:00 PM and before 6:00 AM.'],
  ],
}

const dayVehicles = [
  ['indigo-zest', 'INDIGO / ZEST A/c', 'Sedan', 2450, 100, 11, 400, 2850],
  ['logan-verito', 'LOGAN / VERITO A/c', 'Sedan', 2450, 100, 11, 400, 2850],
  ['swift-dzire', 'SWIFT DZIRE A/c', 'Sedan', 2450, 100, 11, 400, 2850],
  ['toyota-etios', 'TOYOTA ETIOS A/c', 'Sedan', 2450, 100, 11, 400, 2850],
  ['tavera', 'TAVERA A/c', 'SUV', 3500, 100, 15, 400, 3900],
  ['mahindra-xylo', 'MAHINDRA XYLO A/c', 'SUV', 3500, 100, 15, 400, 3900],
  ['innova', 'INNOVA A/c', 'SUV', 3500, 100, 15, 400, 3900],
  ['innova-crysta', 'INNOVA CRYSTA A/c', 'SUV', 4800, 100, 16, 400, 5200],
  ['traveller-14', 'TRAVELLER A/c', 'Mini Van · 14-seater', 5000, 100, 19, 500, 5500],
  ['coach-25', 'COACH', 'Mini Van · 25-seater', 5500, 100, 20, 500, 6000],
].map(([id, type, category, rentPerDay, freeKmPerDay, ratePerKm, driverPerDay, packageAmount]) => ({
  id,
  type,
  category,
  rentPerDay,
  freeKmPerDay,
  ratePerKm,
  driverPerDay,
  packageAmount,
}))

const outstationDayTariff = {
  path: '/tariff/outstation-day',
  title: 'Outstation Duty — Day Basis',
  breadcrumb: 'Outstation Tariff — Day Basis',
  showVehicleImages: false,
  introduction: 'Review the round-trip day-basis reference fares for outstation travel from Coimbatore. The listed daily amount is shown exactly as published by the reference; confirm trip details, availability, and Selva’s current quote before travel.',
  tableHeading: 'Outstation Round Trip — Day Basis',
  tableIntro: 'Rent, daily free kilometres, extra-kilometre rate, driver allowance, and the reference package amount are listed separately.',
  enquiryType: 'Outstation Taxi',
  approvalNotice: 'Pending Selva business-owner approval: these third-party reference values are not approved Selva Tours and Travels prices. The reference tariff page does not state how a calendar day is defined; confirm this with Selva before quoting.',
  columns: [
    ['rentPerDay', 'Rent per Day'],
    ['freeKmPerDay', 'Free Kilometres per Day'],
    ['ratePerKm', 'Extra-Kilometre Rate'],
    ['driverPerDay', 'Driver Allowance per Day'],
    ['packageAmount', 'Reference Package Amount'],
  ],
  vehicles: dayVehicles,
  termsApprovalRequired: true,
  termsApprovalNote: 'These conditions are transcribed from the third-party reference and require Selva approval before publication as business terms.',
  terms: [
    ['Parking and toll charges', 'Parking and toll charges are excluded from the reference fares.'],
    ['Calendar-day calculation', 'The reference tariff page does not specify a calendar-day definition. Confirm the calculation with Selva before quoting.'],
    ['Night driver allowance', 'An additional driver allowance applies if the driver drives after 10:00 PM and before 6:00 AM.'],
    ['Office-to-office calculation', 'Kilometres and time are calculated office to office.'],
    ['Air-conditioning', 'The reference states that air-conditioning will not work in uphill hill areas or while the vehicle is stopped or parked.'],
    ['Daily kilometre threshold', 'If average usage exceeds 300 km per day, the reference states that the tariff shifts to the KM-basis tariff.'],
    ['Hill-station trips', 'Night-halt and hill-station charges apply to hill-station trips according to the reference.'],
  ],
}

const kmVehicles = [
  ['indigo-zest', 'INDIGO / ZEST A/c', 'Sedan', 300, 13, 400, 4600],
  ['logan-verito', 'LOGAN / VERITO A/c', 'Sedan', 300, 13, 400, 4600],
  ['swift-dzire', 'SWIFT DZIRE A/c', 'Sedan', 300, 13, 400, 4600],
  ['toyota-etios', 'TOYOTA ETIOS A/c', 'Sedan', 300, 13, 400, 4600],
  ['tavera', 'TAVERA A/c', 'SUV', 350, 18, 400, 6850],
  ['mahindra-xylo', 'MAHINDRA XYLO A/c', 'SUV', 350, 18, 400, 6850],
  ['innova', 'INNOVA A/c', 'SUV', 350, 18, 300, 6850],
  ['innova-crysta', 'INNOVA CRYSTA A/c', 'SUV', 400, 21, 400, 9040],
  ['traveller-14', 'TRAVELLER A/c', 'Mini Van · 14-seater', 400, 25, 500, 10850],
  ['coach-20', '20 SEATER A/c COACH', 'Mini Van · 20-seater', 400, 37, 500, 15850],
].map(([id, type, category, minimumKmPerDay, ratePerKm, driverPerDay, packageAmount]) => ({
  id,
  type,
  category,
  minimumKmPerDay,
  ratePerKm,
  driverPerDay,
  packageAmount,
}))

const outstationKmTariff = {
  path: '/tariff/outstation-km',
  title: 'Outstation Duty — KM Basis',
  breadcrumb: 'Outstation Tariff — KM Basis',
  showVehicleImages: false,
  introduction: 'Review the round-trip kilometre-basis reference fares for outstation travel from Coimbatore. The daily minimum, per-kilometre rate, driver allowance, and reference package amount are shown separately; confirm your route and current Selva quote before travel.',
  tableHeading: 'Outstation Round Trip — KM Basis',
  tableIntro: 'Reference package amounts are reproduced as published and have not been recalculated.',
  enquiryType: 'Outstation Taxi',
  approvalNotice: 'Pending Selva business-owner approval: these third-party reference values are not approved Selva Tours and Travels prices. The reference tariff page does not state how a calendar day is defined; confirm this with Selva before quoting.',
  columns: [
    ['minimumKmPerDay', 'Minimum Kilometres per Day'],
    ['ratePerKm', 'Rate per Kilometre'],
    ['driverPerDay', 'Driver Allowance per Day'],
    ['packageAmount', 'Reference Package Amount'],
  ],
  vehicles: kmVehicles,
  termsApprovalRequired: true,
  termsApprovalNote: 'These conditions are transcribed from the third-party reference and require Selva approval before publication as business terms.',
  terms: [
    ['Parking, tolls, and interstate permits', 'Parking, toll, and interstate permit charges are extra.'],
    ['Calendar-day calculation', 'The reference tariff page does not specify a calendar-day definition. Confirm the calculation with Selva before quoting.'],
    ['Night driver allowance', 'An additional driver allowance applies if the driver drives between 10:00 PM and 6:00 AM.'],
    ['Office-to-office calculation', 'Kilometres and time are calculated office to office.'],
    ['Air-conditioning', 'The reference states that air-conditioning will not work in uphill hill areas or while the vehicle is stopped or parked.'],
    ['Hill-station trips', 'Night-halt and hill-station charges apply to hill-station trips according to the reference.'],
  ],
}

const corporateTariff = {
  path: '/tariff/corporate',
  title: 'Corporate Cab Bookings',
  breadcrumb: 'Corporate Cab Bookings',
  introduction: 'Discuss your organisation’s cab requirements with Selva Tours and Travels. Share the type of travel, passenger numbers, locations, and preferred schedule to request a customized quotation.',
}

export const tariffPages = [localTariff, outstationDayTariff, outstationKmTariff, corporateTariff]

export const tariffReferenceApproval = {
  status: 'Pending Selva business-owner approval',
  source: 'https://coimbatoretaximk.com',
  note: 'Reference rates and third-party terms in this file are review data only. Do not present them as approved Selva Tours and Travels pricing or policy until confirmed by the business owner.',
}
