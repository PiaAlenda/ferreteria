"use client"

export default function ProductCard({ product, onSelectProduct }) {
  const whatsappNumber = "1234567890" // Reemplaza con tu número de WhatsApp
  const whatsappMessage = encodeURIComponent(`Hola, estoy interesado en el producto: ${product.name}`)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="product-card" onClick={() => onSelectProduct(product)}>
      <div className="product-image">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="product-image-inner"
        />
        {/* <div className="discount-badge">-10%</div> */} {/* Si quieres un badge de descuento */}
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="product-category">Ferretería General</div> {/* Puedes hacer esto dinámico */}
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {/* <div className="product-rating">
            <i className="fas fa-star"></i>
            <span>4.5</span>
          </div> */}
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-product"
          onClick={(e) => e.stopPropagation()} 
        >
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  )
}
