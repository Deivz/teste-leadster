export type Videos = Video[];

export interface Video {
  id: string;
  title: string;
  url: string;
  genre: string;
  thumbnail: string;
}

export const videos = [
  {
    id: '1',
    title: 'Como surgiu a Leadster e os desafios de Empreender na área de Tecnologia',
    url: 'https://www.youtube.com/watch?v=EW6QAM4ypVE&list=PL_dirAhLkFrvB5KbzDA0wPqXiUhlehTRF&index=2&ab_channel=Leadster-MarketingConversacional',
    genre: 'Geração de Leads',
    thumbnail: 'images/thumbnail.png'
  },
  {
    id: '2',
    title: 'Estratégias de curto e longo prazo no Marketing Digital',
    url: 'https://www.youtube.com/watch?v=PHAfkczqlMY&list=PL_dirAhLkFrvB5KbzDA0wPqXiUhlehTRF&index=3&ab_channel=Leadster-MarketingConversacional',
    genre: 'Geração de Leads',
    thumbnail: 'images/thumbnail.png'
  },
  {
    id: '3',
    title: 'Mercado, Produto, Modelo e Canais - O Mix de variáveis do Marketing Digital',
    url: 'https://www.youtube.com/watch?v=aT88TbvdPEY&list=PL_dirAhLkFrvB5KbzDA0wPqXiUhlehTRF&index=4&ab_channel=Leadster-MarketingConversacional',
    genre: 'Geração de Leads',
    thumbnail: 'images/thumbnail.png'
  },
  {
    id: '4',
    title: 'Model-Channel Fit: Entenda em quais canais atuar a partir do seu Modelo de Negócio',
    url: 'https://www.youtube.com/watch?v=EW6QAM4ypVE&list=PL_dirAhLkFrvB5KbzDA0wPqXiUhlehTRF&index=5&ab_channel=Leadster-MarketingConversacional',
    genre: 'Marketing Digital',
    thumbnail: 'images/thumbnail.png'
  },
  {
    id: '5',
    title: 'Product-Market Fit: O que é e por que sua Startup precisa dele para sobreviver?',
    url: 'https://www.youtube.com/watch?v=EW6QAM4ypVE&list=PL_dirAhLkFrvB5KbzDA0wPqXiUhlehTRF&index=6&ab_channel=Leadster-MarketingConversacional',
    genre: 'Agências',
    thumbnail: 'images/thumbnail.png'
  }
]