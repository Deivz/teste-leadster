import { FilterBarContainer } from '@/styles/components/FilterBar';
import { Video, Videos } from '@/utils/videos';

interface FilterBarProps {
  videos: Videos;
}

export default function FilterBar({ videos }: FilterBarProps) {

  return (
    <FilterBarContainer>
      <ul>
        {
          videos.map((video: Video) => {
            return (
              <li key={video.id}>{video.title}</li>
            );
          })
        }
      </ul>
    </FilterBarContainer>
  )
}