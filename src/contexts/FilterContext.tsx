import { FormEvent, createContext, useState, useEffect, useCallback } from "react";
import { Video, Videos, videos } from "@/utils/videos";

interface FilterContextProps {
   children: React.ReactNode;
}

export interface Genre {
   id: string;
   title: string;
}

interface FilterContextType {
   filter: string | undefined;
   setFilter: (value: string | undefined) => void;
   genresList: Genre[];
   videoList: Videos;
}

export const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export default function FilterContextProvider({ children }: FilterContextProps) {

   const [filter, setFilter] = useState<string>();
   const [genresList, setGenresList] = useState<Genre[]>([]);
   const [videoList, setVideoList] = useState<Videos>([]);

   const getGenresList = useCallback((videos: Videos): Genre[] => {
      const genres: Genre[] = [];
   
      for (let video of videos) {
         const hasGenre = genres.find((genre) => genre.title === video.genre);
   
         if (!hasGenre) {
            genres.push({ id: video.id, title: video.genre });
         }
      }
   
      return genres;
   }, [videos]);

   useEffect(() => {
      setVideoList(videos);
   }, []);

   useEffect(() => {
      // refatorar e usar reducers
      setGenresList(getGenresList(videos));
   }, [videos]);

   return (
      <FilterContext.Provider value={{ filter, genresList, setFilter, videoList }}>
         {children}
      </FilterContext.Provider>
   );
}