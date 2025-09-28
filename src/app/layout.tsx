import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const soehneKraftig = localFont({
//   src: [
//     {
//       path: "../../public/assets/fonts/sohne/TestSohneBreit-Kraftig-BF663d89caa6b6c.otf",
//       weight: "600",
//       style: "normal",
//     },
//   ],
//   variable: "--font-soehne",
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // normal, medium, bold
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Groozil Admin Panel",
  description: "Groozil Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
