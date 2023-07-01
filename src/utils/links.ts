export type FooterLinks = Array<{
  title: string,
  itens: string[]
}>

export interface Links {
  title: string;
  itens: string[];
}

export const links: FooterLinks = [
  {
    title: 'Links Principais',
    itens: [
      'Home',
      'Ferramenta',
      'Preços',
      'Contato'
    ]
  },
  {
    title: 'Cases',
    itens: [
      'Geração de Leads B2B',
      'Geração de Leads em Software',
      'Geração de Leads em Imobiliária',
      'Cases de Sucesso'
    ]
  }
];