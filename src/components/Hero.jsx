import React, { useEffect, useState, useRef } from 'react';

const AnimatedNumber = ({ target, trigger }) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20; 
    const steps = duration / stepTime;
    const increment = target / steps;

    intervalRef.current = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(intervalRef.current);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(intervalRef.current);
  }, [target, trigger]);

  return <span>{count}+</span>;
};

const Hero = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const stats = statsRef.current;
    if (stats) {
      stats.style.opacity = '0';
      stats.style.transform = 'translateY(20px)';
      stats.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(stats);
    }

    return () => {
      if (stats) observer.unobserve(stats);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Las mejores herramientas para tus proyectos</h2>
            <p>Más de 20 años ofreciendo calidad y confianza. Encuentra todo lo que necesitas para construcción, reparación y mantenimiento.</p>
            <div className="hero-buttons">
              <a href="#products" className="btn-primary">Ver Productos</a>
              <a href="#ubicacion" className="btn-secondary">Cómo llegar</a>
            </div>
            <div className="hero-stats" ref={statsRef}>
              <div className="stat">
                <AnimatedNumber target={500} trigger={statsVisible} />
                <span className="stat-label">Productos</span>
              </div>
              <div className="stat">
                <AnimatedNumber target={20} trigger={statsVisible} />
                <span className="stat-label">Años</span>
              </div>
              <div className="stat">
                <AnimatedNumber target={1000} trigger={statsVisible} />
                <span className="stat-label">Clientes</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
              alt="Ferretería El Martillo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
