// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface PaginationProps {
//   itemsPerPage: number;
//   totalItems: number;
//   paginate: (pageNumber: number) => void;
//   currentPage: number;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   itemsPerPage,
//   totalItems,
//   paginate,
//   currentPage
// }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="flex justify-center items-center space-x-2 mt-8">
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={() => paginate(currentPage - 1)}
//         disabled={currentPage === 1}
//         className={`p-2 rounded-full ${
//           currentPage === 1 
//             ? 'text-gray-300 cursor-not-allowed' 
//             : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700'
//         }`}
//       >
//         <ChevronLeft size={24} />
//       </motion.button>

//       {pageNumbers.map(number => (
//         <motion.button
//           key={number}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => paginate(number)}
//           className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
//             currentPage === number 
//               ? 'bg-blue-600 text-white' 
//               : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700'
//           }`}
//         >
//           {number}
//         </motion.button>
//       ))}

//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={() => paginate(currentPage + 1)}
//         disabled={currentPage === pageNumbers.length}
//         className={`p-2 rounded-full ${
//           currentPage === pageNumbers.length 
//             ? 'text-gray-300 cursor-not-allowed' 
//             : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700'
//         }`}
//       >
//         <ChevronRight size={24} />
//       </motion.button>
//     </nav>
//   );
// };

// export default Pagination;













import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Memoize the page numbers to avoid unnecessary recalculation
  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [itemsPerPage, totalItems, totalPages]);

  const handlePrevClick = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      {/* Prev Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700'
        }`}
      >
        <ChevronLeft size={24} />
      </motion.button>

      {/* Page Number Buttons */}
      {pageNumbers.map((number) => (
        <motion.button
          key={number}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(number)}
          className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
            currentPage === number
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700'
          }`}
        >
          {number}
        </motion.button>
      ))}

      {/* Next Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700'
        }`}
      >
        <ChevronRight size={24} />
      </motion.button>
    </nav>
  );
};

export default Pagination;
