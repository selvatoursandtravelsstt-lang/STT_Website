function TariffTerms() {
  return (
    <section className="tariff-terms" aria-labelledby="tariff-terms-title">
      <div className="tariff-content-heading">
        <p className="eyebrow">BEFORE CONFIRMING A TRIP</p>
        <h2 id="tariff-terms-title">Terms and Conditions</h2>
      </div>
      <p className="tariff-terms-note"><strong>Note:</strong></p>
      <ol className="tariff-terms-list">
        <li>Excluding Parking and Toll Charges, which will be charged as per actuals.</li>
        <li>Total Km and Time will be calculated from office to office.</li>
      </ol>
    </section>
  )
}

export default TariffTerms
