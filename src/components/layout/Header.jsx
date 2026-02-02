import { Menu, Github, Twitter } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <img src="/icons/WeExecutor.png" alt="WeExecutor Logo" className="logo-image" />
            </div>
            <span className="logo-text">We<span className="logo-highlight">Executor</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#executors" className="nav-link">Executors</a>
            <a href="#about" className="nav-link">About</a>
          </nav>

          {/* Social Links */}
          <div className="header-actions">
            <a href="https://github.com/hasbedev" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            <a href="#home" className="nav-link-mobile">Home</a>
            <a href="#executors" className="nav-link-mobile">Executors</a>
            <a href="#about" className="nav-link-mobile">About</a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
