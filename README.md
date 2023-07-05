<p align="center">
<img src="https://github.com/Deivz/teste-leadster/assets/78604613/fd1ea859-c349-498d-8a68-f2691d1738a7" alt="Logo da Leadster" />
</p>

# Teste técnico Leadster

Repositório criado para o teste técnico realizado para vaga de Desenvolvedor Front-End Next na empresa Leadster.

Fora enviado uma lista de requisitos e uma imagem png com o layout da página, a fim de que fosse desenvolvido uma landing page com essas informações enviadas.

Seguem abaixo algumas imagens para ilustrar como ficou.

### Layout fornecido para desktop
<img src="https://github.com/Deivz/teste-leadster/assets/78604613/a7c44683-7e55-4981-b8d8-e3ecc890879c" alt="Imagem do projeto rodando em um browser desktop" />

## No que consiste o teste

Através da imagem enviada foi solicitado que os requisitos abaixo fossem atendidos:

- Uma landing page com o framework NextJS; :heavy_check_mark:
- Para a listagem de vídeos, use um arquivo de configuração {JSON} para alterar as urls dos vídeos; :heavy_check_mark:
- Abrir videos em modais; :x:
- Ser fiel ao layout; :heavy_check_mark:
- Utilização de padrões e de um código simples e autoexplicativo; :heavy_check_mark:
- HTML5 escrito da maneira semântica; :heavy_check_mark:
- Preocupação com a usabilidade da página; :heavy_check_mark:
- Styled Components; :heavy_check_mark:
- Layout responsivo; :heavy_check_mark:

Requisitos Opcionais:
- Aplicação de animações em CSS/JS quando possível; :x:
- Organização do projeto de modo que ele possa tomar uma proporção muito maior no futuro; :heavy_check_mark:
- Utilização de alguma metodologia para definição e organização do código; :heavy_check_mark:
- Organização e utilização de TypeScript; :heavy_check_mark:
- Testes. :x:


## Tecnologias e ferramentas utilizadas
### `Next`
Requisito fundamental para o teste.

### `TypeScript`
Por questão de produtividade e segurança durante o prócesso de desenvolvimento da aplicação, optei por TypeScript à JavaScript.
Ser avisado dos erros e possíveis erros antes de rodar o código é sempre vantajoso, tanto por questão de segurança quanto pela já mencionada produtividade.

### `Styled Components`
Requisito fundamental para o teste. Ainda que não fosse requisito, seria minha escolha, uma vez que facilita a implementação de estilos, permitindo o uso de props
e 'escrita de lógica no css'. Vale ressaltar também a possibilidade de escalabilidade do projeto.

### `React-icons`
Para a inclusão dos ícones das redes sociais.

### `React-Select`
Implementação de um input select pronto para a realização da ordenação dos vídeos.


## Escolhas de arquitetura, código e implementação
Como foi solicitado que projeto fosse uma landing page e que pudesse escalar futuramente, optei pela implementação de uma página default ao estilo SPA (visando usabilidade e performance).
Os diretórios foram separados visando ao máximo uma boa manutenibilidade e escalabilidade. Ficando então da seguinte forma:

<img src="https://github.com/Deivz/teste-leadster/assets/78604613/ed42cf60-586a-43f7-aa29-ddc7b37b924f" alt="Árvore de diretórios do projeto" />

A separação dos arquivos em pastas para componentes e pages, bem como seus estilos, visa aproveitar melhor do framework utilizado. Uma vez que o Next implementa rotas através do nesting no
diretório pages, deixando-o somente para fazer o roteamento permite o projeto crescer de forma que não quebre nada do que ja exista.

A utilização de contexto para lidar com o filtro visa evitar um problema conhecido como prop drilling e o ganho de performance e manutenibilidade (uma vez que o controle de estado através de props
se torna bastante inviável em um projeto que planeja escalar).

## Pontos de melhoria
### Multifiltros, busca dentre os itens filtrados, botão de limpar busca, ordenação e paginação
Não foi definido nada com relação aos filtros, então optei por fazê-lo de forma simples a fim de produtividade.

Um ponto de melhoria seria a criação de um campo de busca com botão para limpeza do campo. O motivo do levantamento deste ponto é promover facilidade
ao usuário em encontrar um vídeo específico que ele queira visualizar.

Quanto a páginação, ela foi implementada de forma incompleta. Ela separa os vídeos em páginas, entretanto ficou uma falha funcional onde o filtro atrapalha a paginação.
O motivo de mantê-la dessa forma na entrega do projeto foi puramente questão de tempo. Devido a dificuldade nos percusos e por se tratar de uma lógica levemente mais apurada
acabaria precisando demandar mais tempo pra fazê-la funcionar da forma correta, o que acarretaria na perda do prazo. Então parti pro "feito é melhor que perfeito" e preferi seguir assim,
ciente que foi não foi a melhor escolha (no cenário que me encontrei), mas uma escolha que precisava ser feita.

O motivo para a ordenação não ser entregue foi o mesmo da paginação.

A aplicação dos filtros encontra-se funcional, mas simples, sendo possível a aplicação de somente um filtro por vez. A listagem de filtros é feita mapeando quais gêneros de vídeo
estão sendo listados, removendo os repetidos e exebindo-os (lógica que também deveria ter sido implementada para a ordenação).

### Visualização de vídeos em modal
Os vídeos não estão sendo exibidos no modal, estão direcionando o usuário para o youtube em uma nova aba.
O motivo de não ter feito esta exibição em modal foi o mesmo da paginação e da ordenação (estas, apesar de não terem sido mencionadas nos requisitos são bastante óbvias ao olhar
para o layout do projeto que foi passado). Por conta de dificuldades na implementação do projeto, o tempo ficou escasso e mais uma vez optei por deixar pra tentar implementar esta funcionalidade
no último dia do prazo informado, entretanto o prazo chegou e não houve tempo suficiente para cumprir esta etapa, então optei por exibir o vídeo pelo youtube a fim de conseguir entregar o projeto
cumprindo com todos os outros requisitos solicitados.


## Desafios, dificuldades e superação
Por se tratar de um projeto relativamente simples, as maiores dificuldades encontradas foram listadas no tópico anterior: filtro, ordenação, paginação e exibição no modal.
Estas, infelizmente, não puderam ser contornadas 100%. O filtro ficou simples, mas funcional, a paginação funcionando com um certo problema (já relatado acima).A ordenação e a exibição do vídeo em modal não foram implementadas.

Outra dificuldade foi a não utilização de ferramentas como o figma e/ou photoshop para seguir como base para o layout. Adaptar um projeto vindo somente de um .png é bastante trabalhoso. Entretanto, como já passei
por situações assim em minha carreira (ainda bastante breve), pude lidar da melhor forma e entregar um layout que, ainda que possua suaves diferenças com o original, se assemelha bastante e acredito que de forma
satisfatória, cumprindo o requisito de fidelidade.

## Conclusão
Pude atender cerca de 90% dos requisitos solicitados e tem sido bastante gratificante participar deste processo seletivo.
Pude aprender diversas coisas novas, bem como ser exposto a um grande desafio, que acredito ter superado, ainda que não tenha sido em sua totalidade.
Independente do andamento do processo seletivo, finalizarei o projeto a fim de cumprir 100% do que fora pedido. No momento deixo em aberto por questão de avaliação no prazo estipulado,
assim que possível o finalizarei.

Por fim, o projeto pode ser visualizado na Vercel: https://teste-leadster-nine.vercel.app
