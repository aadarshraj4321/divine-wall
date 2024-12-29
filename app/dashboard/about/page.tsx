// "use client"

// import React from 'react';
// import { SunIcon, HeartIcon, StarIcon, SendIcon } from 'lucide-react';
// import Header from '../components/Header';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#ece6dd] to-[#ebe9e6] dark:from-[#2C3E50] dark:to-[#34495E]">
//       {/* Header Component */}
//       <Header />

//       {/* Hero Section with Spiritual Overlay */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 1440 320" 
//             className="absolute bottom-0 w-full text-orange-100 dark:text-blue-900"
//           >
//             <path 
//               fill="currentColor" 
//               fillOpacity="1" 
//               d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,165.3C672,160,768,192,864,202.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
        
//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-[#3A2E2A] dark:text-white mb-6 tracking-tight">
//             Divine Wall
//           </h1>
//           <p className="text-xl md:text-2xl text-[#5D4037] dark:text-gray-300 max-w-3xl mx-auto mb-10">
//             Bridging spirituality and digital art, we curate divine imagery that inspires, uplifts, and connects souls across the world.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Story Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
//             <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
//               <StarIcon className="mr-4 text-orange-500" size={36} />
//               Our Story
//             </h2>
//             <p className="text-[#5D4037] dark:text-gray-300 mb-4">
//               Born from a passion for spiritual art, DivineWall emerged as a digital sanctuary. We believe in the transformative power of divine imagery to inspire, heal, and connect.
//             </p>
//             <p className="text-[#5D4037] dark:text-gray-300">
//               Our carefully curated collection celebrates the rich tapestry of Hindu mythology, bringing sacred narratives to life through stunning visual experiences.
//             </p>
//           </div>
          
//           <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
//             <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
//               <HeartIcon className="mr-4 text-red-500" size={36} />
//               Our Mission
//             </h2>
//             <p className="text-[#5D4037] dark:text-gray-300 mb-4">
//               We aim to create a digital space where spirituality meets art, offering high-quality wallpapers that transform devices into windows of divine inspiration.
//             </p>
//             <p className="text-[#5D4037] dark:text-gray-300">
//               From intricate depictions of gods and goddesses to serene mythological landscapes, we bring sacred stories to your screens.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#3A2E2A] dark:text-white mb-12">
//             Our Core Values
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <SunIcon size={48} className="mx-auto text-orange-500 mb-4" />,
//                 title: "Inspiration",
//                 description: "Illuminating spirits through divine visual narratives."
//               },
//               {
//                 icon: <HeartIcon size={48} className="mx-auto text-red-500 mb-4" />,
//                 title: "Respect",
//                 description: "Honoring spiritual traditions with utmost reverence."
//               },
//               {
//                 icon: <StarIcon size={48} className="mx-auto text-purple-500 mb-4" />,
//                 title: "Quality",
//                 description: "Delivering meticulously curated, high-resolution artwork."
//               }
//             ].map((value, index) => (
//               <div key={index} className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 shadow-md">
//                 {value.icon}
//                 <h3 className="text-2xl font-semibold text-[#3A2E2A] dark:text-white mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-[#5D4037] dark:text-gray-300">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//                               {/* Contact Form */}
//                 <div className="p-6 mt-10 rounded-xl bg-white text-gray-800 dark:bg-slate-700 text-gray-200 shadow-md">
//               <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block mb-2">Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 text-white border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2">Email</label>
//                   <input 
//                     type="email" 
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 text-white border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2">Message</label>
//                   <textarea 
//                     rows={4} 
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 text-white border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Message"
//                   ></textarea>
//                 </div>

//                 <button 
//                   className={`w-full p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center`}
//                 >
//                   <SendIcon className="mr-2" size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//         </div>

//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center bg-[#D7CCC8]/50 dark:bg-gray-900/50 backdrop-blur-lg">
//         <p className="text-[#5D4037] dark:text-gray-300">
//           © {new Date().getFullYear()} DivineWall. Connecting Souls Through Divine Art.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default About;










// "use client"
// import React, { useState } from 'react';
// import { 
//   SunIcon, 
//   HeartIcon, 
//   StarIcon, 
//   MailIcon, 
//   PhoneIcon, 
//   MapPinIcon, 
//   SendIcon 
// } from 'lucide-react';
// import Header from '../components/Header';

// const About = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement form submission logic
//     console.log('Form submitted', formData);
//     // Reset form after submission
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Component */}
//       <Header />

//       {/* Previous sections remain the same... */}
//       {/* ... (previous Hero, Story, Mission, and Values sections) */}

//       {/* Contact Section */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We'd love to hear from you. Whether you have a question, suggestion, or just want to share your thoughts, reach out to us.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <MailIcon className="mr-4 text-blue-500" size={24} />
//                   <div>
//                     <p className="font-medium text-gray-700">Email</p>
//                     <a 
//                       href="mailto:contact@divinewall.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       contact@divinewall.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <PhoneIcon className="mr-4 text-green-500" size={24} />
//                   <div>
//                     <p className="font-medium text-gray-700">Phone</p>
//                     <a 
//                       href="tel:+1234567890" 
//                       className="text-gray-800 hover:text-blue-600"
//                     >
//                       +1 (234) 567-890
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <MapPinIcon className="mr-4 text-red-500" size={24} />
//                   <div>
//                     <p className="font-medium text-gray-700">Address</p>
//                     <p className="text-gray-600">
//                       123 Divine Street, Spiritual City, SP 12345
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label 
//                     htmlFor="name" 
//                     className="block text-gray-700 font-medium mb-2"
//                   >
//                     Your Name
//                   </label>
//                   <input 
//                     type="text" 
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 <div>
//                   <label 
//                     htmlFor="email" 
//                     className="block text-gray-700 font-medium mb-2"
//                   >
//                     Email Address
//                   </label>
//                   <input 
//                     type="email" 
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 <div>
//                   <label 
//                     htmlFor="message" 
//                     className="block text-gray-700 font-medium mb-2"
//                   >
//                     Your Message
//                   </label>
//                   <textarea 
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={4}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Write your message here"
//                   ></textarea>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
//                 >
//                   <SendIcon className="mr-2" size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
            
//           {/* Social Media Links (Optional) */}
//           <div className="mt-12 text-center">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect with Us</h3>
//             <div className="flex justify-center space-x-6">
//               {[
//                 { name: 'Instagram', icon: 'M', color: 'text-pink-500', link: '#' },
//                 { name: 'Facebook', icon: 'F', color: 'text-blue-600', link: '#' },
//                 { name: 'Twitter', icon: 'X', color: 'text-black', link: '#' }
//               ].map((social, index) => (
//                 <a 
//                   key={index} 
//                   href={social.link} 
//                   className={`
//                     ${social.color} 
//                     w-12 h-12 
//                     rounded-full 
//                     inline-flex 
//                     items-center 
//                     justify-center 
//                     border 
//                     hover:bg-gray-100 
//                     transition-colors
//                   `}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center bg-gray-100">
//         <p className="text-gray-600">
//           © {new Date().getFullYear()} DivineWall. Connecting Souls Through Divine Art.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default About;






















// "use client"
// import React, { useState } from 'react';
// import { 
//   SunIcon, 
//   MoonIcon,
//   HeartIcon, 
//   StarIcon, 
//   MailIcon, 
//   PhoneIcon, 
//   MapPinIcon, 
//   SendIcon 
// } from 'lucide-react';
// import Header from '../components/Header';

// const AboutContactPage = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Theme classes
//   const bgClass = isDarkMode ? 'bg-slate-800' : 'bg-white';
//   const textColorClass = isDarkMode ? 'text-white' : 'text-gray-800';
//   const subTextColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';

//   return (
//     <div className={`min-h-screen ${bgClass} ${textColorClass} transition-colors duration-300`}>
//       {/* Theme Toggle Button */}
//       <button 
//         onClick={toggleTheme} 
//         className={`
//           fixed top-4 right-4 z-50 
//           p-2 rounded-full 
//           ${isDarkMode 
//             ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' 
//             : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//           }
//           shadow-lg transition-colors
//         `}
//       >
//         {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
//       </button>

//       {/* Header Component */}
//       <Header />

//       {/* About Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-5xl mx-auto">
//           <h1 className={`text-4xl md:text-5xl font-bold text-center mb-10 ${textColorClass}`}>
//             About DivineWall
//           </h1>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className={`
//               p-6 rounded-xl 
//               ${isDarkMode 
//                 ? 'bg-slate-700 text-gray-200' 
//                 : 'bg-gray-100 text-gray-800'
//               } shadow-md
//             `}>
//               <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//               <p className={`${subTextColorClass} mb-4`}>
//                 DivineWall was born from a passion to bring divine inspiration into the digital world. We aim to showcase beautiful spiritual and mythological art, helping you connect with your faith and inner peace.
//               </p>
//               <p className={`${subTextColorClass}`}>
//                 Our team carefully curates every image to ensure quality and relevance, bridging the gap between traditional spirituality and modern digital experiences.
//               </p>
//             </div>

//             <div className={`
//               p-6 rounded-xl 
//               ${isDarkMode 
//                 ? 'bg-slate-700 text-gray-200' 
//                 : 'bg-gray-100 text-gray-800'
//               } shadow-md
//             `}>
//               <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//               <p className={`${subTextColorClass} mb-4`}>
//                 We strive to create a digital sanctuary that celebrates the rich tapestry of Hindu mythology and spirituality. Our mission is to inspire, educate, and connect people through stunning visual narratives.
//               </p>
//               <p className={`${subTextColorClass}`}>
//                 From intricate god and goddess depictions to serene mythological landscapes, we transform digital spaces into windows of divine inspiration.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className={`py-16 px-6 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
//         <div className="max-w-5xl mx-auto">
//           <h2 className={`text-4xl font-bold text-center mb-10 ${textColorClass}`}>
//             Contact Us
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Contact Information */}
//             <div className={`
//               p-6 rounded-xl 
//               ${isDarkMode 
//                 ? 'bg-slate-700 text-gray-200' 
//                 : 'bg-white text-gray-800'
//               } shadow-md
//             `}>
//               <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <MailIcon className="mr-4 text-blue-500" size={24} />
//                   <div>
//                     <p className="font-medium">Email</p>
//                     <a 
//                       href="mailto:contact@divinewall.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       contact@divinewall.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <PhoneIcon className="mr-4 text-green-500" size={24} />
//                   <div>
//                     <p className="font-medium">Phone</p>
//                     <a 
//                       href="tel:+1234567890" 
//                       className="hover:text-blue-600"
//                     >
//                       +1 (234) 567-890
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <MapPinIcon className="mr-4 text-red-500" size={24} />
//                   <div>
//                     <p className="font-medium">Address</p>
//                     <p className={`${subTextColorClass}`}>
//                       123 Divine Street, Spiritual City, SP 12345
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className={`
//               p-6 rounded-xl 
//               ${isDarkMode 
//                 ? 'bg-slate-700 text-gray-200' 
//                 : 'bg-white text-gray-800'
//               } shadow-md
//             `}>
//               <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block mb-2">Name</label>
//                   <input 
//                     type="text" 
//                     className={`
//                       w-full p-3 rounded-lg 
//                       ${isDarkMode 
//                         ? 'bg-slate-600 text-white border-slate-500' 
//                         : 'bg-gray-100 text-gray-800 border-gray-300'
//                       } 
//                       focus:outline-none focus:ring-2 focus:ring-blue-500
//                     `}
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2">Email</label>
//                   <input 
//                     type="email" 
//                     className={`
//                       w-full p-3 rounded-lg 
//                       ${isDarkMode 
//                         ? 'bg-slate-600 text-white border-slate-500' 
//                         : 'bg-gray-100 text-gray-800 border-gray-300'
//                       } 
//                       focus:outline-none focus:ring-2 focus:ring-blue-500
//                     `}
//                     placeholder="Your Email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2">Message</label>
//                   <textarea 
//                     rows={4} 
//                     className={`
//                       w-full p-3 rounded-lg 
//                       ${isDarkMode 
//                         ? 'bg-slate-600 text-white border-slate-500' 
//                         : 'bg-gray-100 text-gray-800 border-gray-300'
//                       } 
//                       focus:outline-none focus:ring-2 focus:ring-blue-500
//                     `}
//                     placeholder="Your Message"
//                   ></textarea>
//                 </div>

//                 <button 
//                   className={`
//                     w-full p-3 rounded-lg 
//                     bg-blue-600 text-white 
//                     hover:bg-blue-700 
//                     transition-colors
//                     flex items-center justify-center
//                   `}
//                 >
//                   <SendIcon className="mr-2" size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className={`
//         py-6 text-center 
//         ${isDarkMode 
//           ? 'bg-slate-900 text-gray-300' 
//           : 'bg-gray-100 text-gray-600'
//         }
//       `}>
//         <p>© {new Date().getFullYear()} DivineWall. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AboutContactPage;






















// "use client"
// import React, { useState } from 'react';
// import { 
//   SunIcon, 
//   MoonIcon,
//   HeartIcon, 
//   StarIcon, 
//   MailIcon, 
//   PhoneIcon, 
//   MapPinIcon, 
//   SendIcon 
// } from 'lucide-react';
// import Header from '../components/Header';

// const AboutContactPage = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Theme classes
//   const bgClass = isDarkMode ? 'bg-slate-800' : 'bg-white';
//   const textColorClass = isDarkMode ? 'text-white' : 'text-gray-800';
//   const subTextColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';

//   return (
//     <div className={`min-h-screen ${bgClass} ${textColorClass} transition-colors duration-300`}>
//       {/* Theme Toggle Button */}
//       <button 
//         onClick={toggleTheme} 
//         className={`
//           fixed top-4 right-4 z-50 
//           p-2 rounded-full 
//           ${isDarkMode 
//             ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' 
//             : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//           }
//           shadow-lg transition-colors
//         `}
//       >
//         {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
//       </button>

//       {/* Header Component */}
//       <Header />

//       {/* About Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-5xl mx-auto">
//           <h1 className={`text-4xl md:text-5xl font-bold text-center mb-10 ${textColorClass}`}>
//             About DivineWall
//           </h1>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-700 text-gray-200' : 'bg-gray-100 text-gray-800'} shadow-md`}>
//               <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//               <p className={`${subTextColorClass} mb-4`}>
//                 DivineWall was born from a passion to bring divine inspiration into the digital world. We aim to showcase beautiful spiritual and mythological art, helping you connect with your faith and inner peace.
//               </p>
//               <p className={`${subTextColorClass}`}>
//                 Our team carefully curates every image to ensure quality and relevance, bridging the gap between traditional spirituality and modern digital experiences.
//               </p>
//             </div>

//             <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-700 text-gray-200' : 'bg-gray-100 text-gray-800'} shadow-md`}>
//               <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//               <p className={`${subTextColorClass} mb-4`}>
//                 We strive to create a digital sanctuary that celebrates the rich tapestry of Hindu mythology and spirituality. Our mission is to inspire, educate, and connect people through stunning visual narratives.
//               </p>
//               <p className={`${subTextColorClass}`}>
//                 From intricate god and goddess depictions to serene mythological landscapes, we transform digital spaces into windows of divine inspiration.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

    //   {/* Contact Section */}
    //   <section className={`py-16 px-6 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
    //     <div className="max-w-5xl mx-auto">
    //       <h2 className={`text-4xl font-bold text-center mb-10 ${textColorClass}`}>
    //         Contact Us
    //       </h2>

    //       <div className="grid md:grid-cols-2 gap-8">
    //         {/* Contact Information */}
    //         <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-700 text-gray-200' : 'bg-white text-gray-800'} shadow-md`}>
    //           <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
    //           <div className="space-y-6">
    //             <div className="flex items-center">
    //               <MailIcon className="mr-4 text-blue-500" size={24} />
    //               <div>
    //                 <p className="font-medium">Email</p>
    //                 <a 
    //                   href="mailto:contact@divinewall.com" 
    //                   className="text-blue-600 hover:underline"
    //                 >
    //                   contact@divinewall.com
    //                 </a>
    //               </div>
    //             </div>

    //             <div className="flex items-center">
    //               <PhoneIcon className="mr-4 text-green-500" size={24} />
    //               <div>
    //                 <p className="font-medium">Phone</p>
    //                 <a 
    //                   href="tel:+1234567890" 
    //                   className="hover:text-blue-600"
    //                 >
    //                   +1 (234) 567-890
    //                 </a>
    //               </div>
    //             </div>

    //             <div className="flex items-center">
    //               <MapPinIcon className="mr-4 text-red-500" size={24} />
    //               <div>
    //                 <p className="font-medium">Address</p>
    //                 <p className={`${subTextColorClass}`}>
    //                   123 Divine Street, Spiritual City, SP 12345
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Contact Form */}
    //         <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-700 text-gray-200' : 'bg-white text-gray-800'} shadow-md`}>
    //           <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
    //           <form className="space-y-4">
    //             <div>
    //               <label className="block mb-2">Name</label>
    //               <input 
    //                 type="text" 
    //                 className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-slate-600 text-white border-slate-500' : 'bg-gray-100 text-gray-800 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
    //                 placeholder="Your Name"
    //               />
    //             </div>

    //             <div>
    //               <label className="block mb-2">Email</label>
    //               <input 
    //                 type="email" 
    //                 className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-slate-600 text-white border-slate-500' : 'bg-gray-100 text-gray-800 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
    //                 placeholder="Your Email"
    //               />
    //             </div>

    //             <div>
    //               <label className="block mb-2">Message</label>
    //               <textarea 
    //                 rows={4} 
    //                 className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-slate-600 text-white border-slate-500' : 'bg-gray-100 text-gray-800 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
    //                 placeholder="Your Message"
    //               ></textarea>
    //             </div>

    //             <button 
    //               className={`w-full p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center`}
    //             >
    //               <SendIcon className="mr-2" size={20} />
    //               Send Message
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

//       {/* Footer */}
//       <footer className={`py-6 text-center ${isDarkMode ? 'bg-slate-900 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
//         <p>© {new Date().getFullYear()} DivineWall. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AboutContactPage;
















// "use client"

// import React from 'react';
// import { SunIcon, HeartIcon, StarIcon, SendIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
// import Header from '../components/Header';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#ece6dd] to-[#ebe9e6] dark:from-[#2C3E50] dark:to-[#34495E]">
//       {/* Header Component */}
//       <Header />

//       {/* Hero Section with Spiritual Overlay */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 1440 320" 
//             className="absolute bottom-0 w-full text-orange-100 dark:text-blue-900"
//           >
//             <path 
//               fill="currentColor" 
//               fillOpacity="1" 
//               d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,165.3C672,160,768,192,864,202.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
        
//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-[#3A2E2A] dark:text-white mb-6 tracking-tight">
//             Divine Wall
//           </h1>
//           <p className="text-xl md:text-2xl text-[#5D4037] dark:text-gray-300 max-w-3xl mx-auto mb-10">
//             Bridging spirituality and digital art, we curate divine imagery that inspires, uplifts, and connects souls across the world.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Story Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
//             <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
//               <StarIcon className="mr-4 text-orange-500" size={36} />
//               Our Story
//             </h2>
//             <p className="text-[#5D4037] dark:text-gray-300 mb-4">
//               Born from a passion for spiritual art, DivineWall emerged as a digital sanctuary. We believe in the transformative power of divine imagery to inspire, heal, and connect.
//             </p>
//             <p className="text-[#5D4037] dark:text-gray-300">
//               Our carefully curated collection celebrates the rich tapestry of Hindu mythology, bringing sacred narratives to life through stunning visual experiences.
//             </p>
//           </div>
          
//           <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
//             <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
//               <HeartIcon className="mr-4 text-red-500" size={36} />
//               Our Mission
//             </h2>
//             <p className="text-[#5D4037] dark:text-gray-300 mb-4">
//               We aim to create a digital space where spirituality meets art, offering high-quality wallpapers that transform devices into windows of divine inspiration.
//             </p>
//             <p className="text-[#5D4037] dark:text-gray-300">
//               From intricate depictions of gods and goddesses to serene mythological landscapes, we bring sacred stories to your screens.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#3A2E2A] dark:text-white mb-12">
//             Our Core Values
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <SunIcon size={48} className="mx-auto text-orange-500 mb-4" />,
//                 title: "Inspiration",
//                 description: "Illuminating spirits through divine visual narratives."
//               },
//               {
//                 icon: <HeartIcon size={48} className="mx-auto text-red-500 mb-4" />,
//                 title: "Respect",
//                 description: "Honoring spiritual traditions with utmost reverence."
//               },
//               {
//                 icon: <StarIcon size={48} className="mx-auto text-purple-500 mb-4" />,
//                 title: "Quality",
//                 description: "Delivering meticulously curated, high-resolution artwork."
//               }
//             ].map((value, index) => (
//               <div key={index} className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 shadow-md">
//                 {value.icon}
//                 <h3 className="text-2xl font-semibold text-[#3A2E2A] dark:text-white mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-[#5D4037] dark:text-gray-300">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>









            



//             {/* Contact Section */}
//       <section className="py-16 px-6 'bg-gray-50 dark:bg-slate-900">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-10 text-white">
//             Contact Us
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Contact Information */}
//             <div className="p-6 rounded-xl bg-white text-gray-800 dark:bg-slate-700 text-gray-200 shadow-md">
//               <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <MailIcon className="mr-4 text-blue-500" size={24} />
//                   <div>
//                     <p className="font-medium">Email</p>
//                     <a 
//                       href="mailto:contact@divinewall.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       contact@divinewall.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <PhoneIcon className="mr-4 text-green-500" size={24} />
//                   <div>
//                     <p className="font-medium">Phone</p>
//                     <a 
//                       href="tel:+1234567890" 
//                       className="hover:text-blue-600"
//                     >
//                       +1 (234) 567-890
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <MapPinIcon className="mr-4 text-red-500" size={24} />
//                   <div>
//                     <p className="font-medium">Address</p>
//                     <p className="text-white">
//                       123 Divine Street, Spiritual City, SP 12345
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="p-6 rounded-xl bg-white text-gray-800 dark:bg-slate-700 text-gray-200 shadow-md">
//               <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block mb-2">Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 text-white border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2">Email</label>
//                   <input 
//                     type="email" 
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 text-white border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2">Message</label>
//                   <textarea 
//                     rows={4} 
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 text-white border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Message"
//                   ></textarea>
//                 </div>

//                 <button 
//                   className={`w-full p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center`}
//                 >
//                   <SendIcon className="mr-2" size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>


            


        
            








//         </div>

//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center bg-[#D7CCC8]/50 dark:bg-gray-900/50 backdrop-blur-lg">
//         <p className="text-[#5D4037] dark:text-gray-300">
//           © {new Date().getFullYear()} DivineWall. Connecting Souls Through Divine Art.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default About;



























// "use client"

// import React from 'react';
// import { SunIcon, HeartIcon, StarIcon, SendIcon, MapPinIcon, MailIcon } from 'lucide-react';
// import Header from '../components/Header';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#ece6dd] to-[#ebe9e6] dark:from-[#2C3E50] dark:to-[#34495E]">
//       {/* Header Component */}
//       <Header />

//       {/* Hero Section with Spiritual Overlay */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1440 320"
//             className="absolute bottom-0 w-full text-orange-100 dark:text-blue-900"
//           >
//             <path
//               fill="currentColor"
//               fillOpacity="1"
//               d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,165.3C672,160,768,192,864,202.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>

//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-[#3A2E2A] dark:text-white mb-6 tracking-tight">
//             Divine Wall
//           </h1>
//           <p className="text-xl md:text-2xl text-[#5D4037] dark:text-gray-300 max-w-3xl mx-auto mb-10">
//             Bridging spirituality and digital art, we curate divine imagery that inspires, uplifts, and connects souls across the world.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Story Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
//             <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
//               <StarIcon className="mr-4 text-orange-500" size={36} />
//               Our Story
//             </h2>
//             <p className="text-[#5D4037] dark:text-gray-300 mb-4">
//               Born from a passion for spiritual art, DivineWall emerged as a digital sanctuary. We believe in the transformative power of divine imagery to inspire, heal, and connect.
//             </p>
//             <p className="text-[#5D4037] dark:text-gray-300">
//               Our carefully curated collection celebrates the rich tapestry of Hindu mythology, bringing sacred narratives to life through stunning visual experiences.
//             </p>
//           </div>

//           <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
//             <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
//               <HeartIcon className="mr-4 text-red-500" size={36} />
//               Our Mission
//             </h2>
//             <p className="text-[#5D4037] dark:text-gray-300 mb-4">
//               We aim to create a digital space where spirituality meets art, offering high-quality wallpapers that transform devices into windows of divine inspiration.
//             </p>
//             <p className="text-[#5D4037] dark:text-gray-300">
//               From intricate depictions of gods and goddesses to serene mythological landscapes, we bring sacred stories to your screens.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#3A2E2A] dark:text-white mb-12">
//             Our Core Values
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[{
//               icon: <SunIcon size={48} className="mx-auto text-orange-500 mb-4" />,
//               title: "Inspiration",
//               description: "Illuminating spirits through divine visual narratives."
//             },
//             {
//               icon: <HeartIcon size={48} className="mx-auto text-red-500 mb-4" />,
//               title: "Respect",
//               description: "Honoring spiritual traditions with utmost reverence."
//             },
//             {
//               icon: <StarIcon size={48} className="mx-auto text-purple-500 mb-4" />,
//               title: "Quality",
//               description: "Delivering meticulously curated, high-resolution artwork."
//             }].map((value, index) => (
//               <div key={index} className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 shadow-md">
//                 {value.icon}
//                 <h3 className="text-2xl font-semibold text-[#3A2E2A] dark:text-white mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-[#5D4037] dark:text-gray-300">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
//             Contact Us
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Contact Information */}
//             <div className="p-6 rounded-xl bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 shadow-md">
//               <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Get in Touch</h3>

//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <MailIcon className="mr-4 text-blue-500" size={24} />
//                   <div>
//                     <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
//                     <a
//                       href="mailto:contact@divinewall.com"
//                       className="text-blue-600 hover:underline"
//                     >
//                       {/* contact@divinewall.com */}
//                       aadarshraj4321@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* <div className="flex items-center">
//                   <PhoneIcon className="mr-4 text-green-500" size={24} />
//                   <div>
//                     <p className="font-medium text-gray-800 dark:text-gray-200">Phone</p>
//                     <a
//                       href="tel:+1234567890"
//                       className="hover:text-blue-600 text-gray-800 dark:text-gray-200"
//                     >
//                       +916207297112
//                     </a>
//                   </div>
//                 </div> */}

//                 <div className="flex items-center">
//                   <MapPinIcon className="mr-4 text-red-500" size={24} />
//                   <div>
//                     <p className="font-medium text-gray-800 dark:text-gray-200">Address</p>
//                     <p className="text-gray-800 dark:text-gray-200">
//                       India, Asia, Earth
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="p-6 rounded-xl bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 shadow-md">
//               <h3 className="text-2xl font-semibold mb-6 text-gray-200 dark:text-gray-200">Send us a Message</h3>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block mb-2 text-gray-800 dark:text-gray-200">Name</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 dark:text-white dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-gray-800 dark:text-gray-200">Email</label>
//                   <input
//                     type="email"
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 dark:text-white dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-gray-800 dark:text-gray-200">Message</label>
//                   <textarea
//                     rows={4}
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 dark:text-white darKborder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Message"
//                   ></textarea>
//                 </div>

//                 <button
//                   className={`w-full p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center`}
//                 >
//                   <SendIcon className="mr-2" size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center bg-[#D7CCC8]/50 dark:bg-gray-900/50 backdrop-blur-lg">
//         <p className="text-[#5D4037] dark:text-gray-300">
//           © {new Date().getFullYear()} DivineWall. Connecting Souls Through Divine Art.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default About;



















"use client"

import React from 'react';
import { SunIcon, HeartIcon, StarIcon, SendIcon, MapPinIcon, MailIcon } from 'lucide-react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content Container with padding-top to account for fixed header */}
      <div className="min-h-screen pt-16 bg-gradient-to-br from-[#ece6dd] to-[#ebe9e6] dark:from-[#2C3E50] dark:to-[#34495E]">
        {/* Hero Section with Spiritual Overlay */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute bottom-0 w-full text-orange-100 dark:text-blue-900"
            >
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,165.3C672,160,768,192,864,202.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#3A2E2A] dark:text-white mb-6 tracking-tight">
              Divine Wall
            </h1>
            <p className="text-xl md:text-2xl text-[#5D4037] dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Bridging spirituality and digital art, we curate divine imagery that inspires, uplifts, and connects souls across the world.
            </p>
          </div>
        </section>

        {/* Mission & Story Section */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
                <StarIcon className="mr-4 text-orange-500" size={36} />
                Our Story
              </h2>
              <p className="text-[#5D4037] dark:text-gray-300 mb-4">
                Born from a passion for spiritual art, DivineWall emerged as a digital sanctuary. We believe in the transformative power of divine imagery to inspire, heal, and connect.
              </p>
              <p className="text-[#5D4037] dark:text-gray-300">
                Our carefully curated collection celebrates the rich tapestry of Hindu mythology, bringing sacred narratives to life through stunning visual experiences.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-semibold text-[#3A2E2A] dark:text-white mb-6 flex items-center">
                <HeartIcon className="mr-4 text-red-500" size={36} />
                Our Mission
              </h2>
              <p className="text-[#5D4037] dark:text-gray-300 mb-4">
                We aim to create a digital space where spirituality meets art, offering high-quality wallpapers that transform devices into windows of divine inspiration.
              </p>
              <p className="text-[#5D4037] dark:text-gray-300">
                From intricate depictions of gods and goddesses to serene mythological landscapes, we bring sacred stories to your screens.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#3A2E2A] dark:text-white mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
                icon: <SunIcon size={48} className="mx-auto text-orange-500 mb-4" />,
                title: "Inspiration",
                description: "Illuminating spirits through divine visual narratives."
              },
              {
                icon: <HeartIcon size={48} className="mx-auto text-red-500 mb-4" />,
                title: "Respect",
                description: "Honoring spiritual traditions with utmost reverence."
              },
              {
                icon: <StarIcon size={48} className="mx-auto text-purple-500 mb-4" />,
                title: "Quality",
                description: "Delivering meticulously curated, high-resolution artwork."
              }].map((value, index) => (
                <div key={index} className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 shadow-md">
                  {value.icon}
                  <h3 className="text-2xl font-semibold text-[#3A2E2A] dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#5D4037] dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
              Contact Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="p-6 rounded-xl bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <MailIcon className="mr-4 text-blue-500" size={24} />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
                      <a
                        href="mailto:aadarshraj4321@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        aadarshraj4321@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPinIcon className="mr-4 text-red-500" size={24} />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Address</p>
                      <p className="text-gray-800 dark:text-gray-200">
                        India, Asia, Earth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-6 rounded-xl bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2 text-gray-800 dark:text-gray-200">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 dark:text-white dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-800 dark:text-gray-200">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 dark:text-white dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-800 dark:text-gray-200">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-gray-300 dark:bg-slate-600 dark:text-white dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <SendIcon className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center bg-[#D7CCC8]/50 dark:bg-gray-900/50 backdrop-blur-lg">
          <p className="text-[#5D4037] dark:text-gray-300">
            © {new Date().getFullYear()} DivineWall. Connecting Souls Through Divine Art.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;