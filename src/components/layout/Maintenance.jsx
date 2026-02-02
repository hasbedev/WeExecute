import { useEffect, useState } from "react"
import "../../styles/Maintenance.css"

const statusList = [
  "Deploying update…",
  "Optimizing executor engine…",
  "Applying security patch…",
  "Syncing data…",
  "Finalizing build…"
]

const Maintenance = () => {
  const [statusIndex, setStatusIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setFade(false)

      setTimeout(() => {
        setStatusIndex((prev) => (prev + 1) % statusList.length)
        setFade(true)
      }, 400) // durasi fade out
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mnt-wrapper">
      <div className="mnt-bg-grid" />

      <div className="mnt-content">
        <img
          src="/icons/WeExecutor.png"
          alt="WeExecutor"
          className="mnt-logo"
        />

        <h1>WeExecutor is Updating</h1>
        <p>Sistem sedang ditingkatkan untuk performa & keamanan.</p>

        <div className="mnt-status">
          <span className="dot" />
          <span className={`mnt-status-text ${fade ? "show" : "hide"}`}>
            {statusList[statusIndex]}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Maintenance
