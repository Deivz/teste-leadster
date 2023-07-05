import { PaginationContainer } from '@/styles/components/Pagination';
import React, { Dispatch, SetStateAction } from 'react'

interface PaginationProps {
   itensPerPage: number;
   total: number;
   offset: number;
   setOffset: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ itensPerPage, total, offset, setOffset }: PaginationProps) {

   let pageNumber: number = 0;
   const MAX_BUTTONS_SHOWN: number = 9;
   const MAX_BUTTONS_LEFT: number = (MAX_BUTTONS_SHOWN - 1) / 2;
   const currentPage = offset ? (offset / itensPerPage) + 1 : 1;
   const pages = Math.ceil(total / itensPerPage);
   const firstButton = Math.max(currentPage - MAX_BUTTONS_LEFT, 1);

   function onPageChange(page: number) {
      const newOffset = (page - 1) * itensPerPage;
      setOffset(newOffset);
   }

   return (
      <PaginationContainer>
         <span>Página</span>
         <ul>
            {/* {
               Array.from({ length: Math.min(MAX_BUTTONS_SHOWN, pages)}).map((_, index) => {
                  pageNumber = index + firstButton;
                  return (
                     <li>
                        <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
                     </li>
                  )
               })
            } */}
            {Array.from({ length: Math.min(MAX_BUTTONS_SHOWN, pages) }).map((_, index) => {
               const page = index + 1;
               const isCurrentPage = offset === (page - 1) * itensPerPage;
               const handleClick = () => {
                  if (!isCurrentPage) {
                     onPageChange(page);
                  }
               };
               return (
                  <button
                     key={index}
                     onClick={handleClick}
                     disabled={isCurrentPage}
                  >
                     {page}
                  </button>
               );
            })}
         </ul>
      </PaginationContainer>
   );
};