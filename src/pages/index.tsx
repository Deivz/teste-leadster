import Button from "@/components/Button";
import FilterBar from "@/components/FilterBar";
import Pagination from "@/components/Pagination";
import VideoCard from "@/components/VideoCard";
import { FilterContext } from "@/contexts/FilterContext";
import { BenefitsContainer, HomeContainer, SloganContainer, VideosContainer } from "@/styles/pages/Home";
import { Video } from "@/utils/videos";
import { useContext, useState } from "react";

export default function Home() {

  const { filter, genresList, videos } = useContext(FilterContext);

  const [offset, setOffset] = useState(0);
  const itensPerPage = 9;

  const currentPageVideos = videos.slice(offset, offset + itensPerPage);
  
  return (
    <HomeContainer>
      <section>
        <SloganContainer>
          <span className="webinars">
            <h4>WEBINARS EXCLUSIVOS</h4>
          </span>
          <h3>Menos Conversinha,</h3>
          <div className="slogan">
            <img src="/images/asset-header.png" />
            <h2>Mais Conversão</h2>
          </div>
          <h5>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</h5>
        </SloganContainer>
      </section>
      <section>
        <VideosContainer>
          <FilterBar genres={genresList} />
          <div className="videos">
            {
              currentPageVideos
                .filter((video: Video) => !filter || video.genre.toUpperCase().includes(filter.toUpperCase()))
                .map((video: Video) => <VideoCard video={video} key={video.id} />)
            }
          </div>
        </VideosContainer>
        <Pagination itensPerPage={9} total={videos.length} offset={offset} setOffset={setOffset}/>
      </section>
      <section>
        <BenefitsContainer>
          <img
            src='/images/comparativo.png'
            alt='Gráfico de comparação de leads da Leadster com outras ferramentas. Leadster liderando com quase o dobro da segunda posição.'
          />
          <div className="info">
            <div className="text">
              <h3>Pronto para triplicar sua <strong>Geração de Leads?</strong></h3>
              <h4>Criação e ativação em <strong>4 minutos</strong>.</h4>
            </div>
            <div className="app">
              <div>
                <Button text="VER DEMONSTRAÇÃO" />
                <img
                  src='/images/selo_RD.png'
                  alt='Selo da RD Station que identifica a Leadster como top10 dos apps mais utilizados.'
                />
              </div>
            </div>
            <div className="extra">
              <div className="card">
                <img
                  src='/images/no-card-dark.webp'
                  alt="Icone com um cartão de crédito cortado, indicando que não há necessidade de cadastrar um cartão de crédito"
                />
                <h4><strong>Não</strong> é necessário Cartão de Crédito</h4>
              </div>
              <span className="pipe"> | </span>
              <div className="rating">
                <img
                  src='/images/rating.webp'
                  alt="Avaliação de 4.9 estrelas num total de 5."
                />
                <h4><strong>4.9/5</strong> média de satisfação</h4>
              </div>
            </div>
          </div>
        </BenefitsContainer>
      </section>
    </HomeContainer>
  )
}
