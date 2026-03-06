import React from 'react';
import { ExternalLink } from 'lucide-react';
import { mockData } from '../data/mock';

export const Resources = () => {
  const { usefulLinks } = mockData;

  return (
    <section id="recursos" className="section-container bg-white">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <div className="section-label-center">
            Links Úteis
          </div>
          <h2 className="section-title-center">
            Recursos Úteis
          </h2>
          <p className="section-description-center">
            Acesso rápido aos principais portais e serviços oficiais
          </p>
        </div>

        <div className="resources-grid">
          {usefulLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <div className="resource-card-content">
                <div className="resource-header">
                  <h3 className="resource-title">{link.name}</h3>
                  <ExternalLink className="resource-icon" />
                </div>
                <p className="resource-description">{link.description}</p>
              </div>
              <div className="resource-hover-indicator"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
