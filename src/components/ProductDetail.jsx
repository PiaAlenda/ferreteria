export default function ProductDetail({ product, onClose }) {
  if (!product) return null

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

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
  </div>
</div>

      </div>
    </div>
  )
}