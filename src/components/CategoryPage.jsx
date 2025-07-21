import { useParams } from "react-router-dom"
import products from "./data/Products.js"

const CategoryPage = () => {
  const { slug } = useParams()

  // Filtra productos que coincidan con la categoría del URL
  const productosFiltrados = products.filter(
    (producto) => producto.category === slug
  )

  return (
    <section className="category-products">
      <div className="container">
        <h2 style={{ textTransform: "capitalize" }}>
          {slug.replaceAll("-", " ")}
        </h2>

        {productosFiltrados.length > 0 ? (
          <div className="products-gridd">
            {productosFiltrados.map((prod) => (
              <div className="product-cardd" key={prod.id}>
                <img src={prod.image} alt={prod.name} className="product-image" />
                <h4>{prod.name}</h4>
                <p>${prod.price.toLocaleString("es-AR")}</p>
                <small>{prod.description}</small>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay productos disponibles en esta categoría aún.</p>
        )}
      </div>
    </section>
  )
}

export default CategoryPage
