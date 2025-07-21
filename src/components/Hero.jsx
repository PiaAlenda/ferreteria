import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const stats = document.querySelector('.hero-stats');
    if (stats) {
      stats.style.opacity = '0';
      stats.style.transform = 'translateY(20px)';
      stats.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(stats);
    }
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Las mejores herramientas para tus proyectos</h2>
            <p>Más de 20 años ofreciendo calidad y confianza. Encuentra todo lo que necesitas para construcción, reparación y mantenimiento.</p>
            <div className="hero-buttons">
              <a href="#productos" className="btn-primary">Ver Productos</a>
              <a href="#ubicacion" className="btn-secondary">Cómo llegar</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Productos</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Años</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Clientes</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop" alt="Ferretería El Martillo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;