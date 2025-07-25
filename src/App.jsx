import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import ProductListing from "./components/ProductListing"
import LocationSection from "./components/LocationSection"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import CategoryPage from "./components/CategoryPage"
import SearchResultPage from "./components/SearchResultPage" // <-- Importa acá
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
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
        <Route path="/categoria/:slug" element={<CategoryPage />} />
        <Route path="/buscar/:termino" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App


