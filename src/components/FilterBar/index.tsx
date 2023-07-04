import Select from 'react-select';
import { useContext } from 'react';
import { FilterContext, Genre } from '@/contexts/FilterContext';
import { FilterBarContainer } from '@/styles/components/FilterBar';

interface FilterBarProps {
  genres: Genre[];
}

//remover codigo abaixo apos teste e inserir valores dos filtros
const options = [
  { value: 'data', label: 'Data de Publicação' },
  { value: 'emAlta', label: 'Em alta' }
]

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
      <Select options={options} className='select' />
    </FilterBarContainer>
  )
}