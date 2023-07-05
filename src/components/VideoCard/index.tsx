import { VideoCardContainer } from '@/styles/components/VideoCard';
import { Video } from '@/utils/videos';
import Image from 'next/image'
import React from 'react'

interface VideoCardProp {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProp) {
  return (
    <VideoCardContainer>
      {/* descomentar para usar somente quando tiver uma qualidade de imagem mais alta, a
        descompressão do Image do Next removeu muita qualidade da imagem passada nos arquivos do teste */}
      {/* <Image src={imageUrl} width={362} height={204} alt='' />  */}
      <a target='_blank' href={video.url}>
        <img src={video.thumbnail} alt='' />
        <span>{video.title}</span>
      </a>
    </VideoCardContainer>
  )
}
