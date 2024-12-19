// "use client"
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import { RefreshCcw } from 'lucide-react';

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [page, setPage] = useState<number>(1);

//   useEffect(() => {
//     fetchWallpapers();
//   }, [page]);

//   const fetchWallpapers = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const newWallpapers = [
//         { title: 'Chakra Meditation', imageUrl: '/images/chakra.jpg' },
//         { title: 'Peaceful Nature', imageUrl: '/images/nature.jpg' },
//         { title: 'Zen Garden', imageUrl: '/images/zen.jpg' },
//         { title: 'Mountain Sunrise', imageUrl: '/images/mountain.jpg' },
//         { title: 'Ocean Serenity', imageUrl: '/images/ocean.jpg' },
//         { title: 'Forest Calm', imageUrl: '/images/forest.jpg' },
//       ];
//       setWallpapers(newWallpapers);
//       setLoading(false);
//     }, 1000);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.2,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
//       <Header />
//       <Search />

//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//       >
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-center dark:text-white">
//             Browse Wallpapers
//           </h2>
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={fetchWallpapers}
//             className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
//           >
//             <RefreshCcw size={20} />
//           </motion.button>
//         </div>
        
//         {loading ? (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex justify-center items-center h-64"
//           >
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </motion.div>
//         ) : (
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           >
//             {wallpapers.map((wallpaper, index) => (
//               <WallpaperCard
//                 key={index}
//                 title={wallpaper.title}
//                 imageUrl={wallpaper.imageUrl}
//                 altText={wallpaper.title}
//                 onClick={() => console.log('Wallpaper clicked!')}
//               />
//             ))}
//           </motion.div>
//         )}

//         {/* Pagination */}
//         <div className="flex justify-center mt-8 space-x-4">
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             disabled={page === 1}
//             onClick={() => setPage(page - 1)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
//           >
//             Previous
//           </motion.button>
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setPage(page + 1)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg"
//           >
//             Next
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Dashboard;















// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import { RefreshCcw } from 'lucide-react';

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<any[]>([]); // Default wallpapers
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<any[]>([]); // Search results state
//   const [searching, setSearching] = useState(false); // Track if we are in search mode

//   useEffect(() => {
//     fetchWallpapers(); // Fetch wallpapers when the component loads
//   }, []); // Empty dependency array to run only once on mount

//   const fetchWallpapers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch('/api/wallpapers'); // Fetch all wallpapers from your API endpoint
//       const data = await res.json();
//       if (res.ok) {
//         console.log(data); // Check the structure of the fetched data
//         setWallpapers(data); // Set default wallpapers
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: any[]) => {
//     setSearching(true); // Switch to search mode
//     setSearchResults(results); // Update search results state when search is triggered
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false); // Reset to dashboard mode
//     setSearchResults([]); // Clear search results
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.2,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
//       <Header />
//       <Search onSearch={handleSearchResults} /> {/* Pass handleSearchResults to Search component */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//       >
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-center dark:text-white">
//             Browse Wallpapers
//           </h2>
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={fetchWallpapers} // Refresh wallpapers on button click
//             className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
//           >
//             <RefreshCcw size={20} />
//           </motion.button>
//         </div>

//         {loading ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex justify-center items-center h-64"
//           >
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </motion.div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           >
//             {/* If searching, show search results or message */}
//             {searching ? (
//               searchResults.length > 0 ? (
//                 searchResults.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url} // Ensure this is the correct field name from the backend
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))
//               ) : (
//                 <div className="col-span-full text-center text-xl font-semibold text-gray-600 dark:text-gray-300">
//                   <p>Try Another Wallpaper</p>
//                   <motion.button
//                     whileTap={{ scale: 0.9 }}
//                     onClick={handleBackToDashboard} // Go back to dashboard
//                     className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </motion.button>
//                 </div>
//               )
//             ) : (
//               // Default wallpapers
//               wallpapers.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url} // Ensure this is the correct field name from the backend
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))
//             )}
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Dashboard;
















// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const itemsPerPage = 20;

//   useEffect(() => {
//     fetchWallpapers();
//   }, []);

//   const fetchWallpapers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch('/api/wallpapers');
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     // Ensure results is an array
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;

//   // Ensure displayItems is always an array before slicing
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-20 dark:opacity-10" 
//            style={{backgroundImage: "url('/spiritual-background.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-20 dark:opacity-10" 
//            style={{backgroundImage: "url('/spiritual-background.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Buttons */}
//         <div className="mb-4 flex justify-center space-x-4">
//           {['Lord Rama', 'Lord Krishna', 'Hanuman', 'Shiva', 'Mata Durga', 'Mata Kali', 'Fiction', 'Mythology', 'Spirituality', 'Ganesha'].map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full border-2 transition-all ${
//                 selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;














// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god'
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   // Mapping back from short names to full names (if needed for display purposes)
//   const reverseCategoryMap: { [key: string]: string } = Object.fromEntries(
//     Object.entries(categoryMap).map(([key, value]) => [value, key])
//   );

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-20 dark:opacity-10" 
//            style={{backgroundImage: "url('/spiritual-background.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Buttons */}
//         <div className="mb-4 flex justify-center space-x-4">
//           {['Lord Rama', 'Lord Krishna', 'Hanuman', 'Shiva', 'Mata Durga', 'Mata Kali', 'Fiction', 'Mythology', 'Spirituality', 'Ganesha'].map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(categoryMap[category] || '')}  // Set the short name
//               className={`px-4 py-2 rounded-full border-2 transition-all ${
//                 selectedCategory === categoryMap[category] ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-20 dark:opacity-10" 
//            style={{backgroundImage: "url('/spiritual-background.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold border-2 transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;












// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-20 dark:opacity-10" 
//            style={{backgroundImage: "url('/spiritual-background.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;













// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   // Handle category click
//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       // Deselect category and show all wallpapers
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-20 dark:opacity-10" 
//            style={{backgroundImage: "url('/spiritual-background.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
























// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   // Handle category click
//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       // Deselect category and show all wallpapers
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
      
//       {/* Fixed background image for the search area */}
//       <div className="relative z-10">
//         <Header />
        
//         {/* Search Area with Full Background Image */}
//         <div 
//           className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white z-20" 
//           style={{backgroundImage: "url('https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg')"}}
//         >
//           <Search 
//             onSearch={handleSearchResults} 
//             backgroundImage="/spiritual-background.jpg"
//           />
//         </div>

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;














// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   // Handle category click
//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       // Deselect category and show all wallpapers
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-70 dark:opacity-60" 
//            style={{backgroundImage: "url('https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




















// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   // Handle category click
//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       // Deselect category and show all wallpapers
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-70 dark:opacity-60" 
//            style={{backgroundImage: "url('https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



























// // Dashboard.tsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';
// import MotionDiv from './components/MotionDiv';  // Import the new MotionDiv component

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);  // Re-fetch wallpapers when category changes

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       // Add category to the API endpoint if a category is selected
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         console.error("Received invalid data format");
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch wallpapers", error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   // Handle category click
//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       // Deselect category and show all wallpapers
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <div className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center opacity-70 dark:opacity-60" 
//            style={{backgroundImage: "url('https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg')"}}></div>
      
//       <div className="relative z-10">
//         <Header />
//         <Search 
//           onSearch={handleSearchResults} 
//           backgroundImage="/spiritual-background.jpg"
//         />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <MotionDiv>
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </MotionDiv>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




















// "use client";
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head'; // Import Head for meta tags
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';
// import MotionDiv from './components/MotionDiv';

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   // Mapping full category names to short names
//   const categoryMap: { [key: string]: string } = {
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   };

//   useEffect(() => {
//     // Fetch wallpapers based on the selected category
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   // Determine which array to display based on search state
//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   // Paginate the items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   // Handle category click
//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
      
//       {/* Meta tags for SEO */}
//       <Head>
//         <title>DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds</title>
//         <meta name="description" content="Download high-quality spiritual wallpapers featuring Hindu gods like Shiva, Ram, Krishna, Hanuman, Durga, and more. Perfect for phones, tablets, and desktops." />
//         <meta name="keywords" content="Hindu god wallpapers, spiritual wallpapers, Shiva wallpapers, Ram wallpapers, Krishna, Ganesha, Hanuman, Durga, 4K wallpapers, phone wallpapers, HD wallpapers, Mahabharat, Ramayan" />
//         <meta name="author" content="DivineWall Team" />
//         <meta property="og:title" content="DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds" />
//         <meta property="og:description" content="Browse and download divine spiritual wallpapers of Hindu gods like Shiva, Krishna, Ram, Hanuman, and more. Available in 4K and HD quality." />
//         <meta property="og:image" content="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />
//         <meta property="og:image:alt" content="Hindu god wallpaper" />
//         <meta property="og:url" content="https://divinewall.in" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds" />
//         <meta name="twitter:description" content="Explore and download spiritual wallpapers of Hindu gods in high resolution. Wallpapers featuring Shiva, Krishna, Ram, Hanuman, Durga, and more." />
//         <meta name="twitter:image" content="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />
//         <link rel="canonical" href="https://divinewall.in" />

//         {/* Structured Data (optional) */}
//         <script type="application/ld+json">
//           {`
//             {
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": "DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds",
//               "description": "Download beautiful Hindu god wallpapers featuring deities such as Shiva, Ram, Krishna, Hanuman, Durga, and more.",
//               "url": "https://divinewall.in",
//               "mainEntityOfPage": "https://divinewall.in",
//               "image": "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg"
//             }
//           `}
//         </script>
//       </Head>

//       {/* Page content */}
//       <div className="relative z-10">
//         <Header />
//         <Search onSearch={handleSearchResults} backgroundImage="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <MotionDiv>
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </MotionDiv>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



























// "use client";
// import React, { useState, useEffect, useMemo } from 'react';
// import Head from 'next/head'; // Import Head for meta tags
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';
// import MotionDiv from './components/MotionDiv';
// import Image from 'next/image'; // Optimized image loading

// // Define a type for wallpapers
// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');  // New state for selected category
//   const itemsPerPage = 20;

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory]);

//   const fetchWallpapers = async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
      
//       {/* Meta tags for SEO */}
//       <Head>
//         <title>DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds</title>
//         <meta name="description" content="Download high-quality spiritual wallpapers featuring Hindu gods like Shiva, Ram, Krishna, Hanuman, Durga, and more. Perfect for phones, tablets, and desktops." />
//         <meta name="keywords" content="Hindu god wallpapers, spiritual wallpapers, Shiva wallpapers, Ram wallpapers, Krishna, Ganesha, Hanuman, Durga, 4K wallpapers, phone wallpapers, HD wallpapers, Mahabharat, Ramayan" />
//         <meta name="author" content="DivineWall Team" />
//         <meta property="og:title" content="DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds" />
//         <meta property="og:description" content="Browse and download divine spiritual wallpapers of Hindu gods like Shiva, Krishna, Ram, Hanuman, and more. Available in 4K and HD quality." />
//         <meta property="og:image" content="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />
//         <meta property="og:image:alt" content="Hindu god wallpaper" />
//         <meta property="og:url" content="https://divinewall.in" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds" />
//         <meta name="twitter:description" content="Explore and download spiritual wallpapers of Hindu gods in high resolution. Wallpapers featuring Shiva, Krishna, Ram, Hanuman, Durga, and more." />
//         <meta name="twitter:image" content="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />
//         <link rel="canonical" href="https://divinewall.in" />

//         {/* Structured Data (optional) */}
//         <script type="application/ld+json">
//           {`
//             {
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": "DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds",
//               "description": "Download beautiful Hindu god wallpapers featuring deities such as Shiva, Ram, Krishna, Hanuman, Durga, and more.",
//               "url": "https://divinewall.in",
//               "mainEntityOfPage": "https://divinewall.in",
//               "image": "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg"
//             }
//           `}
//         </script>
//       </Head>

//       {/* Page content */}
//       <div className="relative z-10">
//         <Header />
//         <Search onSearch={handleSearchResults} backgroundImage="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />

//         {/* Category Filter Section */}
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                   selectedCategory === categoryMap[category] 
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//                 } hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <MotionDiv>
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button 
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </MotionDiv>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






















// "use client"
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import Head from 'next/head';
// import Header from './components/Header';
// import WallpaperCard from './components/WallpaperCard';
// import Search from './components/Search';
// import Pagination from './components/Pagination';
// import MotionDiv from './components/MotionDiv';

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const itemsPerPage = 20;

//   // Define the category map with a string index signature
//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.log(error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearchResults = (results: Wallpaper[]) => {
//     setSearching(true);
//     setSearchResults(Array.isArray(results) ? results : []);
//     setCurrentPage(1);
//   };

//   const handleBackToDashboard = () => {
//     setSearching(false);
//     setSearchResults([]);
//     setCurrentPage(1);
//   };

//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem), [safeDisplayItems, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e8edf3] dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-white">
//       <Head>
//         <title>DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds</title>
//         <meta name="description" content="Download high-quality spiritual wallpapers featuring Hindu gods like Shiva, Ram, Krishna, Hanuman, Durga, and more. Perfect for phones, tablets, and desktops." />
//         <meta name="keywords" content="Hindu god wallpapers, spiritual wallpapers, Shiva wallpapers, Ram wallpapers, Krishna, Ganesha, Hanuman, Durga, 4K wallpapers, phone wallpapers, HD wallpapers, Mahabharat, Ramayan" />
//         <meta name="author" content="DivineWall Team" />
//         <meta property="og:title" content="DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds" />
//         <meta property="og:description" content="Browse and download divine spiritual wallpapers of Hindu gods like Shiva, Krishna, Ram, Hanuman, and more. Available in 4K and HD quality." />
//         <meta property="og:image" content="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />
//         <meta property="og:image:alt" content="Hindu god wallpaper" />
//         <meta property="og:url" content="https://divinewall.in" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="DivineWall - Hindu God Wallpapers & 4K HD Spiritual Backgrounds" />
//         <meta name="twitter:description" content="Explore and download spiritual wallpapers of Hindu gods in high resolution. Wallpapers featuring Shiva, Krishna, Ram, Hanuman, Durga, and more." />
//         <meta name="twitter:image" content="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />
//         <link rel="canonical" href="https://divinewall.in" />
//       </Head>

//       <div className="relative z-10">
//         <Header />
//         <Search onSearch={handleSearchResults} backgroundImage="https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg" />

//         <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//           <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {Object.keys(categoryMap).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                 className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${selectedCategory === categoryMap[category] ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'} hover:scale-105`}>
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <MotionDiv>
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                 {currentItems.map((wallpaper, index) => (
//                   <WallpaperCard
//                     key={wallpaper.id || index}
//                     title={wallpaper.title}
//                     imageUrl={wallpaper.image_url}
//                     category={wallpaper.category || 'Spiritual'}
//                     resolution={wallpaper.resolution || '4K'}
//                     onClick={() => console.log('Wallpaper clicked!')}
//                   />
//                 ))}
//               </div>

//               {safeDisplayItems.length > itemsPerPage && (
//                 <Pagination
//                   itemsPerPage={itemsPerPage}
//                   totalItems={safeDisplayItems.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               )}

//               {searching && safeDisplayItems.length === 0 && (
//                 <div className="text-center py-12">
//                   <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
//                     No wallpapers found
//                   </h2>
//                   <button
//                     onClick={handleBackToDashboard}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//                   >
//                     Back to Dashboard
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </MotionDiv>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
























// "use client"
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import Head from 'next/head';
// import { Search as SearchIcon } from 'lucide-react';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = () => {
//     // Implement search logic here
//     console.log('Searching for:', searchTerm);
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem), [safeDisplayItems, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
//       {/* Top Background Image with Search */}
//       <div 
//         className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 w-full max-w-2xl px-4">
//           <div className="flex">
//             <input 
//               type="text" 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search wallpapers..." 
//               className="w-full px-4 py-3 rounded-l-lg text-lg focus:outline-none"
//             />
//             <button 
//               onClick={handleSearch}
//               className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition"
//             >
//               <SearchIcon size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category] 
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {safeDisplayItems.length > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={safeDisplayItems.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



















// "use client"
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import Head from 'next/head';
// import { Search as SearchIcon, ChevronDown } from 'lucide-react';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = () => {
//     // Implement search logic here
//     console.log('Searching for:', searchTerm);
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//     setIsCategoryDropdownOpen(false);
//   };

//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem), [safeDisplayItems, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
//       {/* Top Background Image with Glass Search */}
//       <div 
//         className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 w-full max-w-2xl px-4">
//           <div className="flex">
//             <div className="relative w-full">
//               <input 
//                 type="text" 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search wallpapers..." 
//                 className="w-full px-4 py-3 pl-10 bg-white/30 backdrop-blur-lg border border-white/20 rounded-l-lg text-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <SearchIcon 
//                 size={24} 
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" 
//               />
//             </div>
//             <button 
//               onClick={handleSearch}
//               className="bg-white/30 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-r-lg hover:bg-white/40 transition"
//             >
//               <SearchIcon size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section with Glass Effect */}
//       <div className="relative container mx-auto px-4 mt-6">
//         <div 
//           className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
//           onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
//         >
//           <div className="flex justify-between items-center cursor-pointer">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//               {selectedCategory 
//                 ? `Category: ${Object.keys(categoryMap).find(key => categoryMap[key] === selectedCategory) || 'Selected'}` 
//                 : 'Select Category'}
//             </h2>
//             <ChevronDown 
//               size={24} 
//               className={`text-gray-800 dark:text-white transition-transform ${
//                 isCategoryDropdownOpen ? 'rotate-180' : ''
//               }`} 
//             />
//           </div>

//           {isCategoryDropdownOpen && (
//             <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-4">
//               {Object.keys(categoryMap).map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => handleCategoryClick(categoryMap[category] || '')}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                     selectedCategory === categoryMap[category] 
//                       ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
//                       : 'bg-white/20 backdrop-blur-lg border border-white/20 text-gray-800 dark:text-white hover:bg-white/30'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4 mt-6">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {safeDisplayItems.length > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={safeDisplayItems.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






















// "use client"
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import Head from 'next/head';
// import { Search as SearchIcon } from 'lucide-react';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = () => {
//     // Implement search logic here
//     console.log('Searching for:', searchTerm);
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem), [safeDisplayItems, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
//       {/* Top Background Image with Glass Search */}
//       <div 
//         className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 w-full max-w-2xl px-4">
//           <div className="flex">
//             <div className="relative w-full">
//               <input 
//                 type="text" 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search wallpapers..." 
//                 className="w-full px-4 py-3 pl-10 bg-white/30 backdrop-blur-lg border border-white/20 rounded-l-lg text-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <SearchIcon 
//                 size={24} 
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" 
//               />
//             </div>
//             <button 
//               onClick={handleSearch}
//               className="bg-white/30 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-r-lg hover:bg-white/40 transition"
//             >
//               <SearchIcon size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category] 
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {safeDisplayItems.length > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={safeDisplayItems.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

















// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import Head from 'next/head';
// import { Search as SearchIcon } from 'lucide-react';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Dark mode state
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = () => {
//     console.log('Searching for:', searchTerm);
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem), [safeDisplayItems, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors`}>
//       {/* Top Background Image with Glass Search */}
//       <div
//         className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 w-full max-w-2xl px-4">
//           <div className="flex">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search wallpapers..."
//                 className="w-full px-4 py-3 pl-10 bg-white/30 backdrop-blur-lg border border-white/20 rounded-l-lg text-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <SearchIcon
//                 size={24}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
//               />
//             </div>
//             <button
//               onClick={handleSearch}
//               className="bg-white/30 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-r-lg hover:bg-white/40 transition"
//             >
//               <SearchIcon size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Dark/Light Theme Toggle */}
//       <div className="absolute top-5 right-5 z-10">
//         <button
//           onClick={toggleTheme}
//           className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-800 dark:text-white"
//         >
//           {isDarkMode ? '🌞' : '🌙'}
//         </button>
//       </div>

//       {/* Categories Section */}
//       <div className={`rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
//         <h2 className={`text-center text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {safeDisplayItems.length > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={safeDisplayItems.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

































// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import Head from 'next/head';
// import { Search as SearchIcon } from 'lucide-react';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header'; // Import Header component

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchResults, setSearchResults] = useState<Wallpaper[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searching, setSearching] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = () => {
//     console.log('Searching for:', searchTerm);
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   const displayItems = searching ? searchResults : wallpapers;
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem), [safeDisplayItems, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       {/* Include the Header component */}
//       <Header />

//       {/* Top Background Image with Glass Search */}
//       <div
//         className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 w-full max-w-2xl px-4">
//           <div className="flex">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search wallpapers..."
//                 className="w-full px-4 py-3 pl-10 bg-white/30 backdrop-blur-lg border border-white/20 rounded-l-lg text-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <SearchIcon
//                 size={24}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
//               />
//             </div>
//             <button
//               onClick={handleSearch}
//               className="bg-white/30 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-r-lg hover:bg-white/40 transition"
//             >
//               <SearchIcon size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-white dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {safeDisplayItems.length > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={safeDisplayItems.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





















// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Search as SearchIcon } from 'lucide-react';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header'; // Import Header component

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//       } else {
//         setWallpapers([]);
//       }
//     } catch (error) {
//       console.log(error);
//       setWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = () => {
//     console.log('Searching for:', searchTerm);
//     // Ideally, implement search logic here
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   const displayItems = wallpapers;  // Directly use wallpapers (searching functionality removed for now)
//   const safeDisplayItems = Array.isArray(displayItems) ? displayItems : [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => safeDisplayItems.slice(indexOfFirstItem, indexOfLastItem), [safeDisplayItems, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       {/* Include the Header component */}
//       <Header />

//       {/* Top Background Image with Glass Search */}
//       <div
//         className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 w-full max-w-2xl px-4">
//           <div className="flex">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search wallpapers..."
//                 className="w-full px-4 py-3 pl-10 bg-white/30 backdrop-blur-lg border border-white/20 rounded-l-lg text-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <SearchIcon
//                 size={24}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
//               />
//             </div>
//             <button
//               onClick={handleSearch}
//               className="bg-white/30 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-r-lg hover:bg-white/40 transition"
//             >
//               <SearchIcon size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {safeDisplayItems.length > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={safeDisplayItems.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




















// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header';
// import Search from './components/Search';

// type Wallpaper = {
//   id?: string;
//   title: string;
//   image_url: string;
//   category?: string;
//   resolution?: string;
// };

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [displayWallpapers, setDisplayWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
//       if (res.ok && Array.isArray(data)) {
//         setWallpapers(data);
//         setDisplayWallpapers(data);
//       } else {
//         setWallpapers([]);
//         setDisplayWallpapers([]);
//       }
//     } catch (error) {
//       console.error(error);
//       setWallpapers([]);
//       setDisplayWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = (results: Wallpaper[]) => {
//     setDisplayWallpapers(results);
//     setCurrentPage(1); // Reset to first page after search
//     setSelectedCategory(''); // Clear any selected category
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//     } else {
//       setSelectedCategory(category);
//       // When a category is selected, reset search results to category results
//       const categoryWallpapers = wallpapers.filter(
//         wp => wp.category === category
//       );
//       setDisplayWallpapers(categoryWallpapers);
//     }
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = useMemo(() => 
//     displayWallpapers.slice(indexOfFirstItem, indexOfLastItem), 
//     [displayWallpapers, indexOfFirstItem, indexOfLastItem]
//   );

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       <Header />

//       <Search 
//         onSearch={handleSearch} 
//         backgroundImage={backgroundImage} 
//       />

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   imageUrl={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {displayWallpapers.length > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={displayWallpapers.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





















// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Wallpaper } from './types/Wallpaper';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header';
// import Search from './components/Search';

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [displayWallpapers, setDisplayWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
      
//       // Ensure data is an array of Wallpapers
//       const safeData: Wallpaper[] = Array.isArray(data) ? data : [];
      
//       setWallpapers(safeData);
//       setDisplayWallpapers(safeData);
//     } catch (error) {
//       console.error(error);
//       setWallpapers([]);
//       setDisplayWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = (results: Wallpaper[]) => {
//     // Ensure results is an array of Wallpapers
//     const safeResults: Wallpaper[] = Array.isArray(results) ? results : [];
    
//     setDisplayWallpapers(safeResults);
//     setCurrentPage(1); // Reset to first page after search
//     setSelectedCategory(''); // Clear any selected category
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//       setDisplayWallpapers(wallpapers);
//     } else {
//       setSelectedCategory(category);
//       // When a category is selected, reset search results to category results
//       const categoryWallpapers = wallpapers.filter(
//         wp => wp.category === category
//       );
//       setDisplayWallpapers(categoryWallpapers);
//     }
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
//   const currentItems = useMemo(() => {
//     // Ensure displayWallpapers is an array before slicing
//     const safeDisplayWallpapers = Array.isArray(displayWallpapers) 
//       ? displayWallpapers 
//       : [];
    
//     return safeDisplayWallpapers.slice(indexOfFirstItem, indexOfLastItem);
//   }, [displayWallpapers, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       <Header />

//       <Search 
//         onSearch={handleSearch} 
//         backgroundImage={backgroundImage} 
//       />

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//               {currentItems.map((wallpaper, index) => (
//                 <WallpaperCard
//                   key={wallpaper.id || index}
//                   title={wallpaper.title}
//                   image_url={wallpaper.image_url}
//                   category={wallpaper.category || 'Spiritual'}
//                   resolution={wallpaper.resolution || '4K'}
//                   onClick={() => console.log('Wallpaper clicked!')}
//                 />
//               ))}
//             </div>

//             {(displayWallpapers?.length || 0) > itemsPerPage && (
//               <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={displayWallpapers.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;













// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Wallpaper } from './types/Wallpaper';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header';
// import Search from './components/Search';
// import Link from 'next/link'; // Import Link component from next.js

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [displayWallpapers, setDisplayWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
      
//       const safeData: Wallpaper[] = Array.isArray(data) ? data : [];
      
//       setWallpapers(safeData);
//       setDisplayWallpapers(safeData);
//     } catch (error) {
//       console.error(error);
//       setWallpapers([]);
//       setDisplayWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = (results: Wallpaper[]) => {
//     const safeResults: Wallpaper[] = Array.isArray(results) ? results : [];
    
//     setDisplayWallpapers(safeResults);
//     setCurrentPage(1); // Reset to first page after search
//     setSelectedCategory(''); // Clear any selected category
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//       setDisplayWallpapers(wallpapers);
//     } else {
//       setSelectedCategory(category);
//       const categoryWallpapers = wallpapers.filter(
//         wp => wp.category === category
//       );
//       setDisplayWallpapers(categoryWallpapers);
//     }
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
//   const currentItems = useMemo(() => {
//     const safeDisplayWallpapers = Array.isArray(displayWallpapers) 
//       ? displayWallpapers 
//       : [];
    
//     return safeDisplayWallpapers.slice(indexOfFirstItem, indexOfLastItem);
//   }, [displayWallpapers, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       <Header />

//       <Search 
//         onSearch={handleSearch} 
//         backgroundImage={backgroundImage} 
//       />

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//           </div>
//         ) : (
//           <>
//             {displayWallpapers.length === 0 ? (
//               <div className="text-center py-10">
//                 <p className="text-xl font-semibold text-gray-800 dark:text-white">
//                   No Wallpaper Found. Try Another Wallpaper.
//                 </p>
//                 <Link href="/dashboard" passHref>
//                   <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">
//                     Back to Dashboard
//                   </button>
//                 </Link>
//               </div>
//             ) : (
//               <>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                   {currentItems.map((wallpaper, index) => (
//                     <WallpaperCard
//                       key={wallpaper.id || index}
//                       title={wallpaper.title}
//                       image_url={wallpaper.image_url}
//                       category={wallpaper.category || 'Spiritual'}
//                       resolution={wallpaper.resolution || '4K'}
//                       onClick={() => console.log('Wallpaper clicked!')}
//                     />
//                   ))}
//                 </div>

//                 {(displayWallpapers?.length || 0) > itemsPerPage && (
//                   <Pagination
//                     itemsPerPage={itemsPerPage}
//                     totalItems={displayWallpapers.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                   />
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


















// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Wallpaper } from './types/Wallpaper';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header';
// import Search from './components/Search';
// import Link from 'next/link'; // Import Link component from next.js

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [displayWallpapers, setDisplayWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
      
//       const safeData: Wallpaper[] = Array.isArray(data) ? data : [];
      
//       setWallpapers(safeData);
//       setDisplayWallpapers(safeData);
//     } catch (error) {
//       console.error(error);
//       setWallpapers([]);
//       setDisplayWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = (results: Wallpaper[]) => {
//     const safeResults: Wallpaper[] = Array.isArray(results) ? results : [];
//     setDisplayWallpapers(safeResults);
//     setCurrentPage(1); // Reset to first page after search
//     setSelectedCategory(''); // Clear any selected category
//   };

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory('');
//       setDisplayWallpapers(wallpapers);
//     } else {
//       setSelectedCategory(category);
//       const categoryWallpapers = wallpapers.filter(
//         wp => wp.category === category
//       );
//       setDisplayWallpapers(categoryWallpapers);
//     }
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
//   const currentItems = useMemo(() => {
//     const safeDisplayWallpapers = Array.isArray(displayWallpapers) 
//       ? displayWallpapers 
//       : [];
    
//     return safeDisplayWallpapers.slice(indexOfFirstItem, indexOfLastItem);
//   }, [displayWallpapers, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       <Header />
//       <Search 
//         onSearch={handleSearch} 
//         backgroundImage={backgroundImage} 
//       />

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             <p className="ml-4 text-gray-600 dark:text-gray-300">Searching for divine inspiration...</p>
//           </div>
//         ) : (
//           <>
//             {displayWallpapers.length === 0 ? (
//               <div className="text-center py-10">
//                 <p className="text-xl font-semibold text-gray-800 dark:text-white">
//                   No Wallpaper Found. Try Another Wallpaper.
//                 </p>
//                 <Link href="/dashboard" passHref>
//                   <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">
//                     Back to Dashboard
//                   </button>
//                 </Link>
//               </div>
//             ) : (
//               <>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                   {currentItems.map((wallpaper, index) => (
//                     <WallpaperCard
//                       key={wallpaper.id || index}
//                       title={wallpaper.title}
//                       image_url={wallpaper.image_url}
//                       category={wallpaper.category || 'Spiritual'}
//                       resolution={wallpaper.resolution || '4K'}
//                       onClick={() => console.log('Wallpaper clicked!')}
//                     />
//                   ))}
//                 </div>

//                 {(displayWallpapers?.length || 0) > itemsPerPage && (
//                   <Pagination
//                     itemsPerPage={itemsPerPage}
//                     totalItems={displayWallpapers.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                   />
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

















// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Wallpaper } from './types/Wallpaper';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header';
// import Search from './components/Search';
// import Link from 'next/link'; // Import Link component from next.js

// const Dashboard = () => {
//   const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
//   const [displayWallpapers, setDisplayWallpapers] = useState<Wallpaper[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
      
//       const safeData: Wallpaper[] = Array.isArray(data) ? data : [];
      
//       setWallpapers(safeData);
//       setDisplayWallpapers(safeData);
//     } catch (error) {
//       console.error(error);
//       setWallpapers([]);
//       setDisplayWallpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = (results: Wallpaper[]) => {
//     const safeResults: Wallpaper[] = Array.isArray(results) ? results : [];
//     setDisplayWallpapers(safeResults);
//     setCurrentPage(1); // Reset to first page after search
//     setSelectedCategory(''); // Clear any selected category
//   };

//   const handleCategoryClick = (category: string) => {
//     // Simply set the selected category. fetchWallpapers will be called automatically via useEffect.
//     setSelectedCategory(category);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
//   const currentItems = useMemo(() => {
//     const safeDisplayWallpapers = Array.isArray(displayWallpapers) 
//       ? displayWallpapers 
//       : [];
    
//     return safeDisplayWallpapers.slice(indexOfFirstItem, indexOfLastItem);
//   }, [displayWallpapers, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       <Header />
//       <Search 
//         onSearch={handleSearch} 
//         backgroundImage={backgroundImage} 
//       />

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             <p className="ml-4 text-gray-600 dark:text-gray-300">Searching for divine inspiration...</p>
//           </div>
//         ) : (
//           <>
//             {displayWallpapers.length === 0 ? (
//               <div className="text-center py-10">
//                 <p className="text-xl font-semibold text-gray-800 dark:text-white">
//                   No Wallpaper Found. Try Another Wallpaper.
//                 </p>
//                 <Link href="/dashboard" passHref>
//                   <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">
//                     Back to Dashboard
//                   </button>
//                 </Link>
//               </div>
//             ) : (
//               <>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                   {currentItems.map((wallpaper, index) => (
//                     <WallpaperCard
//                       key={wallpaper.id || index}
//                       title={wallpaper.title}
//                       image_url={wallpaper.image_url}
//                       category={wallpaper.category || 'Spiritual'}
//                       resolution={wallpaper.resolution || '4K'}
//                       onClick={() => console.log('Wallpaper clicked!')}
//                     />
//                   ))}
//                 </div>

//                 {(displayWallpapers?.length || 0) > itemsPerPage && (
//                   <Pagination
//                     itemsPerPage={itemsPerPage}
//                     totalItems={displayWallpapers.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                   />
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

















// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Wallpaper } from './types/Wallpaper';
// import WallpaperCard from './components/WallpaperCard';
// import Pagination from './components/Pagination';
// import Header from './components/Header';
// import Search from './components/Search';
// import Link from 'next/link'; // Import Link component from next.js

// const Dashboard = () => {
//   const [displayWallpapers, setDisplayWallpapers] = useState<Wallpaper[]>([]); // Removed wallpapers state
//   const [loading, setLoading] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const itemsPerPage = 20;

//   const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";

//   const categoryMap: { [key: string]: string } = useMemo(() => ({
//     'Lord Rama': 'ram',
//     'Lord Krishna': 'krishna',
//     'All God': 'all_god',
//     'Hanuman': 'hanuman',
//     'Shiva': 'shiva',
//     'Mata Durga': 'durga',
//     'Mata Kali': 'kali',
//     'Fiction': 'fiction',
//     'Mythology': 'mythology',
//     'Spirituality': 'spirituality',
//     'Ganesha': 'ganesha',
//     'Monsters': 'monsters',
//     'Mahabharat': 'mahabharat',
//     'Ramayan': 'ramayan',
//   }), []);

//   const fetchWallpapers = useCallback(async (category: string) => {
//     setLoading(true);
//     try {
//       const url = category ? `/api/wallpapers/category?category=${category}` : '/api/wallpapers';
//       const res = await fetch(url);
//       const data = await res.json();
      
//       const safeData: Wallpaper[] = Array.isArray(data) ? data : [];
      
//       setDisplayWallpapers(safeData); // Directly updating displayWallpapers
//     } catch (error) {
//       console.error(error);
//       setDisplayWallpapers([]); // Reset to an empty array in case of an error
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWallpapers(selectedCategory);
//   }, [selectedCategory, fetchWallpapers]);

//   const handleSearch = (results: Wallpaper[]) => {
//     const safeResults: Wallpaper[] = Array.isArray(results) ? results : [];
//     setDisplayWallpapers(safeResults);
//     setCurrentPage(1); // Reset to first page after search
//     setSelectedCategory(''); // Clear any selected category
//   };

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category); // Simply set the selected category. fetchWallpapers will be called automatically via useEffect.
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
//   const currentItems = useMemo(() => {
//     const safeDisplayWallpapers = Array.isArray(displayWallpapers) 
//       ? displayWallpapers 
//       : [];
    
//     return safeDisplayWallpapers.slice(indexOfFirstItem, indexOfLastItem);
//   }, [displayWallpapers, indexOfFirstItem, indexOfLastItem]);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
//       <Header />
//       <Search 
//         onSearch={handleSearch} 
//         backgroundImage={backgroundImage} 
//       />

//       {/* Categories Section */}
//       <div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Object.keys(categoryMap).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(categoryMap[category] || '')}
//               className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
//                 selectedCategory === categoryMap[category]
//                   ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
//                   : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
//               } hover:scale-105`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Wallpapers Grid */}
//       <div className="container mx-auto px-4">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
//             <p className="ml-4 text-gray-600 dark:text-gray-300">Searching for divine inspiration...</p>
//           </div>
//         ) : (
//           <>
//             {displayWallpapers.length === 0 ? (
//               <div className="text-center py-10">
//                 <p className="text-xl font-semibold text-gray-800 dark:text-white">
//                   No Wallpaper Found. Try Another Wallpaper.
//                 </p>
//                 <Link href="/dashboard" passHref>
//                   <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">
//                     Back to Dashboard
//                   </button>
//                 </Link>
//               </div>
//             ) : (
//               <>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//                   {currentItems.map((wallpaper, index) => (
//                     <WallpaperCard
//                       key={wallpaper.id || index}
//                       title={wallpaper.title}
//                       image_url={wallpaper.image_url}
//                       category={wallpaper.category || 'Spiritual'}
//                       resolution={wallpaper.resolution || '4K'}
//                       onClick={() => console.log('Wallpaper clicked!')}
//                     />
//                   ))}
//                 </div>

//                 {(displayWallpapers?.length || 0) > itemsPerPage && (
//                   <Pagination
//                     itemsPerPage={itemsPerPage}
//                     totalItems={displayWallpapers.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                   />
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

















"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Wallpaper } from './types/Wallpaper';
import WallpaperCard from './components/WallpaperCard';
import Pagination from './components/Pagination';
import Header from './components/Header';
import Search from './components/Search';

const Dashboard = () => {
  const [displayWallpapers, setDisplayWallpapers] = useState<Wallpaper[]>([]);
  const [originalWallpapers, setOriginalWallpapers] = useState<Wallpaper[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const itemsPerPage = 20;

  const backgroundImage = "https://d3tj4iy39yo2dk.cloudfront.net/public/ram/rama1.jpg";



  const categoryMap: { [key: string]: string } = useMemo(() => ({
    'Lord Rama': 'ram',
    'Lord Krishna': 'krishna',
    'Kalki Avatar': 'kalki',
    'All God': 'all_god',
    'Hanuman': 'hanuman',
    'Shiva': 'shiva',
    'Mata Durga': 'durga',
    'Mata Kali': 'kali',
    'Fiction': 'fiction',
    'Mythology': 'mythology',
    'Spirituality': 'spirituality',
    'Ganesha': 'ganesha',
    'Monsters': 'monsters',
    'Mahabharat': 'mahabharat',
    'Ramayan': 'ramayan',
    'God V Robot': 'god_vs_robot'

  }), []);

  const fetchWallpapers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/wallpapers');
      const data = await res.json();
      
      const safeData: Wallpaper[] = Array.isArray(data) ? data : [];
      
      setOriginalWallpapers(safeData);
      setDisplayWallpapers(safeData);
    } catch (error) {
      console.error(error);
      setOriginalWallpapers([]);
      setDisplayWallpapers([]); 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWallpapers();
  }, [fetchWallpapers]);

  // New category filtering logic
  useEffect(() => {
    if (selectedCategory) {
      const filteredWallpapers = originalWallpapers.filter(wallpaper => 
        wallpaper.category === selectedCategory
      );
      setDisplayWallpapers(filteredWallpapers);
      setCurrentPage(1);
    } else {
      setDisplayWallpapers(originalWallpapers);
    }
  }, [selectedCategory, originalWallpapers]);

  const handleSearch = (results: Wallpaper[]) => {
    const safeResults: Wallpaper[] = Array.isArray(results) ? results : [];
    setDisplayWallpapers(safeResults);
    setCurrentPage(1);
    setSelectedCategory('');
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = useMemo(() => {
    const safeDisplayWallpapers = Array.isArray(displayWallpapers) 
      ? displayWallpapers 
      : [];
    
    return safeDisplayWallpapers.slice(indexOfFirstItem, indexOfLastItem);
  }, [displayWallpapers, indexOfFirstItem, indexOfLastItem]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Header />
      <Search 
        onSearch={handleSearch} 
        backgroundImage={backgroundImage} 
      />

     {/* Categories Section */}
<div className="rounded-xl p-6 mb-8 mt-4 mx-auto max-w-4xl bg-gray-100 dark:bg-slate-800">
  <h2 className="text-center text-2xl font-extrabold text-gray-800 dark:text-white mb-6">Categories</h2>
  <div className="flex flex-wrap justify-center gap-6">
    {Object.keys(categoryMap).map((category) => (
      <button
        key={category}
        onClick={() => handleCategoryClick(categoryMap[category] || '')}
        className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 transform ${
          selectedCategory === categoryMap[category]
            ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg scale-105 hover:scale-110'
            : 'bg-white text-gray-800 border-2 border-transparent hover:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:border-indigo-400 hover:shadow-md hover:scale-105'
        } focus:outline-none hover:cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400`}
      >
        {category}
      </button>
    ))}
  </div>
</div>


      {/* Wallpapers Grid */}
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            <p className="ml-4 text-gray-600 dark:text-gray-300">Searching for divine inspiration...</p>
          </div>
        ) : (
          <>
            {displayWallpapers.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  No Wallpaper Found. Try Another Category.
                </p>
                <button 
                  onClick={() => setSelectedCategory('')}
                  className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg"
                >
                  Reset Categories
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  {currentItems.map((wallpaper, index) => (
                    <WallpaperCard
                      key={wallpaper.id || index}
                      title={wallpaper.title}
                      image_url={wallpaper.image_url}
                      category={wallpaper.category || 'Spiritual'}
                      resolution={wallpaper.resolution || '4K'}
                      onClick={() => console.log('Wallpaper clicked!')}
                    />
                  ))}
                </div>

                {(displayWallpapers?.length || 0) > itemsPerPage && (
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={displayWallpapers.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;