/**
 * ================================================================
 * PORTFÓLIO - Fernando Napoli | Product Owner
 * script.js — Lógica JavaScript vanilla do site
 *
 * Seções:
 *  1. DADOS DOS CASES (convertidos do TypeScript)
 *  2. UTILITÁRIOS
 *  3. HEADER COM EFEITO DE SCROLL
 *  4. MENU MOBILE
 *  5. MARCAÇÃO DO LINK ATIVO
 *  6. RENDERIZAÇÃO DE CASOS (cases.html)
 *  7. PÁGINA DE DETALHE DO CASE (case-detail.html)
 *  8. FOOTER — ANO DINÂMICO
 *  9. INICIALIZAÇÃO
 * ================================================================
 */


/* ----------------------------------------------------------------
   1. DADOS DOS CASES
   Fonte original: src/data/cases.ts
   Edite aqui para adicionar, remover ou alterar cases.
   ---------------------------------------------------------------- */
const cases = [
  {
    id: 'Transformacao operacional',
    title: 'Transformação digital',
    imageUrl: 'assets/CaseEmpresaEstetica.png',
    client: 'Empresa líder no setor de serviços de estética',
    description: 'Liderança na modernização do sistema de vendas omnichannel, integrando canais físicos e digitais.',
    tags: ['Service Cloud', 'Omnichannel', 'Salesforce', 'Scrum'],
    metrics: 'Aumento de +40% em retenção de clientes no BOT',
    context: 'Empresa líder no setor de serviços de estética enfrentava aumento acelerado de demanda operacional e comercial. O atendimento era realizado em múltiplas plataformas, gerando retrabalho, perda de produtividade e inconsistência no histórico de casos.',
    problem: 'A operação estava sobrecarregada e utilizava planilhas para consolidar informações antes de registrar nos sistemas, impactando diretamente o SLA e a qualidade do atendimento. A falta de padronização na tabulação prejudicava a confiabilidade dos dados, reduzindo a visibilidade estratégica do time comercial e aumentando riscos de reclamações e perda de receita.',
    objective: 'Centralizar o atendimento no Salesforce Service Cloud, garantindo visão 360º do cliente, aumento de produtividade, rastreabilidade completa de casos e geração de KPIs confiáveis. Reduzir atendimentos humanos por meio de retenção via BOT e criar uma base escalável e sustentável para suportar o crescimento da operação.',
    role: 'Atuei desde o discovery, conduzindo levantamento de requisitos com stakeholders e mapeamento completo dos processos em BPMN (as-is). Estruturei backlog e roadmap baseado em arquitetura e dependências técnicas, escrevendo épicos, histórias de usuário e critérios de aceite. Realizei alinhamento contínuo com áreas como Vendas, SAC, Retenção, Reembolso, Reclame Aqui e Jurídico. Conduzi homologações internas, apoiei o go-live e ministrei treinamentos presenciais. Gerenciei entregas, esforço e indicadores via Jira.',
    solution: 'Implementação do Salesforce Service Cloud com Case Management customizado por área, filas e roteamento via Omni-Channel. Reestruturação completa do BOT para fluxos de vendas e atendimento, incluindo automações para tabulação padronizada e direcionamento inteligente para filas específicas. Integração com Salesforce Data Cloud devido ao alto volume de dados (15M clientes e 35M registros), além de integrações com Snowflake e middleware proprietário para atualização em tempo real. Criação de automações e dashboards estratégicos com KPIs operacionais e comerciais.',
    results: [
      '+40% de retenção BOT',
      '25% de redução no tempo médio de resolução',
      'Aumento de 27 pontos no NPS',
      '30% de aumento na produtividade da equipe',
    ],
    tools: ['Salesforce Service Cloud', 'Jira', 'Bizagi', 'Miro', 'Marketing Cloud', "Data Cloud", "Snowflake"],
  },
  {
    id: 'app-financeiro-b2b',
    title: 'CRM Replacement',
    imageUrl: 'assets/CaseAutomotive.png',
    client: 'Segmento Automotivo',
    description: 'Transformação digital da operação de CRM no segmento automotivo, com substituição de sistema legado por uma arquitetura escalável em Salesforce, integrando vendas, pós-vendas e atendimento em uma jornada omnichannel orientada a dados e automação.',
    tags: ['Sales Cloud', 'Service Cloud', 'Salesforce', 'Scrum', 'CTI', 'WhatsApp Integration', 'ERP Integration', 'Treinamento'],
    metrics: '50k usuários ativos',
    context: 'A empresa atua no segmento automotivo, com foco em concessionárias de veículos, abrangendo operações de vendas, pós-vendas (serviços e manutenção), gestão de relacionamento com clientes (CRM) e estratégias de fidelização. Trata-se de uma operação com alto volume de clientes, múltiplos pontos de contato e forte dependência de processos comerciais e operacionais integrados. Nesse cenário, foi estruturada uma iniciativa de transformação digital com o objetivo de evoluir a operação por meio da implementação do Salesforce como plataforma central de relacionamento com o cliente. A estratégia do projeto foi organizada em três pilares: substituição (as-is), garantindo a continuidade operacional com a migração do sistema legado (Syonet); complementação, com a introdução de automações, integração multicanal e evolução do atendimento; e evolução, com a definição de uma visão futura orientada à expansão digital e novas capacidades tecnológicas. O projeto foi conduzido sob restrições relevantes, como a necessidade de entregas rápidas (até seis sprints iniciais) e priorização de funcionalidades de maior impacto, garantindo uma transição segura e progressiva.',
    problem: 'A operação era sustentada por um sistema legado com limitações significativas de escalabilidade, integração e evolução tecnológica. A ausência de uma visão unificada do cliente, aliada à baixa capacidade de automação, resultava em processos manuais, fragmentação entre áreas e alto risco de inconsistência de dados. As áreas de Vendas, Pós-vendas e Atendimento operavam de forma desconectada, sem continuidade na jornada do cliente, com baixa visibilidade de pipeline, dificuldades na priorização de leads e dependência de controles paralelos. Além disso, a limitação de integrações com sistemas críticos e canais digitais aumentava o retrabalho e o risco de perda de informações. Esse cenário impactava diretamente a performance comercial e a experiência do cliente, resultando em perda de oportunidades, aumento no tempo de resposta, baixa taxa de conversão e uma experiência inconsistente entre canais. Do ponto de vista estratégico, a empresa enfrentava dificuldades para escalar a operação e evoluir sua maturidade digital e analítica.O produto inicial tinha limitações técnicas e de usabilidade que impediam o crescimento escalável. Alta taxa de churn e baixo engajamento dos usuários.',
    objective: 'O objetivo principal do projeto foi conduzir a transformação digital da operação de CRM, substituindo o sistema legado por uma plataforma escalável e integrada, capaz de unificar a jornada do cliente e aumentar a eficiência comercial e operacional. A iniciativa buscou centralizar a jornada do cliente, automatizar processos, implementar uma estratégia omnichannel, melhorar a gestão de leads e elevar a experiência do cliente por meio de interações mais rápidas e personalizadas. Também teve como foco a evolução da maturidade de dados, com maior rastreabilidade e confiabilidade das informações, além da integração com sistemas críticos para garantir fluidez operacional. Como resultado esperado, o projeto visava aumentar conversão, produtividade e retenção, além de preparar a empresa para expansão digital e evolução contínua.',
    role: 'Atuei como Product Owner desde o início do projeto, conduzindo o discovery com stakeholders das áreas de Vendas, Pós-vendas, Atendimento, Marketing e TI. Estruturei o mapeamento completo das jornadas do cliente (as-is e to-be), utilizando BPMN com apoio do Bizagi, garantindo alinhamento entre negócio e tecnologia. Defini o MVP com base nos três pilares estratégicos do projeto e estruturei o backlog de forma progressiva, priorizando inicialmente a continuidade operacional e evoluindo para funcionalidades de maior valor. O roadmap foi planejado considerando entregas em até seis sprints, dependências técnicas e capacidade do time. A priorização foi conduzida com base em impacto no negócio, esforço técnico, dependências e riscos, utilizando práticas como matriz impacto vs esforço e alinhamentos frequentes com stakeholders. Atuei como principal ponte entre negócio e tecnologia, gerenciando stakeholders de múltiplas áreas e conduzindo rituais de alinhamento, demos e checkpoints executivos. Trabalhei de forma próxima ao time técnico, participando de decisões de arquitetura, viabilidade e integrações. Fui responsável pela escrita de histórias de usuário, definição de critérios de aceite e condução de refinamentos. Participei ativamente da homologação (UAT), planejamento de go-live e rollout incremental, garantindo qualidade e adoção da solução. Também atuei na gestão de riscos e conflitos, conduzindo decisões estratégicas sobre escopo, priorização e equilíbrio entre prazo, valor e viabilidade técnica.Atuei como PO principal, definindo a visão do produto, conduzindo discovery com usuários e priorizando o backlog com base em dados de uso e feedback direto. Ao final do projeto ministrei mais de 6 treinamento para 180 funcionários',
    solution: 'A solução foi construída com base no ecossistema Salesforce, utilizando Sales Cloud, Service Cloud, Marketing Cloud e Salesforce Maps para suportar a jornada completa do cliente. Também foram utilizados recursos de Digital Engagement e CTI para integração com canais digitais e telefonia. A jornada do cliente passou a ser totalmente integrada e omnichannel, com captação de leads por múltiplos canais, qualificação automatizada, distribuição inteligente e acompanhamento estruturado do pipeline. A transição para o pós-vendas passou a ocorrer de forma fluida, com histórico completo centralizado. Foram implementadas diversas automações, incluindo qualificação de leads via chatbot, distribuição automática, disparos de comunicações, criação de tarefas e abertura de casos, além de alertas baseados em eventos da jornada. O projeto contou com integrações estratégicas com o ERP Apolo, garantindo sincronização de dados e consistência operacional, além de integração com canais digitais como WhatsApp e e-mail. A estratégia omnichannel integrou todos os pontos de contato em um único ambiente, garantindo continuidade e contexto nas interações com clientes. A gestão de leads e pipeline foi estruturada com SLAs, priorização inteligente e acompanhamento em tempo real. Também foram criados dashboards estratégicos com indicadores de conversão, SLA, performance de equipes e comportamento do cliente, permitindo uma gestão orientada a dados.Redesign completo do app com foco em jobs-to-be-done, implementação de onboarding guiado, dashboard personalizado e integrações bancárias via Open Banking.',
    results: [
      '+30% conversão',
      '-50% tempo de resposta',
      '+40% produtividade',
      '+0.7 CSAT',
    ],
    tools: ['Salesforce Sales Cloud', 'Salesforce Service Cloud', 'Salesforce Marketing Cloud', 'Salesforce Maps', 'Digital Engagement (WhatsApp)', 'CTI (telefonia integrada)', 'Jira', 'Bizagi (modelagem de processos BPMN)', 'ERP Apolo (integrações)'],
  },

];


/* ----------------------------------------------------------------
   2. UTILITÁRIOS
   ---------------------------------------------------------------- */

/**
 * Cria um SVG inline simples por nome de ícone.
 * Como não usamos Lucide React, os ícones são SVGs inline
 * representando os principais ícones usados no projeto.
 * @param {string} name - Nome do ícone
 * @param {string} [cls] - Classes CSS adicionais
 * @returns {string} HTML do SVG
 */
function icon(name, cls = '') {
  const icons = {
    'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>`,
    'arrow-up-right': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/></svg>`,
    'arrow-left': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg>`,
    'target': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>`,
    'trending-up': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941"/></svg>`,
    'users': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/></svg>`,
    'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`,
    'lightbulb': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>`,
    'layout-dashboard': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>`,
    'bar-chart': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>`,
    'git-branch': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21 5.25 15m0 0L10.5 9m-5.25 6H18a2.25 2.25 0 0 0 0-4.5h-2.25"/></svg>`,
    'message-square': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/></svg>`,
    'wrench': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"/></svg>`,
    'linkedin': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>`,
    'mail': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>`,
    'github': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>`,
    'menu': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`,
    'x': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>`,
    'refresh': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>`,
    'kanban': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v7.5M3 8.25h18M3 12h18M3 15.75h18"/></svg>`,
    'file-text': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>`,
    'map': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/></svg>`,
    'clipboard': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/></svg>`,
    'pen-tool': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/></svg>`,
    'database': `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/></svg>`,
  };
  return icons[name] || '';
}

/**
 * Retorna a URL relativa correta dependendo do arquivo atual.
 * Assume que todos os HTMLs estão na mesma pasta (/html-version).
 * @param {string} page - Nome do arquivo html (ex: 'cases.html')
 * @returns {string}
 */
function pageUrl(page) {
  return page;
}


/* ----------------------------------------------------------------
   3. HEADER COM EFEITO DE SCROLL
   ---------------------------------------------------------------- */

/**
 * Inicializa o comportamento do header:
 * - Adiciona/remove a classe 'is-scrolled' com base no scroll
 * - Na página inicial (hero transparente), o header começa sem fundo
 */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add('is-scrolled');
      header.classList.remove('is-top');
    } else {
      header.classList.remove('is-scrolled');
      header.classList.add('is-top');
    }
  }

  // Define estado inicial
  updateHeader();

  // Escuta o evento de scroll
  window.addEventListener('scroll', updateHeader, { passive: true });
}


/* ----------------------------------------------------------------
   4. MENU MOBILE (HAMBURGUER)
   ---------------------------------------------------------------- */

/**
 * Inicializa o botão de menu mobile.
 * Alterna a classe 'is-open' no elemento do menu mobile.
 */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!btn || !mobileNav) return;

  btn.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('is-open');

    // Troca ícone hamburguer / X
    if (menuIcon) menuIcon.style.display = isOpen ? 'none' : 'block';
    if (closeIcon) closeIcon.style.display = isOpen ? 'block' : 'none';
  });

  // Fecha o menu ao clicar em um link
  const links = mobileNav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      if (menuIcon) menuIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    });
  });
}


/* ----------------------------------------------------------------
   5. MARCAÇÃO DO LINK ATIVO
   ---------------------------------------------------------------- */

/**
 * Marca o link de navegação correspondente à página atual como 'active'.
 * Compara o href do link com o nome do arquivo atual (pathname).
 */
function initActiveNavLinks() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Mapeia páginas para links ativos
  const pageMap = {
    'index.html': '/',
    '': '/',
    'cases.html': 'cases.html',
    'case-detail.html': 'cases.html',   // case-detail marca "Cases" como ativo
    'metodologia.html': 'metodologia.html',
    'contato.html': 'contato.html',
  };

  const activeHref = pageMap[currentPage] || '';

  // Desktop nav
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === activeHref || (activeHref === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile nav
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === activeHref || (activeHref === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}


/* ----------------------------------------------------------------
   6. RENDERIZAÇÃO DE CASOS (cases.html e index.html preview)
   ---------------------------------------------------------------- */

/**
 * Gera o HTML de um card de case.
 * @param {Object} caseItem - Objeto do case da array `cases`
 * @param {boolean} isPreview - Se true, usa link relativo simples
 * @returns {string} HTML do card
 */
function renderCaseCard(caseItem) {
  const tagsHtml = caseItem.tags.slice(0, 3).map(tag =>
    `<span class="badge badge-secondary">${tag}</span>`
  ).join('');

  const metricsHtml = caseItem.metrics
    ? `<div class="case-card-metrics">
         <p class="case-card-metrics-text"><strong>${caseItem.metrics}</strong></p>
       </div>`
    : '';

  // Se o case tiver imageUrl definido, exibe a foto; senão usa o placeholder com letra inicial
  const thumbHtml = caseItem.imageUrl
    ? `<img src="${caseItem.imageUrl}" alt="${caseItem.title}" style="width:100%;height:100%;object-fit:cover;display:block;" />`
    : `<div class="case-card-thumb-placeholder">
         <div class="case-card-thumb-icon">${caseItem.title.charAt(0)}</div>
       </div>`;

  return `
    <a href="case-detail.html?id=${caseItem.id}" class="case-card animate-fade-in-up">
      <div class="case-card-thumb">
        ${thumbHtml}
        <div class="case-card-thumb-overlay"></div>
        <div class="case-card-arrow">
          ${icon('arrow-up-right')}
        </div>
      </div>
      <div class="case-card-body">
        <p class="case-card-client">${caseItem.client}</p>
        <h3 class="case-card-title">${caseItem.title}</h3>
        <p class="case-card-desc">${caseItem.description}</p>
        <div class="tags">${tagsHtml}</div>
        ${metricsHtml}
      </div>
    </a>
  `;
}

/**
 * Renderiza todos os cases no container da página cases.html
 */
function renderCasesPage() {
  const container = document.getElementById('cases-grid');
  if (!container) return;

  container.innerHTML = cases.map(c => renderCaseCard(c)).join('');
}

/**
 * Renderiza o preview dos primeiros 3 cases na página index.html
 */
function renderCasesPreview() {
  const container = document.getElementById('cases-preview-grid');
  if (!container) return;

  const previewCases = cases.slice(0, 3);
  container.innerHTML = previewCases.map(c => renderCaseCard(c)).join('');
}


/* ----------------------------------------------------------------
   7. PÁGINA DE DETALHE DO CASE (case-detail.html)
   ---------------------------------------------------------------- */

/**
 * Lê o parâmetro `id` da query string da URL.
 * Exemplo: case-detail.html?id=app-financeiro-b2b → 'app-financeiro-b2b'
 * @returns {string|null}
 */
function getCaseIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/**
 * Renderiza a página de detalhe do case com base no `id` da URL.
 * Se o case não for encontrado, exibe mensagem de erro.
 */
function renderCaseDetail() {
  const container = document.getElementById('case-detail-content');
  if (!container) return;

  const id = getCaseIdFromUrl();
  const caseStudy = cases.find(c => c.id === id);

  if (!caseStudy) {
    // Case não encontrado
    container.innerHTML = `
      <div class="not-found-section">
        <div>
          <p class="not-found-code">404</p>
          <h1 class="not-found-title">Case não encontrado</h1>
          <p class="not-found-text">O case que você procura não existe ou foi removido.</p>
          <a href="cases.html" class="btn btn-outline-dark">
            ${icon('arrow-left', 'btn-icon')} Voltar para Cases
          </a>
        </div>
      </div>
    `;
    return;
  }

  // Atualiza o título da aba do navegador
  document.title = `${caseStudy.title} | Fernando Napoli`;

  // Gera tags
  const tagsHtml = caseStudy.tags.map(tag =>
    `<span class="badge badge-secondary">${tag}</span>`
  ).join('');

  // Gera resultados (sidebar)
  const resultsHtml = caseStudy.results.map(result => `
    <li class="result-item">
      ${icon('check-circle', 'result-icon')}
      <span class="result-text">${result}</span>
    </li>
  `).join('');

  // Gera ferramentas (sidebar)
  const toolsHtml = caseStudy.tools.map(tool =>
    `<span class="badge badge-outline">${tool}</span>`
  ).join('');

  container.innerHTML = `
    <!-- Voltar -->
    <a href="cases.html" class="back-link">
      ${icon('arrow-left')} Voltar para Cases
    </a>

    <!-- Cabeçalho do case -->
    <div class="page-header">
      <p class="case-client">${caseStudy.client}</p>
      <h1 class="case-title">${caseStudy.title}</h1>
      <p class="case-desc">${caseStudy.description}</p>
      <div class="tags">${tagsHtml}</div>
    </div>

    <!-- Grid: conteúdo principal + sidebar -->
    <div class="case-detail-grid">

      <!-- Conteúdo principal -->
      <div class="case-main-content">
        <section class="animate-fade-in-up">
          <h2 class="case-section-title">Contexto</h2>
          <p class="case-section-text">${caseStudy.context}</p>
        </section>
        <section class="animate-fade-in-up">
          <h2 class="case-section-title">Problema</h2>
          <p class="case-section-text">${caseStudy.problem}</p>
        </section>
        <section class="animate-fade-in-up">
          <h2 class="case-section-title">Objetivo</h2>
          <p class="case-section-text">${caseStudy.objective}</p>
        </section>
        <section class="animate-fade-in-up">
          <h2 class="case-section-title">Minha Atuação como PO</h2>
          <p class="case-section-text">${caseStudy.role}</p>
        </section>
        <section class="animate-fade-in-up">
          <h2 class="case-section-title">Solução</h2>
          <p class="case-section-text">${caseStudy.solution}</p>
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="case-sidebar">
        <!-- Resultados -->
        <div class="results-card animate-fade-in-up">
          <h3 class="results-card-title">Resultados</h3>
          <ul class="results-list">${resultsHtml}</ul>
        </div>

        <!-- Ferramentas -->
        <div class="tools-card animate-fade-in-up">
          <div class="tools-card-header">
            ${icon('wrench', 'tools-card-icon')}
            <h3 class="tools-card-title">Ferramentas</h3>
          </div>
          <div class="tags">${toolsHtml}</div>
        </div>
      </aside>

    </div>
  `;
}


/* ----------------------------------------------------------------
   8. FOOTER — ANO DINÂMICO
   ---------------------------------------------------------------- */

/**
 * Insere o ano atual no elemento com id="footer-year"
 */
function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}


/* ----------------------------------------------------------------
   9. INICIALIZAÇÃO
   Chamada ao carregar o DOM. Executa todas as funções acima
   dependendo dos elementos presentes na página.
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  // Sempre executados (header presente em todas as páginas)
  initHeader();
  initMobileMenu();
  initActiveNavLinks();
  initFooterYear();

  // Executado apenas na página de cases
  renderCasesPage();

  // Executado apenas na home (preview de cases)
  renderCasesPreview();

  // Executado apenas na página de detalhe do case
  renderCaseDetail();
});
