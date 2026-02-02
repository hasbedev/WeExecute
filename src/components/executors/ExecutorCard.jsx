import { Download, Monitor, Smartphone, Apple, Key, Clock } from 'lucide-react'

const ExecutorCard = ({ executor }) => {
  const { 
    name, 
    icon, 
    status, 
    platform, 
    keySystem, 
    version, 
    robloxVersion, // ← ADD THIS
    sunc, // ← ADD THIS
    unc, // ← ADD THIS
    lastUpdate, 
    description, 
    downloadUrl, 
    discordUrl 
  } = executor

  const getPlatformIcon = () => {
    switch(platform) {
      case 'windows': return <Monitor size={16} />
      case 'android': return <Smartphone size={16} />
      case 'ios': return <Apple size={16} />
      default: return <Monitor size={16} />
    }
  }

  const getStatusColor = () => {
    return status === 'working' ? 'status-working' : 'status-patched'
  }

  const renderIcon = () => {
    if (icon.includes('.png') || icon.includes('.jpg') || icon.includes('.svg') || icon.includes('.webp')) {
      return (
        <img 
          src={icon} 
          alt={`${name} logo`}
          className="executor-logo"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
      )
    }
    return <span className="executor-emoji">{icon}</span>
  }

  return (
    <div className="executor-card">
      {/* Status Badge */}
      <div className={`status-badge ${getStatusColor()}`}>
        <span className="status-dot"></span>
        <span>{status === 'working' ? 'Working' : 'Patched'}</span>
      </div>

      {/* Header */}
      <div className="card-header">
        <div className="card-icon">
          {renderIcon()}
          <span className="executor-emoji" style={{ display: 'none' }}>
            {icon.includes('.') ? '🎮' : ''}
          </span>
        </div>
        <div className="card-title-section">
          <h3 className="card-title">{name}</h3>
          <div className="card-meta">
            <span className="meta-item">
              {getPlatformIcon()}
              {platform}
            </span>
            {keySystem && (
              <span className="meta-item key-badge">
                <Key size={12} />
                Key
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="card-description">{description}</p>

      {/* Info Grid - UPDATED */}
      <div className="card-info-grid-3">
        <div className="info-item">
          <span className="info-label">Version</span>
          <span className="info-value">{version}</span>
        </div>
        <div className="info-item">
          <span className="info-label">
            <Clock size={12} />
            Updated
          </span>
          <span className="info-value">{lastUpdate}</span>
        </div>
        <div className="info-item info-item-full">
          <span className="info-label">Roblox Version</span>
          <span className="info-value info-value-small">{robloxVersion}</span>
        </div>
      </div>

      {/* SUNC & UNC - NEW SECTION */}
      <div className="compatibility-grid">
        <div className="compat-item">
          <span className="compat-label">SUNC</span>
          <span className="compat-value">{sunc}%</span>
        </div>
        <div className="compat-item">
          <span className="compat-label">UNC</span>
          <span className="compat-value">{unc}%</span>
        </div>
      </div>

      {/* Actions */}
      <div className="card-actions">
        <a 
          href={downloadUrl} 
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={16} />
          <span>Download</span>
        </a>
        <a 
          href={discordUrl} 
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          title="Join Discord Server"
        >
          <i className="fa-brands fa-discord"></i>
        </a>
      </div>
    </div>
  )
}

export default ExecutorCard