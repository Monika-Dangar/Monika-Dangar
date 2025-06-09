// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Monika Dangar | Web Developer",
//   description: "Modern and Minimalist Portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html>
//       <head>
//         <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//       </head>
//       {/* <body
//         className={inter.className}
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
//         }}
//       > */}
//       {/* <body className={inter.className} style={{ backgroundColor: "#0A0E1F" }}> */}
//       <body className={`${inter.className} bg-primary`} >
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monika Dangar | Web Developer",
  description: "Modern and Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={sourceCodePro.className} style={{ backgroundColor: "#0A0E1F" }}>
        {children}
      </body>
    </html>
  );
}