"use client"

import { useEffect, useState } from "react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
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
  const handleLinkClick = () => {
    setMenuOpen(false)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <i className="fas fa-hammer"></i>
          <div>
            <h1 id="Inicio">Ferretería El Martillo</h1>
            <p>Tu ferretería de confianza</p>
          </div>
        </div>
        <nav className="nav">
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#productos" onClick={handleLinkClick}>
                Productos
              </a>
            </li>
            <li>
              <a href="#ubicacion" onClick={handleLinkClick}>
                Ubicación
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={handleLinkClick}>
                Contacto
              </a>
            </li>
            <li>
              <a href="Inicio" className="btn-primary" onClick={handleLinkClick}>
                Inicio
              </a>
            </li>
          </ul>
          <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
