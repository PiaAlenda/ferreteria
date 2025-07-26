"use client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      const header = document.querySelector(".header")
      if (header) {
        if (scrolled) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = searchTerm.trim()
    if (trimmed) {
      navigate(`/buscar/${encodeURIComponent(trimmed.toLowerCase())}`)
      setSearchTerm("")
    }
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-content-wrapper">
        <div className="header-top-row">
          <div className="nav-brand">
            <img
              src="/src/assets/logo-ferreteria.png"
              alt="Ferretería Miguel Logo"
              onError={(e) => {
                e.target.src = "/src/assets/Logo ferretería moderno ilustrativo negro con amarillo .png"
              }}
            />
            <h1>Ferretería Miguel</h1>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="#categories">Categorías</a>
              </li>
              <li>
                <a href="#products">Productos</a>
              </li>
              <li>
                <a href="#ubicacion">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-search">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Buscar categoría o producto..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="search-button" aria-label="Buscar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header

