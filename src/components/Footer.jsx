import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

export const Footer = () => {
  const { companyInfo } = mockData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">CS</h3>
            <p className="footer-tagline">Contabilidade e Serviços, Lda.</p>
            <p className="footer-text">
              Especialistas em contabilidade, fiscalidade e gestão de recursos humanos desde {companyInfo.establishedYear}.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="footer-links">
              <li>
                <a href="#quem-somos" className="footer-link">Quem Somos</a>
              </li>
              <li>
                <a href="#servicos" className="footer-link">Serviços</a>
              </li>
              <li>
                <a href="#recursos" className="footer-link">Recursos Úteis</a>
              </li>
              <li>
                <a href="#contactos" className="footer-link">Contactos</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="footer-link">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <a href={`mailto:${companyInfo.email}`} className="footer-link">
                  {companyInfo.email}
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span className="footer-text-small">
                  Caldas da Rainha, Portugal
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="footer-section">
            <h4 className="footer-title">Horário</h4>
            <p className="footer-text">
              Segunda a Sexta-Feira
            </p>
            <p className="footer-text-bold">
              09:00 - 13:00
            </p>
            <p className="footer-text-bold">
              14:30 - 18:30
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} CS - Contabilidade e Serviços, Lda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
