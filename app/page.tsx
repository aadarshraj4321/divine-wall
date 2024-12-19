// import Dashboard from "./dashboard/page";

// export default function Home() {
//   return (
//     <div>
//       <Dashboard />
//     </div>

//   );
// }









// // app/page.tsx
// import Dashboard from "./dashboard/page";
// import Script from "next/script";

// export default function Home() {
//   return (
//     <div>
//       <Dashboard />

//       {/* Google AdSense Ad Unit */}
//       <div>
//         <ins
//           className="adsbygoogle"
//           style={{ display: "block" }}
//           data-ad-client="ca-pub-9979980575915777"
//           data-ad-slot="1234567890"
//           data-ad-format="auto"
//         ></ins>

//         {/* Load the ad script only after the component has been mounted in the client */}
//         <Script
//           strategy="afterInteractive" // Ensures script is loaded after the page is interactive
//           id="adsense-script" // Added id attribute to satisfy Next.js requirement
//         >
//           {`
//             (window.adsbygoogle = window.adsbygoogle || []).push({});
//           `}
//         </Script>
//       </div>
//     </div>
//   );
// }











// // app/page.tsx
// import Dashboard from "./dashboard/page";
// import Script from "next/script";

// export default function Home() {
//   return (
//     <div>
//       <Dashboard />

//       {/* Google AdSense Ad Unit */}
//       <div>
//         <ins
//           className="adsbygoogle"
//           style={{ display: "block" }}
//           data-ad-client="ca-pub-9979980575915777"
//           data-ad-slot="1684697935"  // Replace with your unique ad slot ID
//           data-ad-format="auto"
//         ></ins>

//         {/* Push ads into the page only after it's interactive */}
//         <Script
//           strategy="afterInteractive"
//           id="adsense-script"
//         >
//           {`
//             (window.adsbygoogle = window.adsbygoogle || []).push({});
//           `}
//         </Script>
//       </div>
//     </div>
//   );
// }









// app/page.tsx
import Dashboard from "./dashboard/page";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Dashboard />

      {/* Google AdSense Ad Unit */}
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9979980575915777"
          data-ad-slot="1684697935"  // Replace with your unique ad slot ID
          data-ad-format="auto"
        ></ins>

        {/* Push ads into the page only after it's interactive */}
        <Script
          strategy="afterInteractive"
          id="adsense-script"
        >
          {`
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script>
      </div>
    </div>
  );
}
