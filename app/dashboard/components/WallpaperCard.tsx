// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Download, Heart } from 'lucide-react';

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   onClick: () => void; // Removed altText from the props
// };

// const WallpaperCard = ({ title, imageUrl, onClick }: WallpaperCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//       whileHover={{ 
//         scale: 1.05,
//         transition: { duration: 0.2 }
//       }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
//     >
//       <div className="relative">
//         {/* Removed altText from the Image component */}
//         <Image 
//           src={imageUrl} 
//           width={400} 
//           height={300} 
//           className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
//           alt='images'
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-4">
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             className="bg-white dark:bg-slate-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//             onClick={(e) => {
//               e.stopPropagation();
//               // Download logic
//             }}
//           >
//             <Download className="text-gray-700 dark:text-white" size={20} />
//           </motion.button>
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             className="bg-white dark:bg-slate-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//             onClick={(e) => {
//               e.stopPropagation();
//               // Favorite logic
//             }}
//           >
//             <Heart className="text-gray-700 dark:text-white" size={20} />
//           </motion.button>
//         </div>
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// };

// export default WallpaperCard;

















// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Download, Heart } from 'lucide-react';

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   onClick: () => void; // Removed altText from the props
// };

// const WallpaperCard = ({ title, imageUrl, onClick }: WallpaperCardProps) => {
//   if (!imageUrl) {
//     return null; // Prevent rendering the card if the imageUrl is invalid
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//       whileHover={{
//         scale: 1.05,
//         transition: { duration: 0.2 },
//       }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
//     >
//       <div className="relative">
//         {/* Render the image only if the imageUrl is valid */}
//         <Image
//           src={imageUrl || '/path/to/fallback-image.jpg'} // Fallback image URL if imageUrl is empty
//           width={400}
//           height={300}
//           className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
//           alt={title}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-4">
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             className="bg-white dark:bg-slate-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//             onClick={(e) => {
//               e.stopPropagation();
//               // Download logic
//             }}
//           >
//             <Download className="text-gray-700 dark:text-white" size={20} />
//           </motion.button>
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             className="bg-white dark:bg-slate-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//             onClick={(e) => {
//               e.stopPropagation();
//               // Favorite logic
//             }}
//           >
//             <Heart className="text-gray-700 dark:text-white" size={20} />
//           </motion.button>
//         </div>
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{title}</h3>
//       </div>
//     </motion.div>
//   );
// };

// export default WallpaperCard;









// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Download, Heart, Expand } from 'lucide-react';

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual', 
//   onClick 
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   if (!imageUrl) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="relative group"
//     >
//       <div 
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//       >
//         {/* Background Image */}
//         <div className="relative w-full aspect-[3/4] overflow-hidden">
//           <Image
//             src={imageUrl}
//             alt={title}
//             fill
//             className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//           />
          
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>

//         {/* Hover Overlay */}
//         <AnimatePresence>
//           {isHovered && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//             >
//               <motion.button
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   // Download logic
//                 }}
//               >
//                 <Download className="text-white" size={24} />
//               </motion.button>
//               <motion.button
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   // Favorite logic
//                 }}
//               >
//                 <Heart className="text-white" size={24} />
//               </motion.button>
//               <motion.button
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onClick();
//                 }}
//               >
//                 <Expand className="text-white" size={24} />
//               </motion.button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Card Details */}
//       <div className="mt-4 px-2">
//         <div className="flex justify-between items-center">
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//             {title}
//           </h3>
//           <div className="flex space-x-2">
//             <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//               {resolution}
//             </span>
//             <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//               {category}
//             </span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default WallpaperCard;














// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Download, Heart, Expand, XCircle } from 'lucide-react'; // Import XCircle for close button

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual', 
//   onClick 
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);  // State to track modal visibility

//   if (!imageUrl) return null;

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative group"
//       >
//         <div 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//         >
//           {/* Background Image */}


//           <div className="relative w-full aspect-[3/4] overflow-hidden">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//             /> 
            
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>






//           {/* Hover Overlay */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//               >
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     // Download logic
//                   }}
//                 >
//                   <Download className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     // Favorite logic
//                   }}
//                 >
//                   <Heart className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     openModal();  // Open modal on click of Expand button
//                   }}
//                 >
//                   <Expand className="text-white" size={24} />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Card Details */}
//         <div className="mt-4 px-2">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//               {title}
//             </h3>
//             <div className="flex space-x-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                 {resolution}
//               </span>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                 {category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Modal for displaying full image */}
//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
//             {/* Close Button with XCircle icon */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <XCircle size={28} className="text-white" /> {/* Stylish close icon */}
//             </button>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default WallpaperCard;


















// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Download, Heart, Expand, XCircle } from 'lucide-react'; // Import XCircle for close button

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual', 
//   onClick 
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);  // State to track modal visibility

//   if (!imageUrl) return null;

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Function to trigger the download
//   const handleDownload = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     const a = document.createElement('a');
//     a.href = imageUrl;  // The URL of the image you want to download
//     a.download = title;  // The filename for the downloaded image
//     a.click();  // Trigger the download
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative group"
//       >
//         <div 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//         >
//           {/* Background Image */}
//           <div className="relative w-full aspect-[3/4] overflow-hidden">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//             /> 
            
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           {/* Hover Overlay */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//               >
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={handleDownload}  // Trigger the download logic
//                 >
//                   <Download className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     // Favorite logic
//                   }}
//                 >
//                   <Heart className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     openModal();  // Open modal on click of Expand button
//                   }}
//                 >
//                   <Expand className="text-white" size={24} />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Card Details */}
//         <div className="mt-4 px-2">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//               {title}
//             </h3>
//             <div className="flex space-x-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                 {resolution}
//               </span>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                 {category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Modal for displaying full image */}
//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
//             {/* Close Button with XCircle icon */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <XCircle size={28} className="text-white" /> {/* Stylish close icon */}
//             </button>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default WallpaperCard;











// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Download, Heart, Expand, XCircle } from 'lucide-react'; // Import XCircle for close button

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual', 
//   onClick 
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);  // State to track modal visibility

//   if (!imageUrl) return null;

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Function to trigger the download via API
//   const handleDownload = async (e: React.MouseEvent) => {
//     e.stopPropagation();

//     try {
//       const response = await fetch(`/api/download?url=${encodeURIComponent(imageUrl)}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Download failed');
//       }

//       // Create a temporary link and trigger a download
//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = title;  // Use title as filename
//       link.click();
//     } catch (error) {
//       console.error('Download error:', error);
//     }
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative group"
//       >
//         <div 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//         >
//           {/* Background Image */}
//           <div className="relative w-full aspect-[3/4] overflow-hidden">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//             /> 
            
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           {/* Hover Overlay */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//               >
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={handleDownload}  // Trigger the download logic
//                 >
//                   <Download className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     // Favorite logic
//                   }}
//                 >
//                   <Heart className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     openModal();  // Open modal on click of Expand button
//                   }}
//                 >
//                   <Expand className="text-white" size={24} />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Card Details */}
//         <div className="mt-4 px-2">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//               {title}
//             </h3>
//             <div className="flex space-x-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                 {resolution}
//               </span>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                 {category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Modal for displaying full image */}
//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
//             {/* Close Button with XCircle icon */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <XCircle size={28} className="text-white" /> {/* Stylish close icon */}
//             </button>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default WallpaperCard;















// import React, { useState, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import dynamic from 'next/dynamic';

// // Dynamically import icons to reduce bundle size
// const Download = dynamic(() => import('lucide-react').then((mod) => mod.Download));
// const Heart = dynamic(() => import('lucide-react').then((mod) => mod.Heart));
// const Expand = dynamic(() => import('lucide-react').then((mod) => mod.Expand));
// const XCircle = dynamic(() => import('lucide-react').then((mod) => mod.XCircle));

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual', 
//   onClick 
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   if (!imageUrl) return null;

//   const openModal = useCallback(() => {
//     setIsModalOpen(true);
//   }, []);

//   const closeModal = useCallback(() => {
//     setIsModalOpen(false);
//   }, []);

//   const handleDownload = useCallback(async (e: React.MouseEvent) => {
//     e.stopPropagation();

//     try {
//       const response = await fetch(`/api/download?url=${encodeURIComponent(imageUrl)}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         throw new Error('Download failed');
//       }

//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = title;
//       link.click();
//     } catch (error) {
//       console.error('Download error:', error);
//     }
//   }, [imageUrl, title]);

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative group"
//       >
//         <div 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//         >
//           {/* Background Image with lazy loading */}
//           <div className="relative w-full aspect-[3/4] overflow-hidden">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//               priority
//             /> 

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           {/* Hover Overlay */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//               >
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={handleDownload}
//                 >
//                   <Download className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); /* Favorite logic */ }}
//                 >
//                   <Heart className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); openModal(); }}
//                 >
//                   <Expand className="text-white" size={24} />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Card Details */}
//         <div className="mt-4 px-2">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//               {title}
//             </h3>
//             <div className="flex space-x-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                 {resolution}
//               </span>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                 {category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Modal for displaying full image */}
//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <XCircle size={28} className="text-white" />
//             </button>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default React.memo(WallpaperCard);





























// import React, { useState, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import dynamic from 'next/dynamic';

// // Dynamically import icons to reduce bundle size
// const Download = dynamic(() => import('lucide-react').then((mod) => mod.Download));
// const Heart = dynamic(() => import('lucide-react').then((mod) => mod.Heart));
// const Expand = dynamic(() => import('lucide-react').then((mod) => mod.Expand));
// const XCircle = dynamic(() => import('lucide-react').then((mod) => mod.XCircle));

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual'
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   if (!imageUrl) return null;

//   const openModal = useCallback(() => {
//     setIsModalOpen(true);
//   }, []);

//   const closeModal = useCallback(() => {
//     setIsModalOpen(false);
//   }, []);

//   const handleDownload = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.stopPropagation();

//     try {
//       const response = await fetch(`/api/download?url=${encodeURIComponent(imageUrl)}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         throw new Error('Download failed');
//       }

//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = title;
//       link.click();
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error('Download error:', error.message);
//       }
//     }
//   }, [imageUrl, title]);

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative group"
//       >
//         <div 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//         >
//           <div className="relative w-full aspect-[3/4] overflow-hidden">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//               priority
//             /> 

//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           <AnimatePresence>
//             {isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//               >
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={handleDownload}
//                 >
//                   <Download className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); /* Favorite logic */ }}
//                 >
//                   <Heart className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); openModal(); }}
//                 >
//                   <Expand className="text-white" size={24} />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="mt-4 px-2">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//               {title}
//             </h3>
//             <div className="flex space-x-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                 {resolution}
//               </span>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                 {category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <XCircle size={28} className="text-white" />
//             </button>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default React.memo(WallpaperCard);










// import React, { useState, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import dynamic from 'next/dynamic';

// // Dynamically import icons to reduce bundle size
// const Download = dynamic(() => import('lucide-react').then((mod) => mod.Download));
// const Heart = dynamic(() => import('lucide-react').then((mod) => mod.Heart));
// const Expand = dynamic(() => import('lucide-react').then((mod) => mod.Expand));
// const XCircle = dynamic(() => import('lucide-react').then((mod) => mod.XCircle));

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual'
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   if (!imageUrl) return null;

//   // useCallback should not be inside any conditional render or state-dependent logic
//   const openModal = useCallback(() => {
//     setIsModalOpen(true);
//   }, []);

//   const closeModal = useCallback(() => {
//     setIsModalOpen(false);
//   }, []);

//   const handleDownload = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.stopPropagation();

//     try {
//       const response = await fetch(`/api/download?url=${encodeURIComponent(imageUrl)}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         throw new Error('Download failed');
//       }

//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = title;
//       link.click();
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error('Download error:', error.message);
//       }
//     }
//   }, [imageUrl, title]);

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative group"
//       >
//         <div 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//         >
//           <div className="relative w-full aspect-[3/4] overflow-hidden">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//               priority
//             /> 

//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           <AnimatePresence>
//             {isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//               >
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={handleDownload}
//                 >
//                   <Download className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); /* Favorite logic */ }}
//                 >
//                   <Heart className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); openModal(); }}
//                 >
//                   <Expand className="text-white" size={24} />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="mt-4 px-2">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//               {title}
//             </h3>
//             <div className="flex space-x-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                 {resolution}
//               </span>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                 {category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <XCircle size={28} className="text-white" />
//             </button>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default React.memo(WallpaperCard);











// import React, { useState, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import dynamic from 'next/dynamic';

// // Dynamically import icons to reduce bundle size
// const Download = dynamic(() => import('lucide-react').then((mod) => mod.Download));
// const Heart = dynamic(() => import('lucide-react').then((mod) => mod.Heart));
// const Expand = dynamic(() => import('lucide-react').then((mod) => mod.Expand));
// const XCircle = dynamic(() => import('lucide-react').then((mod) => mod.XCircle));

// type WallpaperCardProps = {
//   title: string;
//   imageUrl: string;
//   resolution?: string;
//   category?: string;
//   onClick: () => void;
// };

// const WallpaperCard = ({ 
//   title, 
//   imageUrl, 
//   resolution = '4K', 
//   category = 'Spiritual'
// }: WallpaperCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Move these outside of any conditional logic
//   const openModal = useCallback(() => {
//     setIsModalOpen(true);
//   }, []);

//   const closeModal = useCallback(() => {
//     setIsModalOpen(false);
//   }, []);

//   const handleDownload = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.stopPropagation();

//     try {
//       const response = await fetch(`/api/download?url=${encodeURIComponent(imageUrl)}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         throw new Error('Download failed');
//       }

//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = title;
//       link.click();
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error('Download error:', error.message);
//       }
//     }
//   }, [imageUrl, title]);

//   // Move the null check to a full render condition
//   if (!imageUrl) {
//     return null;
//   }

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative group"
//       >
//         <div 
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//         >
//           <div className="relative w-full aspect-[3/4] overflow-hidden">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//               priority
//             /> 

//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           <AnimatePresence>
//             {isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
//               >
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={handleDownload}
//                 >
//                   <Download className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); /* Favorite logic */ }}
//                 >
//                   <Heart className="text-white" size={24} />
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
//                   onClick={(e) => { e.stopPropagation(); openModal(); }}
//                 >
//                   <Expand className="text-white" size={24} />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="mt-4 px-2">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
//               {title}
//             </h3>
//             <div className="flex space-x-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                 {resolution}
//               </span>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                 {category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <XCircle size={28} className="text-white" />
//             </button>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default React.memo(WallpaperCard);
















// components/WallpaperCard.tsx
"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Wallpaper } from '../types/Wallpaper';

// Dynamically import icons to reduce bundle size
const Download = dynamic(() => import('lucide-react').then((mod) => mod.Download));
const Heart = dynamic(() => import('lucide-react').then((mod) => mod.Heart));
const Expand = dynamic(() => import('lucide-react').then((mod) => mod.Expand));
const XCircle = dynamic(() => import('lucide-react').then((mod) => mod.XCircle));

type WallpaperCardProps = Omit<Wallpaper, 'id'> & {
  onClick?: () => void;
};

const WallpaperCard: React.FC<WallpaperCardProps> = ({ 
  title, 
  image_url, 
  resolution = '4K', 
  category = 'Spiritual',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleDownload = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    try {
      const response = await fetch(`/api/download?url=${encodeURIComponent(image_url)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = title;
      link.click();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Download error:', error.message);
      }
    }
  }, [image_url, title]);

  if (!image_url) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative group"
        onClick={onClick}
      >
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <Image
              src={image_url}
              alt={title}
              fill
              className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              priority
            /> 

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
                  onClick={handleDownload}
                >
                  <Download className="text-white" size={24} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
                  onClick={(e) => { e.stopPropagation(); /* Favorite logic */ }}
                >
                  <Heart className="text-white" size={24} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition"
                  onClick={(e) => { e.stopPropagation(); openModal(); }}
                >
                  <Expand className="text-white" size={24} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 px-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
              {title}
            </h3>
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {resolution}
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                {category}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative bg-black rounded-lg shadow-lg overflow-hidden max-w-3xl w-full transition-all">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
            >
              <XCircle size={28} className="text-white" />
            </button>
            <Image
              src={image_url}
              alt={title}
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default React.memo(WallpaperCard);