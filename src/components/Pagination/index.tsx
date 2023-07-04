import { Videos } from '@/utils/videos'
import React from 'react'

interface PaginationProps {
   length: number;
   pageSize: number;
   currentPage: number;
   onPageChange: (page: number) => void;
}

export default function Pagination({ length, pageSize, currentPage, onPageChange }: PaginationProps) {
   const pagesCount = Math.ceil(length / pageSize); // 100/10

   if (pagesCount === 1) return null;
   const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

   return (
      <div>
         {/* <ul className={styles.pagination}> */}
         <ul>
            {pages.map((page) => (
               // <li
               //    key={page}
               //    className={
               //       page === currentPage ? styles.pageItemActive : styles.pageItem
               //    }
               // >
               <li key={page}>
                  <a onClick={() => onPageChange(page)}>
                     {page}
                  </a>
                  {/* <a className={styles.pageLink} onClick={() => onPageChange(page)}>
                     {page}
                  </a> */}
               </li>
            ))}
         </ul>
      </div>
   );
};