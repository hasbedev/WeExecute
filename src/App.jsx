import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import SearchBar from './components/search/SearchBar'
import FilterTabs from './components/filters/FilterTabs'
import ExecutorGrid from './components/executors/ExecutorGrid'
import Footer from './components/layout/Footer'
import Maintenance from './components/layout/Maintenance'
import { executorsData } from './data/executorsData'

// 🔧 tinggal ubah true / false
const MAINTENANCE_MODE = true

function App() {
  // ⛔ langsung hentikan render normal kalau maintenance
  if (MAINTENANCE_MODE) {
    return <Maintenance />
  }

  const [executors, setExecutors] = useState(executorsData)
  const [filteredExecutors, setFilteredExecutors] = useState(executorsData)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    filterExecutors()
  }, [searchQuery, activeFilter])

  const filterExecutors = () => {
    let filtered = [...executors]

    if (activeFilter !== 'all') {
      if (activeFilter === 'working') {
        filtered = filtered.filter(e => e.status === 'working')
      } else if (activeFilter === 'patched') {
        filtered = filtered.filter(e => e.status === 'patched')
      } else if (activeFilter === 'keySystem') {
        filtered = filtered.filter(e => e.keySystem)
      } else {
        // Platform filters - FIX FOR MULTI-PLATFORM
        filtered = filtered.filter(e => {
          // Check if executor has single platform
          if (e.platform) {
            return e.platform.toLowerCase() === activeFilter
          }
          // Check if executor has multiple platforms
          if (e.platforms && Array.isArray(e.platforms)) {
            return e.platforms.some(p => p.toLowerCase() === activeFilter)
          }
          return false
        })
      }
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(e =>
        e.name.toLowerCase().includes(query) ||
        e.description.toLowerCase().includes(query)
      )
    }

    setFilteredExecutors(filtered)
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <main className="main-content">
        <div className="container">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FilterTabs
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <ExecutorGrid executors={filteredExecutors} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
