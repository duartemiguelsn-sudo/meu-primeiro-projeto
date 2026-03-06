// Mock data for CS Contabilidade website

export const mockData = {
  companyInfo: {
    name: "CS - Contabilidade e Serviços, Lda.",
    establishedYear: 1993,
    rating: 4.6,
    totalReviews: 30,
    email: "geral@cs-contabilidade.com",
    phone: "262 844 312",
    address: "R. José Filipe Neto Rebelo, CV66+2P Caldas da Rainha, Portugal",
    businessHours: "De Segunda a Sexta Feira, das 9h00 às 13h00 e das 14h30 às 18h30",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.5273166897564!2d-9.138488!3d39.4004167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18df5f5f5f5f5f5%3A0x0!2zMznCsDI0JzAxLjUiTiA5wrAwOCcxOC42Ilc!5e0!3m2!1sen!2spt!4v1234567890!5m2!1sen!2spt"
  },
  
  hero: {
    headline: "Especialistas em Contabilidade desde 1993",
    subheadline: "Apoio à Gestão de Empresas nas áreas de Contabilidade, Fiscalidade, Gestão de Recursos Humanos e Seguros",
    ctaText: "Pedir um Orçamento"
  },
  
  about: {
    title: "Quem Somos",
    description: "A CS - Contabilidade e Serviços, Lda. é uma empresa especializada no apoio à Gestão de Empresas, nas áreas da Contabilidade, Fiscalidade, Gestão Administrativa de Recursos Humanos, Outsourcing Administrativo e Consultoria de Gestão.",
    mission: "Procuramos a satisfação das necessidades dos nossos Clientes, PME's, Micro Empresas, Empresários em Nome Individual e Profissionais Liberais, assegurando o cumprimento dos normativos legais em vigor.",
    targetAudience: ["PME's", "Micro Empresas", "Empresários em Nome Individual", "Profissionais Liberais"]
  },
  
  services: [
    {
      id: 1,
      title: "Contabilidade",
      description: "Serviços especializados em IRS, IRC, IVA e processamento de Salários",
      icon: "Calculator"
    },
    {
      id: 2,
      title: "Gestão de Pessoal",
      description: "Gestão administrativa completa de recursos humanos",
      icon: "Users"
    },
    {
      id: 3,
      title: "Seguros",
      description: "Consultoria e gestão de seguros empresariais",
      icon: "Shield"
    }
  ],
  
  usefulLinks: [
    {
      id: 1,
      name: "Portal das Finanças",
      url: "https://www.portaldasfinancas.gov.pt",
      description: "Acesso aos serviços da Autoridade Tributária"
    },
    {
      id: 2,
      name: "Segurança Social",
      url: "https://www.seg-social.pt",
      description: "Portal da Segurança Social Direta"
    },
    {
      id: 3,
      name: "Portal da Empresa",
      url: "https://eportugal.gov.pt/servicos/balcao-do-empreendedor",
      description: "Serviços para empresas e empreendedores"
    },
    {
      id: 4,
      name: "Portal do Cidadão",
      url: "https://eportugal.gov.pt",
      description: "Serviços públicos online"
    },
    {
      id: 5,
      name: "Ordem dos Contabilistas Certificados",
      url: "https://www.occ.pt",
      description: "Ordem dos Contabilistas Certificados"
    }
  ],
  
  images: {
    hero: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzcyNzM2NzIwfDA&ixlib=rb-4.1.0&q=85",
    about: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc3MjczNjcyNHww&ixlib=rb-4.1.0&q=85",
    services: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc3MjczNjcyNHww&ixlib=rb-4.1.0&q=85",
    contact: "https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBkZXNrfGVufDB8fHx8MTc3MjczNjcyN3ww&ixlib=rb-4.1.0&q=85"
  }
};

// Mock form submission handler
export const mockSubmitContactForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted (mock):", formData);
      resolve({
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contacto brevemente."
      });
    }, 1000);
  });
};
