import ProductCard from "./ProductCard.jsx"
import ProductDetail from "./ProductDetail.jsx"
import products from "./data/products.js"
import { useState } from "react"

const categorias = [
  "Herramientas",
  "Plomeria",
  "Herramientas Electricas",
  "Buloneria",
  "Pinturas",
  "Ferreteria",
]

const ProductListing = ({ searchTerm }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  const buscarCoincidencias = (p) => {
    if (!searchTerm) return true
    return p.name.toLowerCase().includes(searchTerm.toLowerCase())
  }

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="categories">
          <div className="section-header">
            <h3>Conocé nuestros productos en descuento</h3>
          </div>
        </div>
         </div>

        {categorias.map((cat) => {
          const productosFiltrados = products
            .filter((p) => p.category === cat)
            .filter(buscarCoincidencias)

          if (productosFiltrados.length === 0) return null

          return (
            <div key={cat} className="product-category-section">
              <div className="products-gridd">
                {productosFiltrados.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onSelectProduct={setProductoSeleccionado}
                  />
                ))}
              </div>
            </div>
          )
        })}

        {productoSeleccionado && (
          <ProductDetail
            product={productoSeleccionado}
            onClose={() => setProductoSeleccionado(null)}
          />
        )}
     
    </section>
  )
}
export default ProductListing