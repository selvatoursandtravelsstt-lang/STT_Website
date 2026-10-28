import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { tourPackageDurations } from '../data/tourPackages.js'

const categories = [
  ['/tariff/local-hours', 'Local Tariff — Hours Basis'],
  ['/tariff/outstation-day', 'Outstation Tariff — Day Basis'],
  ['/tariff/outstation-km', 'Outstation Tariff — KM Basis'],
  ['/tariff/corporate', 'Corporate Cab Bookings'],
]

function TariffSidebar() {
  return (
    <aside className="tariff-sidebar">
      <h2 id="tariff-category-title">OUR TARIFFS</h2>
      <nav aria-labelledby="tariff-category-title">
        {categories.map(([to, label]) => (
          <NavLink
            className={({ isActive }) => `tariff-sidebar-link${isActive ? ' active' : ''}`}
            key={to}
            to={to}
            end
          >
            <span>{label}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </NavLink>
        ))}
      </nav>
      <h2 className="tariff-sidebar-subheading" id="tariff-package-title">TOUR PACKAGES</h2>
      <nav aria-labelledby="tariff-package-title">
        {tourPackageDurations.map(({ id, label }) => (
          <NavLink
            className={({ isActive }) => `tariff-sidebar-link tariff-package-link${isActive ? ' active' : ''}`}
            key={id}
            to={`/tour-packages/${id}`}
            end
          >
            <span>{label} Tour Packages</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </NavLink>
        ))}
      </nav>
      <p>Rates and availability are confirmed directly for each enquiry.</p>
    </aside>
  )
}

export default TariffSidebar
