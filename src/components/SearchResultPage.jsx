import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import products from "./data/products"
import ProductDetail from "./ProductDetail" 

const SearchResultPage = () => {
  const { termino } = useParams()
  const navigate = useNavigate()

  const [selectedProduct, setSelectedProduct] = useState(null) 

  const searchTerm = termino.toLowerCase().trim()
  const resultados = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  )
  const handleCloseDetail = () => setSelectedProduct(null)

  return (
    <div className="search-results">
      <h2>
        Resultados para: <span style={{ color: "#0077cc" }}>{termino}</span>
      </h2>

      {resultados.length === 0 ? (
        <div className="no-results">
          <p>
            No se encontraron resultados para <strong>{termino}</strong>.
          </p>
          <button onClick={() => navigate("/")} className="btn-volver">
            Volver al inicio
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {resultados.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />
      )}
    </div>
  )
}

export default SearchResultPage






