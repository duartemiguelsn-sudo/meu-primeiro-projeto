import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header-container">
      <nav className="nav-wrapper">
        <div className="logo-section">
          <span className="logo-text">CS</span>
          <div className="logo-divider"></div>
          <span className="logo-subtitle">Contabilidade e Serviços</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          <button onClick={() => scrollToSection('quem-somos')} className="nav-link">
            Quem Somos
          </button>
          <button onClick={() => scrollToSection('servicos')} className="nav-link">
            Serviços
          </button>
          <button onClick={() => scrollToSection('recursos')} className="nav-link">
            Recursos Úteis
          </button>
          <button onClick={() => scrollToSection('contactos')} className="nav-link">
            Contactos
          </button>
        </div>

        <div className="cta-section-desktop">
          <Button 
            onClick={() => scrollToSection('contactos')} 
            className="cta-button"
          >
            <Phone className="h-4 w-4" />
            Fale Connosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('quem-somos')} className="mobile-nav-link">
            Quem Somos
          </button>
          <button onClick={() => scrollToSection('servicos')} className="mobile-nav-link">
            Serviços
          </button>
          <button onClick={() => scrollToSection('recursos')} className="mobile-nav-link">
            Recursos Úteis
          </button>
          <button onClick={() => scrollToSection('contactos')} className="mobile-nav-link">
            Contactos
          </button>
          <Button 
            onClick={() => scrollToSection('contactos')} 
            className="cta-button w-full mt-4"
          >
            <Phone className="h-4 w-4" />
            Fale Connosco
          </Button>
        </div>
      )}
    </header>
  );
};
