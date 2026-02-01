import ExecutorCard from './ExecutorCard'

const ExecutorGrid = ({ executors }) => {
  if (executors.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3>No executors found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="executors-section" id="executors">
      <div className="section-header">
        <h2 className="section-title">Available Executors</h2>
        <div className="section-count">
          <span className="count-badge">{executors.length}</span>
          <span className="count-label">Executors</span>
        </div>
      </div>
      
      <div className="executors-grid">
        {executors.map((executor) => (
          <ExecutorCard key={executor.id} executor={executor} />
        ))}
      </div>
    </div>
  )
}

export default ExecutorGrid
