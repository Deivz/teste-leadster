export type FooterLinks = Array<{
  id: string;
  title: string,
  itens: string[]
}>

export interface Links {
  title: string;
  itens: string[];
}

export const links: FooterLinks = [
  {
    id: "1",
    title: 'Links Principais',
    itens: [
      'Home',
      'Ferramenta',
      'Preços',
      'Contato'
    ]
  },
  {
    id: "2",
    title: 'Cases',
    itens: [
      'Geração de Leads B2B',
      'Geração de Leads em Software',
      'Geração de Leads em Imobiliária',
      'Cases de Sucesso'
    ]
  },
  {
    id: "3",
    title: 'Materiais',
    itens: [
      'Blog',
      'Parceria com Agências',
      'Guia Definitivo do Marketing',
      'Materiais Gratuitos'
    ]
  },
  {
    id: "4",
    title: 'Siga a Leadster',
    itens: [
      'Redes Sociais',
      'E-mail: contato@leadster.com',
      'Telefone: (42) 98828-9851'
    ]
  }
];