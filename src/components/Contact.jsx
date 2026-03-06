import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

export const Contact = () => {
  const { companyInfo } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // NOVA LIGAÇÃO REAL AO BACKEND
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "A sua mensagem foi recebida com sucesso. Entraremos em contacto brevemente.",
        });
        
        // Limpar o formulário após sucesso
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          assunto: ''
        });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro na comunicação. Por favor, tente novamente mais tarde ou contacte-nos por telefone.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactos" className="section-container contact-section">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <div className="section-label-center-white">
            Fale Connosco
          </div>
          <h2 className="section-title-center-white">
            Contactos
          </h2>
          <p className="section-description-center-white">
            Estamos disponíveis para responder às suas questões
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-info-title">Morada</h3>
                  <p className="contact-info-text">{companyInfo.address}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-info-title">Telefone</h3>
                  <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="contact-info-link">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-info-title">E-mail</h3>
                  <a href={`mailto:${companyInfo.email}`} className="contact-info-link">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <Clock className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-info-title">Horário</h3>
                  <p className="contact-info-text">{companyInfo.businessHours}</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="map-container">
              <iframe
                src={companyInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização CS Contabilidade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <Label htmlFor="nome" className="form-label">Nome *</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="O seu nome"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email" className="form-label">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="telefone" className="form-label">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="262 844 312"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="empresa" className="form-label">Empresa</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  type="text"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="assunto" className="form-label">Assunto *</Label>
                <Textarea
                  id="assunto"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  rows={5}
                  className="form-input"
                  placeholder="Descreva o motivo do contacto..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="form-submit-button"
              >
                {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
