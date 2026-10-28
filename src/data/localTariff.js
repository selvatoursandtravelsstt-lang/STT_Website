const unknownVehicle = {
  id: 'vehicle-to-be-confirmed',
  type: 'Vehicle details to be confirmed',
  image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=320&q=80',
  imageAlt: 'Vehicle option to be confirmed with Selva Tours and Travels',
  hours: null,
  freeKms: null,
  extraHourCharge: null,
  extraKilometreCharge: null,
  totalAmount: null,
}

export const localTariff = {
  path: '/tariff/local-hours',
  title: 'Local Tariff — Hours Basis',
  breadcrumb: 'Local Tariff',
  pageTitle: 'Local Taxi Tariff in Coimbatore | Selva Tours and Travels',
  metaDescription: 'Review local 10-hour and 8-hour tariff groups from Selva Tours and Travels. Confirm vehicle options and rates directly.',
  introduction: 'Explore local taxi tariff options for travel within Coimbatore. Contact Selva Tours and Travels to discuss vehicle availability, package duration, included kilometres, and applicable charges.',
  tableHeading: 'Local Tariff — Hours Basis',
  tableIntro: 'Select a package group to discuss vehicle options, free kilometres, and applicable rates.',
  approvalNotice: 'The reference page lists 10-hour and 8-hour package groups, but its vehicle rows and tariff figures were not accessible. No vehicle rates, free kilometres, or package amounts are assumed here.',
  columns: [
    ['hours', 'Hours'],
    ['freeKms', 'Free KMs'],
    ['extraHourCharge', 'Rate / Hours (Extra Hours)'],
    ['extraKilometreCharge', 'Rate / KM (After Free KMs)'],
    ['totalAmount', 'Total Amount'],
  ],
  packages: [
    {
      id: 'coimbatore-city-local-10-hours',
      name: 'Coimbatore City Local — 10 Hours',
      packageGroup: '10 Hours',
      hours: 10,
      vehicles: [{ ...unknownVehicle, id: 'vehicle-10-hour', hours: 10 }],
    },
    {
      id: 'coimbatore-city-local-8-hours',
      name: 'Coimbatore City Local — 8 Hours',
      packageGroup: '8 Hours',
      hours: 8,
      vehicles: [{ ...unknownVehicle, id: 'vehicle-8-hour', hours: 8 }],
    },
  ],
  termsApprovalRequired: true,
  termsApprovalNote: 'The following are draft conditions adapted from the reference tariff page. They are not confirmed Selva Tours and Travels policies and require business approval before publication.',
  terms: [
    ['Parking and toll charges', 'Parking and toll charges are additional.'],
    ['Distance and travel time', 'Total distance and travel time are calculated from office to office.'],
    ['Night driver allowance', 'A driver allowance may be additional when the driver operates between 10:00 PM and 6:00 AM.'],
  ],
}
