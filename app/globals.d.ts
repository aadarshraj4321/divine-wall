// globals.d.ts
declare global {
    interface Window {
      adsbygoogle: { push: () => void }[];
    }
  }
  
  export {}; // This is required to make the file a module
  