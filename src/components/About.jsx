import React from 'react';
import { CheckCircle, Award, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';

export const About = () => {
  const { about, companyInfo, images } = mockData;

  return (
    <section id="quem-somos" className="section-container bg-white">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-text-content">
            <div className="section-label">
              Sobre Nós
            </div>
            <h2 className="section-title">
              {about.title}
            </h2>
            <p className="section-description">
              {about.description}
            </p>
            <p className="section-description">
              {about.mission}
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <Award className="feature-icon" />
                </div>
                <div>
                  <h3 className="feature-title">Desde {companyInfo.establishedYear}</h3>
                  <p className="feature-description">Mais de 30 anos de experiência</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <TrendingUp className="feature-icon" />
                </div>
                <div>
                  <h3 className="feature-title">Crescimento Sustentável</h3>
                  <p className="feature-description">Apoiamos o seu negócio em todas as fases</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <CheckCircle className="feature-icon" />
                </div>
                <div>
                  <h3 className="feature-title">Conformidade Legal</h3>
                  <p className="feature-description">Cumprimento dos normativos em vigor</p>
                </div>
              </div>
            </div>

            <div className="target-audience-section">
              <h4 className="target-audience-title">Servimos:</h4>
              <div className="target-audience-grid">
                {about.targetAudience.map((audience, index) => (
                  <div key={index} className="audience-badge">
                    <CheckCircle className="h-4 w-4" />
                    {audience}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src={images.about} 
                alt="Equipa CS Contabilidade" 
                className="about-image"
              />
              <div className="about-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
