import { TrendingUp, Shield, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <TrendingUp size={16} />
            <span>Live Status Updates</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Track <span className="gradient-text">Roblox Executors</span>
            <br />
            in Real-Time
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Stay updated with the latest status of all major Roblox executors. 
            Check if they're working, patched, or under maintenance.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">4+</div>
              <div className="stat-label">Executors Tracked</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Live Monitoring</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Free Access</div>
            </div>
          </div>

          {/* Features */}
          <div className="hero-features">
            <div className="feature-item">
              <Shield size={20} />
              <span>Safe & Verified</span>
            </div>
            <div className="feature-item">
              <Zap size={20} />
              <span>Instant Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="hero-bg">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>
    </section>
  )
}

export default Hero
