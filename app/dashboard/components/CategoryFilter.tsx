
// import React from 'react';

// type CategoryFilterProps = {
//   categories: string[];
//   onSelectCategory: (category: string) => void;
// };

// const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">Categories</h2>
//       <div className="flex flex-wrap gap-4">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//             onClick={() => onSelectCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryFilter;










// import React, { useCallback } from 'react';

// type CategoryFilterProps = {
//   categories: string[];
//   onSelectCategory: (category: string) => void;
// };

// const CategoryFilter: React.FC<CategoryFilterProps> = React.memo(({ categories, onSelectCategory }) => {
//   // Memoize the handler to avoid unnecessary re-renders
//   const handleCategorySelect = useCallback(
//     (category: string) => {
//       onSelectCategory(category);
//     },
//     [onSelectCategory] // Only re-create the handler if `onSelectCategory` changes
//   );

//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">Categories</h2>
//       <div className="flex flex-wrap gap-4">
//         {categories.map((category) => (
//           <button
//             key={category} // Use category name as a key instead of index
//             className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//             onClick={() => handleCategorySelect(category)} // Use the memoized function
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default CategoryFilter;




import React, { useCallback } from 'react';

type CategoryFilterProps = {
  categories: string[];
  onSelectCategory: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = React.memo(
  ({ categories, onSelectCategory }) => {
    // Memoize the handler to avoid unnecessary re-renders
    const handleCategorySelect = useCallback(
      (category: string) => {
        onSelectCategory(category);
      },
      [onSelectCategory] // Only re-create the handler if `onSelectCategory` changes
    );

    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category} // Use category name as a key instead of index
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              onClick={() => handleCategorySelect(category)} // Use the memoized function
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

// Set displayName explicitly to prevent the warning
CategoryFilter.displayName = 'CategoryFilter';

export default CategoryFilter;

