// import { useEffect, useState } from 'react';

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   // Check and load the theme from localStorage on initial load
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//       document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//     } else {
//       // Default theme based on user system preference
//       setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
//       document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//   }, []);

//   // Toggle the theme and save the preference in localStorage
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     const newTheme = !isDarkMode ? 'dark' : 'light';
//     localStorage.setItem('theme', newTheme);
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white"
//     >
//       {isDarkMode ? '🌙' : '🌞'}
//     </button>
//   );
// };

// export default ThemeToggle;











import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Try to load the theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // If there's a saved theme, apply it
    if (savedTheme) {
      const theme = savedTheme === 'dark';
      setIsDarkMode(theme);
      document.documentElement.classList.toggle('dark', theme);
    } else {
      // Default to system preference if no saved theme exists
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
      document.documentElement.classList.toggle('dark', prefersDarkMode);
    }
  }, []);

  // Toggle the theme and update localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white"
    >
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
