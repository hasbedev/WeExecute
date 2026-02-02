import { Heart, Github, Twitter, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <img src="/src/icons/WeExecutor.png" alt="WeExecutor Logo" className="logo-image" />
              </div>
              <span className="logo-text">We<span className="logo-highlight">Executor</span></span>
            </div>
            <p className="footer-description">
              Track the status of Roblox executors in real-time. 
              Stay informed about updates, patches, and availability.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#executors">All Executors</a>
              <a href="#status">Status Page</a>
              <a href="#updates">Updates</a>
            </div>
            <div className="footer-column">
              <h4>Community</h4>
              <a href="#discordserver">Discord Server</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#discord">Discord</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} ExecutorTracker. Made with <Heart size={14} className="heart-icon" /> for the community</p>
            <p className="footer-disclaimer">Not affiliated with Roblox Corporation</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/hasbedev" className="social-icon" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="#discord" className="social-icon" aria-label="Discord">
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
