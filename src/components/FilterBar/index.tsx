import { MouseEventHandler, useContext } from 'react';
import { FilterContext, Genre } from '@/contexts/FilterContext';
import { FilterBarContainer } from '@/styles/components/FilterBar';

interface FilterBarProps {
  genres: Genre[];
  // onClick: MouseEventHandler<HTMLDivElement>;
}

export default function FilterBar({ genres }: FilterBarProps) {

  const { setFilter } = useContext(FilterContext);

  return (
    <FilterBarContainer>
      <ul>
        {
          genres.map((genre: Genre) => {
            return (
              <li key={genre.id} onClick={() => setFilter(genre.title)}>
                {genre.title}
              </li>
            );
          })
        }
      </ul>
    </FilterBarContainer>
  )
}