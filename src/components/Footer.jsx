const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <i className="fas fa-hammer"></i>
            <span>Ferretería Miguel</span>
          </div>
          <p>Tu ferretería de confianza desde <br />
             hace más de 20 años.</p>
        </div>

        <div className="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li>
              <a href="#">Asesoría Técnica</a>
            </li>
            <li>
              <a href="#">Entrega a Domicilio</a>
            </li>
            <li>
              <a href="#">Garantía</a>
            </li>
            <li>
              <a href="#">Reparaciones</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>Av. Principal 123</li>
            <li>(555) 123-4567</li>
            <li>info@ferreteria-elmartillo.com</li>
            <div class="social-icons-container">
                        <div class="social-icons">
                           <a href="https://www.instagram.com/ferreteria_Miguelito00000000000/" target="_blank" rel="noreferrer">
                            <img src="/src/assets/icons8-instagram-50 (2).png" alt="Instagram" />
                          </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                                <img src="/src/assets/icons8-whatsapp-50 (1).png" alt="WhatsApp" />
                            </a>
                        </div>
                    </div>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ferretería Miguel. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
)
export default Footer

