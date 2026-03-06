import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

export const Hero = () => {
  const { hero, companyInfo, images } = mockData;

  const scrollToContact = () => {
    const element = document.getElementById('contactos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div
        className="hero-background bg-blend-overlay bg-black/70"
        style={{ backgroundImage: `url(${images.hero})` }}>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-badge">
            <span className="hero-badge-text">Desde {companyInfo.establishedYear}</span>
          </div>
          
          <h1 className="hero-title">
            {hero.headline}
          </h1>
          
          <p className="hero-subtitle">
            {hero.subheadline}
          </p>

          <div className="hero-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) =>
              <Star
                key={i}
                className={`star-icon ${i < Math.floor(companyInfo.rating) ? 'star-filled' : 'star-empty'}`}
                fill={i < Math.floor(companyInfo.rating) ? 'currentColor' : 'none'} />

              )}
            </div>
            <span className="rating-text">
              {companyInfo.rating}/5 baseado em {companyInfo.totalReviews} avaliações Google
            </span>
          </div>

          <div className="hero-cta-group">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">

              {hero.ctaText}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => document.getElementById('quem-somos').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white transition-all duration-200">

              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>);

};