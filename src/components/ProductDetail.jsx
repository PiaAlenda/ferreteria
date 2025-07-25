export default function ProductDetail({ product, onClose }) {
  if (!product) return null

  const whatsappNumber = "1234567890" 
  const whatsappMessage = encodeURIComponent(`Hola, estoy interesado en el producto: ${product.name}`)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-content">
        <button className="close-button" onClick={onClose}>&times;</button>

        <h2>{product.name}</h2>

        <div className="product-detail-row">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="product-detail-image"
          />

          <div className="product-detail-info">
            {product.description && <p>{product.description}</p>}

            {product.features?.length > 0 && (
              <>
                <h3>Características:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            <p className="product-detail-price">
              Precio: ${product.price.toFixed(2)}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-product"
            >
              Comprar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
