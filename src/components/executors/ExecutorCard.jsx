import { Download, Monitor, Smartphone, Apple, Key, Clock } from 'lucide-react'
import { useState } from 'react'

const ExecutorCard = ({ executor }) => {
  // Check if multi-platform
  const isMultiPlatform = executor.platforms && executor.platforms.length > 1
  const [selectedPlatform, setSelectedPlatform] = useState(
    isMultiPlatform ? executor.platforms[0] : executor.platform
  )

  // Get platform-specific data
  const getPlatformData = () => {
    if (isMultiPlatform && executor.platformData) {
      return executor.platformData[selectedPlatform]
    }
    // Fallback to regular executor data
    return {
      version: executor.version,
      downloadUrl: executor.downloadUrl,
      sunc: executor.sunc,
      unc: executor.unc,
      lastUpdate: executor.lastUpdate,
      robloxVersion: executor.robloxVersion
    }
  }

  const currentData = getPlatformData()

  const getPlatformIcon = (platform) => {
    switch(platform || executor.platform) {
      case 'windows': return <Monitor size={16} />
      case 'android': return <Smartphone size={16} />
      case 'ios': return <Apple size={16} />
      default: return <Monitor size={16} />
    }
  }

  const getStatusColor = () => {
    return executor.status === 'working' ? 'status-working' : 'status-patched'
  }

  const renderIcon = () => {
    if (executor.icon.includes('.png') || executor.icon.includes('.jpg') || executor.icon.includes('.svg') || executor.icon.includes('.webp')) {
      return (
        <img 
          src={executor.icon} 
          alt={`${executor.name} logo`}
          className="executor-logo"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
      )
    }
    return <span className="executor-emoji">{executor.icon}</span>
  }

  return (
    <div className="executor-card">
      {/* Status Badge */}
      <div className={`status-badge ${getStatusColor()}`}>
        <span className="status-dot"></span>
        <span>{executor.status === 'working' ? 'Working' : 'Patched'}</span>
      </div>

      {/* Multi-Platform Badge */}
      {isMultiPlatform && (
        <div className="multi-platform-badge">
          <i className="fas fa-layer-group"></i>
          <span>Multi-Platform</span>
        </div>
      )}

      {/* Header */}
      <div className="card-header">
        <div className="card-icon">
          {renderIcon()}
          <span className="executor-emoji" style={{ display: 'none' }}>
            {executor.icon.includes('.') ? '🎮' : ''}
          </span>
        </div>
        <div className="card-title-section">
          <h3 className="card-title">{executor.name}</h3>
          <div className="card-meta">
            {!isMultiPlatform && (
              <span className="meta-item">
                {getPlatformIcon()}
                {executor.platform}
              </span>
            )}
            {executor.keySystem && (
              <span className="meta-item key-badge">
                <Key size={12} />
                Key
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Platform Selector - NEW */}
      {isMultiPlatform && (
        <div className="platform-selector">
          {executor.platforms.map(platform => (
            <button
              key={platform}
              className={`platform-tab ${selectedPlatform === platform ? 'active' : ''}`}
              onClick={() => setSelectedPlatform(platform)}
            >
              {getPlatformIcon(platform)}
              <span>{platform}</span>
            </button>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="card-description">{executor.description}</p>

      {/* Info Grid */}
      <div className="card-info-grid-3">
        <div className="info-item">
          <span className="info-label">Version</span>
          <span className="info-value">{currentData.version}</span>
        </div>
        <div className="info-item">
          <span className="info-label">
            <Clock size={12} />
            Updated
          </span>
          <span className="info-value">{currentData.lastUpdate}</span>
        </div>
        <div className="info-item info-item-full">
          <span className="info-label">Roblox Version</span>
          <span className="info-value info-value-small">{currentData.robloxVersion}</span>
        </div>
      </div>

      {/* SUNC & UNC */}
      <div className="compatibility-grid">
        <div className="compat-item">
          <span className="compat-label">SUNC</span>
          <span className="compat-value">{currentData.sunc}%</span>
        </div>
        <div className="compat-item">
          <span className="compat-label">UNC</span>
          <span className="compat-value">{currentData.unc}%</span>
        </div>
      </div>

      {/* Actions */}
      <div className="card-actions">
        <a 
          href={currentData.downloadUrl} 
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={16} />
          <span>Download{isMultiPlatform && ` for ${selectedPlatform}`}</span>
        </a>
        <a 
          href={executor.discordUrl} 
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