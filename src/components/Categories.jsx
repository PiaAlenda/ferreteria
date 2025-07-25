import { useNavigate } from "react-router-dom"

const Categories = () => {
  const navigate = useNavigate()

  const categorias = [
    { slug: "herramientas-electricas", icon: "fa-hammer", titulo: "Herramientas Eléctricas" },
    { slug: "plomeria", icon: "fa-hammer", titulo: "Plomería" },
    { slug: "jardineria-e-insecticidas", icon: "fa-wrench", titulo: "Jardinería e Insecticidas" },
    { slug: "quimicos-adhesivos-lubricantes", icon: "fa-screwdriver", titulo: "Químicos-Adhesivos-Lubricantes" },
    { slug: "sogas-y-tejidos", icon: "fa-hammer", titulo: "Sogas & Tejidos" },
    { slug: "herramienta", icon: "fa-hammer", titulo: "Herramientas" },
    { slug: "herrajes-y-hogar", icon: "fa-wrench", titulo: "Herrajes & Hogar" },
    { slug: "buloneria", icon: "fa-screwdriver", titulo: "Bulonería" },
    { slug: "pintura", icon: "fa-hammer", titulo: "Pinturas" },
    { slug: "ferreteria", icon: "fa-hammer", titulo: "Ferretería" },
    { slug: "materiales-para-construccion", icon: "fa-wrench", titulo: "Materiales para Construcción" },
    { slug: "seguridad", icon: "fa-screwdriver", titulo: "Seguridad" },
    { slug: "materiales-electricos", icon: "fa-wrench", titulo: "Materiales Eléctricos" },
    { slug: "sanitarios", icon: "fa-screwdriver", titulo: "Sanitarios" },
  ]

  const handleClick = (slug) => {
    navigate(`/categoria/${slug}`)
  }

  return (
    <section id="categories" className="categories">
      <div className="container">
        <div className="section-header">
          <h3>Mirá nuestras Categorías</h3>
          <p>Explora nuestra amplia gama de productos organizados por categorías</p>
        </div>
         </div>
        <div className="categories-grid">
          {categorias.map((cat, idx) => (
            <div
              className="category-card"
              key={idx}
              onClick={() => handleClick(cat.slug)}
              style={{ cursor: "pointer" }}
            >
              <div className="category-icon">
                <i className={`fas ${cat.icon}`}></i>
              </div>
              <h5 style={{ fontWeight: "lighter" }}>{cat.titulo}</h5>
            </div>
          ))}
        </div>
     
    </section>
  )
}

export default Categories
