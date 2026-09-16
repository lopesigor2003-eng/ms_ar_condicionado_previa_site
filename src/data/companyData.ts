import { ServiceItem, ReviewItem, WhyChooseUsItem, AreaItem } from '../types';

export const COMPANY_INFO = {
  name: 'MS AR CONDICIONADO',
  shortName: 'MS Ar Condicionado DF',
  fullName: 'MS AR CONDICIONADO DF - Instalação e Manutenção de Ar Condicionado no Plano Piloto DF',
  categoryBadge: 'Serviço de aquecimento, ventilação e ar condicionado',
  tagline: 'Climatização com Excelência, Pontualidade e Preço Justo no Plano Piloto DF',
  address: 'St. Médico Hospitalar Sul CLS 102 Bloco A, Plano Piloto, Brasília - DF',
  city: 'Brasília - DF',
  mainRegion: 'Plano Piloto & Distrito Federal',
  phoneDisplay: '(61) 99834-2150',
  whatsappNumber: '5561998342150', // DDD 61 Brasília
  instagramUrl: 'https://www.instagram.com/arcondicionadoms/',
  instagramHandle: '@arcondicionadoms',
  googleMapsUrl: 'https://maps.app.goo.gl/Coo5kcPYfrfUkd3HA',
  googleRating: 5.0,
  googleReviewCount: 15,
  openingHours: 'Segunda a Sexta: 08h00 às 18h00 | Sábado: 08h00 às 13h00',
  emergencyAvailable: 'Plantão WhatsApp para emergências no Plano Piloto e DF',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'instalacao',
    title: 'Instalação Especializada',
    subtitle: 'Split Hi-Wall, Inverter, Cassete, Piso-Teto e Multi-Split',
    category: ['todos', 'instalacao', 'residencial', 'comercial'],
    description: 'Instalação técnica rigorosa conforme o manual de cada fabricante. Inclui vácuo no sistema com bomba de alto rendimento, teste de estanqueidade com nitrogênio e isolamento térmico blindado.',
    highlight: 'Garantia total de serviço e preservação da garantia de fábrica do seu aparelho.',
    features: [
      'Tubulação de cobre 100% de primeira linha',
      'Processo de vácuo abaixo de 500 microns',
      'Suportes reforçados com amortecedores antivibração',
      'Furação precisa com recolhimento de poeira',
      'Teste elétrico e verificação de dreno'
    ],
    warranty: '1 ano de garantia na instalação',
    duration: '2 a 4 horas por ponto',
    badge: 'Mais Solicitado',
    popular: true,
    recommendedFor: 'Apartamentos, casas e empresas que buscam rendimento máximo e economia de energia.'
  },
  {
    id: 'manutencao-preventiva',
    title: 'Manutenção Preventiva e Higienização',
    subtitle: 'Limpeza química antibacteriana profunda e revisão completa',
    category: ['todos', 'manutencao', 'residencial', 'comercial'],
    description: 'Elimine 99,9% de fungos, ácaros, bactérias e odores. Desmontagem e higienização com produtos biodegradáveis homologados pela Anvisa, desobstrução de serpentinas e drenos.',
    highlight: 'Ar puro para sua família e até 30% de redução na conta de energia.',
    features: [
      'Higienização com bactericida homologado Anvisa',
      'Limpeza profunda da turbina e bandeja de condensado',
      'Desobstrução e higienização do sistema de dreno',
      'Medição de pressão do fluido refrigerante (gás)',
      'Checagem de consumo elétrico e conexões'
    ],
    warranty: 'Garantia de 90 dias com laudo',
    duration: '1 a 2 horas',
    badge: 'Saúde & Economia',
    popular: true,
    recommendedFor: 'Imóveis residenciais a cada 6 meses e ambientes comerciais a cada 30-90 dias.'
  },
  {
    id: 'manutencao-corretiva',
    title: 'Manutenção Corretiva & Reparos',
    subtitle: 'Diagnóstico rápido de falhas, vazamentos e consertos mecânicos',
    category: ['todos', 'manutencao', 'residencial', 'comercial'],
    description: 'Seu ar condicionado parou de gelar, está pingando água, desarmando o disjuntor ou com barulho estranho? Nossa equipe identifica a causa raiz e repara rapidamente com peças originais.',
    highlight: 'Atendimento emergencial ágil no Plano Piloto e regiões do DF.',
    features: [
      'Localização eletrônica e correção de vazamentos de gás',
      'Carga de fluido refrigerante com balança de precisão',
      'Troca de capacitores, placas inversoras e sensores',
      'Desentupimento e correção de queda do dreno',
      'Reparo de compressores e motores ventiladores'
    ],
    warranty: '90 dias em peças e mão de obra',
    duration: 'Diagnóstico em até 1h',
    badge: 'Resposta Rápida',
    recommendedFor: 'Aparelhos que pararam de gelar, vazam água ou apresentam códigos de erro no visor.'
  },
  {
    id: 'projeto-climatizacao',
    title: 'Projetos de Climatização & PMOC',
    subtitle: 'Dimensionamento de carga térmica e planejamento de infraestrutura',
    category: ['todos', 'projeto', 'residencial', 'comercial'],
    description: 'Cálculo exato de BTUs por ambiente, especificação de pontos de energia, dreno e passagens de tubulação para novas construções e reformas no Plano Piloto.',
    highlight: 'Evite quebra-quebra desnecessário e garanta climatização uniforme.',
    features: [
      'Cálculo térmico conforme NBR 16401',
      'Planta executiva de passagens de cobre e drenos',
      'Elaboração de PMOC (Plano de Manutenção, Operação e Controle) com ART',
      'Consultoria na escolha de marcas e sistemas VRF/Multi-Split',
      'Acompanhamento de obras residenciais e corporativas'
    ],
    warranty: 'Garantia técnica e conformidade legal',
    duration: 'Conforme cronograma da obra',
    badge: 'Engenharia Térmica',
    recommendedFor: 'Arquitetos, construtoras, empresas e reformas de alto padrão no DF.'
  },
  {
    id: 'residencial',
    title: 'Soluções Residenciais',
    subtitle: 'Cuidado especial com apartamentos e casas no Plano Piloto',
    category: ['todos', 'residencial', 'instalacao', 'manutencao'],
    description: 'Atendimento discreto e limpo ideal para as peculiaridades dos blocos das superquadras (Asa Sul, Asa Norte, Sudoeste e Noroeste), respeitando regras de fachada e convenções de condomínio.',
    highlight: 'Zero poeira, proteção do seu piso, móveis e acabamentos em gesso.',
    features: [
      'Respeito às regras de condomínio e horários de barulho',
      'Uso de lona plástica e aspirador profissional durante furações',
      'Instalação silenciosa para quartos de bebês e suítes',
      'Integração com Alexa / Google Home (modelos Smart Wi-Fi)',
      'Instruções completas de uso e conservação do controle'
    ],
    warranty: 'Garantia comprovada com nota fiscal',
    duration: 'Agendamento pontual',
    recommendedFor: 'Famílias que buscam conforto térmico silencioso e ar puro para o lar.'
  },
  {
    id: 'comercial',
    title: 'Soluções Comerciais & Corporativas',
    subtitle: 'Escritórios, clínicas, lojas, laboratórios e restaurantes',
    category: ['todos', 'comercial', 'projeto', 'manutencao'],
    description: 'Contratos de manutenção preventiva periódica (PMOC), emissão de relatórios técnicos, atendimento programado em horários flexíveis para não interromper suas atividades.',
    highlight: 'Ambiente climatizado para seus clientes e conformidade sanitária garantida.',
    features: [
      'Contratos mensais ou trimestrais com desconto',
      'Atendimento prioritário para chamados de emergência',
      'Emissão de laudo técnico de qualidade do ar (PMOC / Anvisa)',
      'Atendimento fora do horário comercial se necessário',
      'Faturamento para empresas com nota fiscal de serviço'
    ],
    warranty: 'SLA garantido em contrato',
    duration: 'Planos sob medida',
    badge: 'Empresarial',
    recommendedFor: 'Empresas no Setor Comercial Sul/Norte, Sudoeste, Noroeste e todo o DF.'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: '1',
    title: 'Técnicos Certificados em Inverter',
    description: 'Nossa equipe domina a tecnologia Inverter das principais marcas mundiais (Daikin, LG, Fujitsu, Midea, Gree, Springer), garantindo eficiência e durabilidade.',
    iconName: 'Award',
    tag: 'Qualificação'
  },
  {
    id: '2',
    title: 'Pontualidade e Agilidade no Plano Piloto',
    description: 'Equipes bem posicionadas em Brasília para garantir cumprimento rigoroso de horários em quadras residenciais e setores comerciais.',
    iconName: 'Clock',
    tag: 'Rapidez'
  },
  {
    id: '3',
    title: 'Instalação Limpa e Sem Poeira',
    description: 'Tratamos seu imóvel como se fosse nosso. Usamos capas de proteção, lonas plásticas e aspirador durante as furações na parede.',
    iconName: 'Sparkles',
    tag: 'Cuidado'
  },
  {
    id: '4',
    title: 'Equipamentos de Alta Precisão',
    description: 'Utilizamos bomba de vácuo profissional de duplo estágio, manifold digital e balança de precisão para dosagem milimétrica de gás refrigerante.',
    iconName: 'Wrench',
    tag: 'Tecnologia'
  },
  {
    id: '5',
    title: 'Garantia por Escrito & Nota Fiscal',
    description: 'Transparência do início ao fim. Todos os serviços contam com garantia legal e suporte pós-atendimento sem burocracia.',
    iconName: 'ShieldCheck',
    tag: 'Segurança'
  },
  {
    id: '6',
    title: 'Avaliação 5.0 Estrelas no Google',
    description: 'Dezenas de clientes reais recomendam nossos serviços de instalação e manutenção no Google Maps pela seriedade e preço justo.',
    iconName: 'Star',
    tag: 'Reputação'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Cliente Verificado Google',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Avaliação no Google Maps',
    serviceType: 'Instalação e Manutenção no Plano Piloto',
    location: 'Plano Piloto - Brasília DF',
    comment: 'Excelente serviço! Moisés, profissional super competente e honesto. Sou cliente fiel!',
    likes: 12,
    googleVerified: true
  },
  {
    id: 'rev-2',
    author: 'Cliente Verificado Google',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Avaliação no Google Maps',
    serviceType: 'Instalação de Ar Condicionado',
    location: 'Brasília - DF',
    comment: 'Moises muito gente boa, executou o serviço perfeito de instalação do ar, recomendo a todos, pode confiar.',
    likes: 9,
    googleVerified: true
  },
  {
    id: 'rev-3',
    author: 'Cliente Verificado Google',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Avaliação no Google Maps',
    serviceType: 'Serviço de Ar Condicionado',
    location: 'Plano Piloto - DF',
    comment: 'Moises ótimo técnico preço muito bom.',
    likes: 7,
    googleVerified: true
  },
  {
    id: 'rev-4',
    author: 'Cliente Verificado Google',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Avaliação no Google Maps',
    serviceType: 'Instalação e Manutenção',
    location: 'Asa Sul - Brasília DF',
    comment: 'Serviço de qualidade, pontual e com bom custo x benefício.',
    likes: 8,
    googleVerified: true
  },
  {
    id: 'rev-5',
    author: 'Cliente Verificado Google',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Avaliação no Google Maps',
    serviceType: 'Atendimento e Manutenção',
    location: 'Brasília - DF',
    comment: 'Empresa ótimo atendimento e preço.',
    likes: 6,
    googleVerified: true
  },
  {
    id: 'rev-6',
    author: 'Cliente Verificado Google',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Avaliação no Google Maps',
    serviceType: 'Instalação de Ar Condicionado',
    location: 'Plano Piloto - DF',
    comment: 'Serviço de qualidade. Recomendo!!',
    likes: 11,
    googleVerified: true
  }
];

export const SERVICE_AREAS: AreaItem[] = [
  { id: '1', name: 'Asa Sul', zone: 'Plano Piloto', responseTime: 'Até 2h', featured: true },
  { id: '2', name: 'Asa Norte', zone: 'Plano Piloto', responseTime: 'Até 2h', featured: true },
  { id: '3', name: 'Sudoeste & Octogonal', zone: 'Brasília Central', responseTime: 'Até 2h', featured: true },
  { id: '4', name: 'Noroeste', zone: 'Brasília Central', responseTime: 'Até 2h', featured: true },
  { id: '5', name: 'Lago Sul', zone: 'Região dos Lagos', responseTime: 'Até 3h', featured: true },
  { id: '6', name: 'Lago Norte', zone: 'Região dos Lagos', responseTime: 'Até 3h', featured: true },
  { id: '7', name: 'Águas Claras', zone: 'DF', responseTime: 'Atendimento Rápido' },
  { id: '8', name: 'Guará I e II', zone: 'DF', responseTime: 'Atendimento Rápido' },
  { id: '9', name: 'Cruzeiro & SIG', zone: 'Plano Piloto', responseTime: 'Atendimento Rápido' },
  { id: '10', name: 'Setor Comercial & Bancário', zone: 'Plano Piloto', responseTime: 'Plantão Corporativo', featured: true },
  { id: '11', name: 'Park Way', zone: 'DF', responseTime: 'Atendimento Rápido' },
  { id: '12', name: 'Taguatinga & Demais Regiões', zone: 'DF', responseTime: 'Sob Consulta' }
];

export const FAQS = [
  {
    q: 'Qual a potência (BTUs) ideal para o meu ambiente no Plano Piloto?',
    a: 'Em média, calcula-se de 600 a 800 BTUs por metro quadrado em Brasília, considerando nossa época de seca e calor intenso. Se o ambiente recebe muito sol da tarde ou possui muitos aparelhos eletrônicos, recomendamos usar nosso Simulador de Orçamento no site para o cálculo exato.'
  },
  {
    q: 'Quanto tempo demora a instalação de um ar condicionado?',
    a: 'A instalação padrão de um aparelho Split Hi-Wall leva em média de 2 a 3 horas e meia. Esse tempo garante a realização completa dos testes elétricos, teste de estanqueidade e o procedimento indispensável de vácuo na tubulação.'
  },
  {
    q: 'De quanto em quanto tempo devo fazer a manutenção preventiva/higienização?',
    a: 'Para residências, recomendamos a cada 6 meses (ou pelo menos 1 vez ao ano antes do período de seca). Para empresas, escritórios e consultórios médicos, a Anvisa recomenda higienizações mensais ou trimestrais com plano PMOC.'
  },
  {
    q: 'Vocês atendem finais de semana e emergências?',
    a: 'Sim! Nosso atendimento no WhatsApp funciona de forma contínua para esclarecer dúvidas e agendar atendimentos de emergência em residências e comércios no Plano Piloto e DF.'
  },
  {
    q: 'A instalação da MS Ar Condicionado mantém a garantia de fábrica do meu aparelho?',
    a: 'Com certeza! Seguimos à risca todas as normas técnicas e manuais dos fabricantes (Daikin, LG, Midea, Gree, Springer, Fujitsu, Samsung, etc.), o que assegura a manutenção integral da garantia do fabricante.'
  },
  {
    q: 'Como posso solicitar um orçamento rápido?',
    a: 'Basta clicar no botão "SOLICITAR ORÇAMENTO" no topo ou utilizar nossa calculadora inteligente abaixo. Você receberá um atendimento personalizado direto no WhatsApp com um técnico especializado.'
  }
];

export const BRANDS = [
  { name: 'Daikin', logo: 'Daikin' },
  { name: 'LG Inverter', logo: 'LG' },
  { name: 'Fujitsu', logo: 'Fujitsu' },
  { name: 'Midea', logo: 'Midea' },
  { name: 'Gree', logo: 'Gree' },
  { name: 'Springer Midea', logo: 'Springer' },
  { name: 'Samsung', logo: 'Samsung' },
  { name: 'Carrier', logo: 'Carrier' },
  { name: 'Elgin', logo: 'Elgin' },
  { name: 'Consul', logo: 'Consul' }
];
