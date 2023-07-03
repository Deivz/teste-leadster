import { FormEvent, createContext, useState, useEffect } from "react";
import { Video, Videos, videos } from "@/utils/videos";

interface FilterContextProps {
   children: React.ReactNode;
}

interface FilterContextType {
   applyFilter: (event: FormEvent) => void;
   filter: string | undefined;
   setFilter: (value: string | undefined) => void;
}

export const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export default function FilterContextProvider({ children }: FilterContextProps) {

   const [filter, setFilter] = useState<string>();
   const [videoList, setVideoList] = useState<Videos[]>([]);

   function applyFilter(evento: FormEvent) {
      evento.preventDefault();
   }

   useEffect(() => {
      setVideoList((previous) => {
         return [...previous, videos]  
      });
      console.log(videoList);
   }, []);

   return (
      <FilterContext.Provider value={{ applyFilter, filter, setFilter }}>
         {children}
      </FilterContext.Provider>
   );
}