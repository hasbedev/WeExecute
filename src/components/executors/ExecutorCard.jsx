import { Download, MessageCircle, Monitor, Smartphone, Apple, Key, Clock } from 'lucide-react'

const ExecutorCard = ({ executor }) => {
  const { name, icon, status, platform, keySystem, version, lastUpdate, description, downloadUrl, discordUrl } = executor

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

  return (
    <div className="executor-card">
      {/* Status Badge */}
      <div className={`status-badge ${getStatusColor()}`}>
        <span className="status-dot"></span>
        <span>{status === 'working' ? 'Working' : 'Patched'}</span>
      </div>

      {/* Header */}
      <div className="card-header">
        <div className="card-icon">{icon}</div>
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

      {/* Info Grid */}
      <div className="card-info-grid">
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
      </div>

      {/* Actions */}
      <div className="card-actions">
        <a 
          href={downloadUrl} 
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            alert(`Downloading ${name}...`)
          }}
        >
          <Download size={16} />
          <span>Download</span>
        </a>
        <a 
          href={discordUrl} 
          className="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault()
            alert(`Opening Discord for ${name}...`)
          }}
        >
          <MessageCircle size={16} />
        </a>
      </div>
    </div>
  )
}

export default ExecutorCard
