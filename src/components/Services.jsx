import React from 'react';
import { Calculator, Users, Shield } from 'lucide-react';
import { mockData } from '../data/mock';

const iconMap = {
  Calculator: Calculator,
  Users: Users,
  Shield: Shield
};

export const Services = () => {
  const { services, images } = mockData;

  return (
    <section id="servicos" className="section-container services-section">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <div className="section-label-center">
            O Que Fazemos
          </div>
          <h2 className="section-title-center">
            Serviços Especializados
          </h2>
          <p className="section-description-center">
            Soluções completas para a gestão e crescimento do seu negócio
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-card-inner">
                  <div className="service-icon-container">
                    <IconComponent className="service-icon" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-image-section">
          <img 
            src={images.services} 
            alt="Serviços CS Contabilidade" 
            className="services-image"
          />
        </div>
      </div>
    </section>
  );
};
