function TariffTerms({ tariff }) {
  return (
    <section className="tariff-terms" aria-labelledby="tariff-terms-title">
      <div className="tariff-content-heading">
        <p className="eyebrow">BEFORE CONFIRMING A TRIP</p>
        <h2 id="tariff-terms-title">Terms and Conditions</h2>
      </div>
      <ol className="tariff-terms-list">
        {tariff.terms.map(([label, description]) => <li key={label}><strong>{label}:</strong> {description}</li>)}
      </ol>
      {tariff.termsApprovalRequired && <p className="tariff-terms-note">{tariff.termsApprovalNote}</p>}
    </section>
  )
}

export default TariffTerms
