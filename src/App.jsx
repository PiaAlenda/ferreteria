import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import ProductListing from "./components/ProductListing"
import LocationSection from "./components/LocationSection"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import CategoryPage from "./components/CategoryPage" 
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductListing />
              <Categories />
              <LocationSection />
              <CTA />
            </>
          }
        />
        {/* Página por categoría dinámica */}
        <Route path="/categoria/:slug" element={<CategoryPage />} /> {/* 🔥 Ruta dinámica */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
