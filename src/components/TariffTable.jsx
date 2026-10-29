import { useState } from 'react'
import WhatsAppEnquiryButton from './WhatsAppEnquiryButton.jsx'

function displayValue(value, key) {
  if (value === null || value === undefined || value === '') {
    return 'Contact for Rates'
  }
  if (typeof value === 'number') {
    if (['includedHours', 'freeKms', 'freeKmPerDay', 'minimumKmPerDay'].includes(key)) {
      return key === 'includedHours' ? `${value} hours` : `${value} km`
    }
    const formatted = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
    if (key === 'ratePerKm' || key === 'extraKilometreCharge') return `${formatted}/km`
    if (key === 'extraHourCharge') return `${formatted}/hour`
    return formatted
  }
  return value
}

function enquiryDetailsFor(vehicle, columns) {
  return columns
    .filter(([key]) => !['baseFare', 'totalAmount'].includes(key))
    .map(([key, label]) => [label, displayValue(vehicle[key], key)])
}

function VehicleImageCell({ tariff, vehicle }) {
  return tariff.showVehicleImages === false
    ? null
    : <td><img className="tariff-vehicle-image" src={vehicle.image} alt={vehicle.imageAlt} loading="lazy" /></td>
}

function PackageTable({ tariff, packageGroup }) {
  return (
    <section className="tariff-package-group" aria-labelledby={`${packageGroup.id}-title`}>
      <div className="tariff-package-heading">
        <h3 id={`${packageGroup.id}-title`}>{packageGroup.name}</h3>
      </div>
      <div className="tariff-table-scroll" role="region" aria-label={`${packageGroup.name} vehicle tariff table`} tabIndex="0">
        <table className="tariff-data-table">
          <thead>
            <tr>
              {tariff.showVehicleImages !== false && <th scope="col">Vehicle Image</th>}
              <th scope="col">Vehicle</th>
              <th scope="col">Category / Seating</th>
              {tariff.columns.map(([, label]) => <th scope="col" key={label}>{label}</th>)}
              <th scope="col">Enquiry</th>
            </tr>
          </thead>
          <tbody>
            {packageGroup.vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <VehicleImageCell tariff={tariff} vehicle={vehicle} />
                <th scope="row">{vehicle.type}{vehicle.referenceNote && <small className="tariff-duplicate-note">{vehicle.referenceNote}</small>}</th>
                <td>{vehicle.category}</td>
                {tariff.columns.map(([key]) => <td key={key}>{displayValue(vehicle[key], key)}</td>)}
                <td>
                  <WhatsAppEnquiryButton
                    category={tariff.title}
                    vehicle={vehicle.type}
                    packageGroup={packageGroup.name}
                    packageAmount={vehicle.packageFare}
                    rateDetails={enquiryDetailsFor(vehicle, tariff.columns)}
                    enquiryType={tariff.enquiryType}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function TariffTable({ tariff }) {
  const [selectedPackageId, setSelectedPackageId] = useState(
    tariff.packages?.find(({ hours }) => hours === 10)?.id || tariff.packages?.[0]?.id || '',
  )
  const selectedPackage = tariff.packages?.find(({ id }) => id === selectedPackageId)

  return (
    <section className="tariff-data-section" aria-labelledby="tariff-table-title">
      <div className="tariff-content-heading">
        <p className="eyebrow">VEHICLE TARIFF OPTIONS</p>
        <h2 id="tariff-table-title">{tariff.tableHeading || 'Explore vehicle options'}</h2>
        <p>{tariff.tableIntro || 'Vehicle details and tariff figures are editable in the tariff data files. Unconfirmed prices are shown as “Contact for Rates”.'}</p>
      </div>
      {tariff.approvalNotice && <p className="tariff-approval-notice" role="note">{tariff.approvalNotice}</p>}
      {tariff.packages
        ? (
          <>
            <div className="tariff-package-tabs" role="group" aria-label="Local duty package duration">
              {tariff.packages.map((packageGroup) => (
                <button
                  aria-controls={`${packageGroup.id}-panel`}
                  aria-pressed={selectedPackageId === packageGroup.id}
                  className={`tariff-package-tab${selectedPackageId === packageGroup.id ? ' active' : ''}`}
                  id={`${packageGroup.id}-tab`}
                  key={packageGroup.id}
                  onClick={() => setSelectedPackageId(packageGroup.id)}
                  type="button"
                >
                  {packageGroup.hours} Hours
                </button>
              ))}
            </div>
            {selectedPackage && (
              <div aria-labelledby={`${selectedPackage.id}-tab`} id={`${selectedPackage.id}-panel`}>
                <p className="tariff-package-inclusions">Includes {selectedPackage.includedHours} hours and {selectedPackage.freeKms} kilometres per package.</p>
                <PackageTable tariff={tariff} packageGroup={selectedPackage} />
              </div>
            )}
          </>
        )
        : (
          <>
            <div className="tariff-table-scroll" role="region" aria-label={`${tariff.title} vehicle tariff table`} tabIndex="0">
              <table className="tariff-data-table">
                <thead>
                  <tr>
                    {tariff.showVehicleImages !== false && <th scope="col">Vehicle Image</th>}
                    <th scope="col">Vehicle</th>
                    <th scope="col">Category / Seating</th>
                    {tariff.columns.map(([, label]) => <th scope="col" key={label}>{label}</th>)}
                    <th scope="col">Enquiry</th>
                  </tr>
                </thead>
                <tbody>
                  {tariff.vehicles.map((vehicle) => (
                    <tr key={vehicle.id || vehicle.type}>
                      <VehicleImageCell tariff={tariff} vehicle={vehicle} />
                      <th scope="row">{vehicle.type}</th>
                      <td>{vehicle.category}</td>
                      {tariff.columns.map(([key]) => <td key={key}>{displayValue(vehicle[key], key)}</td>)}
                      <td>
                        <WhatsAppEnquiryButton
                          category={tariff.title}
                          vehicle={vehicle.type}
                          packageAmount={vehicle.packageAmount ?? vehicle.totalAmount ?? vehicle.baseFare}
                          rateDetails={enquiryDetailsFor(vehicle, tariff.columns)}
                          enquiryType={tariff.enquiryType}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
    </section>
  )
}

export default TariffTable
