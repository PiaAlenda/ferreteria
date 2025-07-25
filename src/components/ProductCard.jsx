export default function ProductCard({ product, onSelectProduct }) {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en el producto: ${product.name}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const tieneDescuento = product.discount && product.discount > 0;
  const precioOriginal = product.price;
  const precioDescontado = tieneDescuento
    ? (precioOriginal * (1 - product.discount)).toFixed(2)
    : null;

  return (
    <div className="product-card" onClick={() => onSelectProduct(product)}>
      
      <div className="product-image">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="product-image-inner"
        />
        {tieneDescuento && (
          <div className="discount-badge">-{product.discount * 100}%</div>
        )}
      </div>

      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="product-footer">
          {tieneDescuento ? (
            <div className="product-price">
              <span className="original-price">${precioOriginal.toFixed(2)}</span>
              <span className="discounted-price">${precioDescontado}</span>
            </div>
          ) : (
            <span className="product-price">${precioOriginal.toFixed(2)}</span>
          )}
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
  );
}
