"use client" // Mantener si este componente se renderiza en el cliente en un entorno SSR/SSG como Next.js, aunque uses react-router-dom. Si es un SPA puro, no es estrictamente necesario.

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header")
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = "rgba(255, 255, 255, 0.95)"
          header.style.backdropFilter = "blur(10px)"
        } else {
          header.style.background = "var(--white)"
          header.style.backdropFilter = "none"
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
    <header className="header">

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

    <div className="container header-content-wrapper">
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
      </div>
    </header>
  )
}

export default Header
