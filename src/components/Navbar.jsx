
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { tourPackageDurations } from '../data/tourPackages.js'

const links = [
  ['Home', '/'],
  ['About', '/about'],
]

const trailingLinks = [
  ['Gallery', '/gallery'],
  ['Contact Us', '/contact'],
]

const tariffLinks = [
  ['/tariff/local-hours', 'Local Tariff — Hour Basis'],
  ['/tariff/outstation-day', 'Outstation Tariff — Day Basis'],
  ['/tariff/outstation-km', 'Outstation Tariff — KM Basis'],
  ['/tariff/corporate', 'Corporate Cab Bookings'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <NavLink
          to="/"
          className="brand"
          aria-label="Selva Tours and Travels home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <img
              src="/stt-logo.png"
              alt=""
              className="brand-logo"
            />
          </span>

          <span className="brand-copy">
            <strong className="brand-title">SELVA</strong>

            
<span className="brand-subtitle">
  <span className="brand-tagline">TOURS</span>
  <span className="brand-ampersand">&</span>
  <span className="brand-tagline">TRAVELS</span>
</span>

            </span>
          
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          <div className="nav-links">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}

            <div className="nav-dropdown">
              <NavLink
                to="/tariff/local-hours"
                className={`nav-link${
                  pathname.startsWith('/tariff') ? ' active' : ''
                }`}
                onClick={closeMenu}
                aria-haspopup="true"
              >
                Tariff
                <ChevronDown size={14} aria-hidden="true" />
              </NavLink>

              <div className="nav-dropdown-menu">
                {tariffLinks.map(([to, label]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `nav-dropdown-link${isActive ? ' active' : ''}`
                    }
                    onClick={closeMenu}
                    end
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav-dropdown tour-package-dropdown">
              <NavLink
                to="/tour-packages"
                end
                className={`nav-link${
                  pathname.startsWith('/tour-packages') ? ' active' : ''
                }`}
                onClick={closeMenu}
                aria-haspopup="true"
              >
                Tour Packages
                <ChevronDown size={14} aria-hidden="true" />
              </NavLink>

              <div className="nav-dropdown-menu">
                <NavLink
                  to="/tour-packages"
                  end
                  className="nav-dropdown-link"
                  onClick={closeMenu}
                >
                  All Tour Packages
                </NavLink>

                {tourPackageDurations.map(({ id, label }) => (
                  <NavLink
                    key={id}
                    to={`/tour-packages/${id}`}
                    className="nav-dropdown-link"
                    onClick={closeMenu}
                  >
                    {label} Tour Packages
                  </NavLink>
                ))}
              </div>
            </div>

            {trailingLinks.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <NavLink
            className="nav-cta"
            to="/contact"
            onClick={closeMenu}
          >
            Enquire now <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
