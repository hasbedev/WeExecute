import { Smartphone, Monitor, Apple, Key, CheckCircle, XCircle } from 'lucide-react'

const FilterTabs = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All', icon: null },
    { id: 'working', label: 'Working', icon: CheckCircle },
    { id: 'patched', label: 'Patched', icon: XCircle },
    { id: 'keySystem', label: 'Key System', icon: Key },
    { id: 'windows', label: 'Windows', icon: Monitor },
    { id: 'android', label: 'Android', icon: Smartphone },
    { id: 'ios', label: 'iOS', icon: Apple },
  ]

  return (
    <div className="filter-section">
      <div className="filter-tabs">
        {filters.map((filter) => {
          const Icon = filter.icon
          return (
            <button
              key={filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {Icon && <Icon size={16} />}
              <span>{filter.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FilterTabs
