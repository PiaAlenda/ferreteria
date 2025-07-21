import React from 'react';

const LocationSection = () => (
  <section id="ubicacion" className="location">
    <div className="container">
      <div className="section-header">
        <h3>Visítanos</h3>
        <p>Estamos ubicados en el corazón de Palermo, fácil acceso y cerca del transporte público.</p>
      </div>
      <div className="location-content">
        <div className="location-info">
          <div className="info-card">
            <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="info-text">
              <h4>Dirección</h4>
              <p>Av. Santa Fe 3253, Palermo<br />CABA, Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon"><i className="fas fa-clock"></i></div>
            <div className="info-text">
              <h4>Horarios</h4>
              <p>Lunes a Viernes: 8:00 AM - 7:00 PM<br />Sábados: 9:00 AM - 6:00 PM<br />Domingos: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="location-map">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2061463106334!2d-58.4109172847716!3d-34.59313806384807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca94df1edcdb%3A0x37b4b681ec7f47b!2sAv.%20Santa%20Fe%203253%2C%20C1425BGY%20CABA!5e0!3m2!1ses-419!2sar!4v1655460000000!5m2!1ses-419!2sar"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
