import { useState } from "react"
import ProductCard from "./productCard.jsx"
import ProductDetail from "./productDetail.jsx"
import products from "./data/Products.js" 

export default function ProductListing() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (product) => {
    console.log("Producto seleccionado:", product) 
    setSelectedProduct(product)
  }

  const handleCloseDetail = () => {
    console.log("Cerrando detalle del producto.") 
    setSelectedProduct(null)
  }

const pinturas = products.filter(product => product.category === "pintura")
const herramientas = products.filter(product => product.category === "herramienta")

  return (
<section id="productos" className="products">
  <div className="section-header">
    <div className="container">
      <div className="categories">
    <h3>Nuestros Productos</h3>
     <p>Explora nuestra amplia gama de productos organizados por categorías</p>
    </div>
    </div>
    <h1>Pinturas</h1>
  </div>
  <div className="products-grid">
    {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
    {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  <div className="section-header">
    <h1>Accesorios para Pintar</h1>
  </div>
  <div className="products-grid">
    {herramientas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
     {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  <div className="section-header">
    <h1>Herramientas Electricas</h1>
  </div>
  <div className="products-grid">
    {herramientas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
     {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  <div className="section-header">
    <h1>Jardineria</h1>
  </div>
  <div className="products-grid">
    {herramientas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
     {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  <div className="section-header">
    <h1>Ferreteria</h1>
  </div>
  <div className="products-grid">
    {herramientas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
     {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  <div className="section-header">
    <h1>Fijaciones</h1>
  </div>
  <div className="products-grid">
    {herramientas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
     {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  <div className="section-header">
    <h1>Adhesivos/Selladores</h1>
  </div>
  <div className="products-grid">
    {herramientas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
     {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  <div className="section-header">
    <h1>Herramientas Manuales</h1>
  </div>
  <div className="products-grid">
    {herramientas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
     {pinturas.map(product => (
      <ProductCard key={product.id} product={product} onSelectProduct={handleProductClick} />
    ))}
  </div>

  {selectedProduct && (
    <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />
  )}
</section>

  )
}


