import { Search, X } from 'lucide-react'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <div className="search-section">
      <div className="search-container">
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search executors by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="search-clear" 
              onClick={handleClear}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
