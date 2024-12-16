// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search as SearchIcon } from 'lucide-react';
// import { useRouter } from 'next/router';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const router = useRouter();

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query) return;

//     setLoading(true);
//     setError(null);

//     try {
//       // Fetch search results from the backend
//       const res = await fetch(`/api/search?query=${query}`);
//       const data = await res.json();

//       if (res.ok) {
//         setResults(data);
//       } else {
//         setError(data.error || 'An error occurred while searching');
//       }
//     } catch (error) {
//       setError('An error occurred while searching');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
//     >
//       <form onSubmit={handleSearch} className="relative w-full">
//         <motion.div
//           animate={{
//             scale: isFocused ? 1.02 : 1,
//             boxShadow: isFocused
//               ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
//               : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//           }}
//           transition={{ duration: 0.2 }}
//           className="flex items-center bg-white dark:bg-slate-800 rounded-full overflow-hidden shadow-md"
//         >
//           <div className="absolute left-5 text-gray-400 dark:text-gray-300">
//             <SearchIcon size={24} />
//           </div>
//           <input
//             type="text"
//             placeholder="Search for spiritual wallpapers..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//             className="w-full py-4 pl-14 pr-4 text-lg text-gray-800 dark:text-white dark:bg-slate-800 focus:outline-none"
//           />
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-4 hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
//           >
//             Search
//           </motion.button>
//         </motion.div>
//       </form>

//       {/* Display loading state */}
//       {loading && <div className="text-center mt-4 text-gray-500">Loading...</div>}

//       {/* Display error message */}
//       {error && <div className="text-center mt-4 text-red-500">{error}</div>}

//       {/* Display search results */}
//       {results && results.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Search Results</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {results.map((wallpaper: any) => (
//               <div key={wallpaper.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
//                 <img
//                   src={wallpaper.image_url}
//                   alt={wallpaper.title}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{wallpaper.title}</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{wallpaper.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Display no results found */}
//       {results && results.length === 0 && (
//         <div className="text-center mt-4 text-gray-500">No wallpapers found matching your search.</div>
//       )}
//     </motion.div>
//   );
// };

// export default Search;












// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search as SearchIcon } from 'lucide-react';
// import { useRouter } from 'next/router';

// const Search = ({ onSearch }: { onSearch: (results: any[]) => void }) => { // Accept onSearch as a prop
//   const [query, setQuery] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query) return;

//     setLoading(true);
//     setError(null);

//     try {
//       // Fetch search results from the backend
//       const res = await fetch(`/api/search?query=${query}`);
//       const data = await res.json();

//       if (res.ok) {
//         setResults(data);
//         onSearch(data); // Pass results back to parent component (Dashboard)
//       } else {
//         setError(data.error || 'An error occurred while searching');
//         onSearch([]); // Pass empty results on error
//       }
//     } catch (error) {
//       setError('An error occurred while searching');
//       onSearch([]); // Pass empty results on error
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
//     >
//       <form onSubmit={handleSearch} className="relative w-full">
//         <motion.div
//           animate={{
//             scale: isFocused ? 1.02 : 1,
//             boxShadow: isFocused
//               ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
//               : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//           }}
//           transition={{ duration: 0.2 }}
//           className="flex items-center bg-white dark:bg-slate-800 rounded-full overflow-hidden shadow-md"
//         >
//           <div className="absolute left-5 text-gray-400 dark:text-gray-300">
//             <SearchIcon size={24} />
//           </div>
//           <input
//             type="text"
//             placeholder="Search for wallpapers..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//             className="w-full py-4 pl-14 pr-4 text-lg text-gray-800 dark:text-white dark:bg-slate-800 focus:outline-none"
//           />
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-4 hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
//           >
//             Search
//           </motion.button>
//         </motion.div>
//       </form>
//     </motion.div>
//   );
// };

// export default Search;











// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search as SearchIcon } from 'lucide-react';

// const Search = ({ onSearch }: { onSearch: (results: any[]) => void }) => {
//   const [query, setQuery] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(`/api/search?query=${query}`);
//       const data = await res.json();

//       if (res.ok) {
//         onSearch(data); // Pass results back to parent component (Dashboard)
//       } else {
//         setError(data.error || 'An error occurred while searching');
//         onSearch([]); // Pass empty results on error
//       }
//     } catch (error) {
//       setError('An error occurred while searching');
//       onSearch([]); // Pass empty results on error
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
//     >
//       <form onSubmit={handleSearch} className="relative w-full">
//         <motion.div
//           animate={{
//             scale: isFocused ? 1.02 : 1,
//             boxShadow: isFocused
//               ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
//               : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//           }}
//           transition={{ duration: 0.2 }}
//           className="flex items-center bg-white dark:bg-slate-800 rounded-full overflow-hidden shadow-md"
//         >
//           <div className="absolute left-5 text-gray-400 dark:text-gray-300">
//             <SearchIcon size={20} />
//           </div>
//           <input
//             type="text"
//             className="w-full pl-12 pr-4 py-2 text-lg text-gray-700 dark:text-white bg-transparent border-none focus:outline-none"
//             placeholder="Search for wallpapers..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//           />
//         </motion.div>
//       </form>

//       {loading && (
//         <div className="mt-4 text-center text-gray-500">Loading...</div>
//       )}

//       {error && (
//         <div className="mt-4 text-center text-red-500">{error}</div>
//       )}
//     </motion.div>
//   );
// };

// export default Search;




















// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search as SearchIcon } from 'lucide-react';

// const Search = ({ 
//   onSearch, 
//   backgroundImage 
// }: { 
//   onSearch: (results: any[]) => void, 
//   backgroundImage?: string 
// }) => {
//   const [query, setQuery] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(`/api/search?query=${query}`);
//       const data = await res.json();

//       if (res.ok) {
//         onSearch(data);
//       } else {
//         setError(data.error || 'An error occurred while searching');
//         onSearch([]);
//       }
//     } catch (error) {
//       setError('An error occurred while searching');
//       onSearch([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="relative h-[50vh] flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70 dark:to-slate-900/70"></div>
      
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="relative z-10 w-full max-w-3xl px-4"
//       >
//         <form onSubmit={handleSearch} className="w-full">
//           <motion.div
//             animate={{
//               scale: isFocused ? 1.02 : 1,
//               boxShadow: isFocused
//                 ? '0 15px 30px -10px rgba(0, 0, 0, 0.2)'
//                 : '0 10px 25px -15px rgba(0, 0, 0, 0.1)',
//             }}
//             transition={{ duration: 0.2 }}
//             className="flex items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full overflow-hidden shadow-xl"
//           >
//             <div className="absolute left-5 text-gray-500 dark:text-gray-300">
//               <SearchIcon size={24} />
//             </div>
//             <input
//               type="text"
//               className="w-full pl-14 pr-4 py-4 text-xl text-gray-800 dark:text-white bg-transparent border-none focus:outline-none"
//               placeholder="Search for spiritual wallpapers..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onFocus={() => setIsFocused(true)}
//               onBlur={() => setIsFocused(false)}
//             />
//           </motion.div>
//         </form>

//         {loading && (
//           <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
//             Searching for divine inspiration...
//           </div>
//         )}

//         {error && (
//           <div className="mt-4 text-center text-red-500">{error}</div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Search;




















import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';

const Search = ({ onSearch, backgroundImage }: { onSearch: (results: any[]) => void; backgroundImage?: string }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debouncing the search query to limit the number of API requests
  const debouncedQuery = useMemo(() => {
    const timer = setTimeout(() => {
      if (query) {
        handleSearch();
      }
    }, 500); // 500ms debounce delay
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = useCallback(async () => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?query=${query}`);
      const data = await res.json();

      if (res.ok) {
        onSearch(data);
      } else {
        setError(data.error || 'An error occurred while searching');
        onSearch([]);
      }
    } catch (error) {
      setError('An error occurred while searching');
      onSearch([]);
    } finally {
      setLoading(false);
    }
  }, [query, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setError(null); // Clear error when the user starts typing again
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className="relative h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-slate-900/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-3xl px-4"
      >
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <motion.div
            animate={{
              scale: isFocused ? 1.02 : 1,
              boxShadow: isFocused
                ? '0 15px 30px -10px rgba(0, 0, 0, 0.2)'
                : '0 10px 25px -15px rgba(0, 0, 0, 0.1)',
            }}
            transition={{ duration: 0.2 }}
            className="flex items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full overflow-hidden shadow-xl"
          >
            <div className="absolute left-5 text-gray-500 dark:text-gray-300">
              <SearchIcon size={24} />
            </div>
            <input
              type="text"
              className="w-full pl-14 pr-4 py-4 text-xl text-gray-800 dark:text-white bg-transparent border-none focus:outline-none"
              placeholder="Search for spiritual wallpapers..."
              value={query}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </motion.div>
        </form>

        {loading && (
          <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Searching for divine inspiration...
          </div>
        )}

        {error && (
          <div className="mt-4 text-center text-red-500">{error}</div>
        )}
      </motion.div>
    </div>
  );
};

export default Search;
