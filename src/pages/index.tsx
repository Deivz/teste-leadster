import Button from "@/components/Button";
import FilterBar from "@/components/FilterBar";
import VideoCard from "@/components/VideoCard";
import { FilterContext } from "@/contexts/FilterContext";
import { DivContainer } from "@/styles/components/DefaultPage";
import { AppContainer, HomeContainer, InfosContainer, SloganContainer, TextContainer, VideoContainer } from "@/styles/pages/Home";
import { Video } from "@/utils/videos";
import { useContext } from "react";

export default function Home() {

  const { filter, genresList, videoList } = useContext(FilterContext)

  return (
    <HomeContainer>
      <section>
        <DivContainer isLarge={true} className="container__conversion">
          <span className="container__webinars">
            <h4>WEBINARS EXCLUSIVOS</h4>
          </span>
          <h3>Menos Conversinha,</h3>
          <SloganContainer>
            <img src="/images/asset-header.png" />
            <h2>Mais Conversão</h2>
          </SloganContainer>
          <h5>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</h5>
        </DivContainer>
      </section>
      <section>
        <DivContainer>
          <FilterBar genres={genresList} />
          <VideoContainer>
            {
              videoList.map((video: Video) => <VideoCard video={video} />)
            }
            {
              (filter === undefined)
                ?
                videoList.map((video: Video) => <VideoCard video={video} key={video.id} />)
                :
                videoList?.map((video: Video) => {
                  if (video.genre.toUpperCase().includes(filter.toUpperCase())
                  ) {
                    return <VideoCard video={video} key={video.id} />
                  }
                })
            }
          </VideoContainer>
        </DivContainer>
      </section>
      <section>
        <DivContainer isLarge={true}>
          <img
            className="container__image"
            src='/images/comparativo.png'
            alt='Gráfico de comparação de leads da Leadster com outras ferramentas. Leadster liderando com quase o dobro da segunda posição.'
          />
          <div className="container__info">
            <TextContainer>
              <h3>Pronto para triplicar sua <strong>Geração de Leads?</strong></h3>
              <h4>Criação e ativação em <strong>4 minutos</strong>.</h4>
            </TextContainer>
            <AppContainer>
              <div>
                <Button text="VER DEMONSTRAÇÃO" />
                <img
                  src='/images/selo_RD.png'
                  alt='Selo da RD Station que identifica a Leadster como top10 dos apps mais utilizados.'
                />
              </div>
            </AppContainer>
            <InfosContainer>
              <div className="container__card">
                <img
                  src='/images/no-card-dark.webp'
                  alt="Icone com um cartão de crédito cortado, indicando que não há necessidade de cadastrar um cartão de crédito"
                />
                <h4><strong>Não</strong> é necessário Cartão de Crédito</h4>
              </div>
              <span className="pipe"> | </span>
              <div className="container__rating">
                <img
                  src='/images/rating.webp'
                  alt="Avaliação de 4.9 estrelas num total de 5."
                />
                <h4><strong>4.9/5</strong> média de satisfação</h4>
              </div>
            </InfosContainer>
          </div>
        </DivContainer>
      </section>
    </HomeContainer>
  )
}
