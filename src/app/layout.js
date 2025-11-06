'use client'

//imports the font directly from google apparently
import { Geist, Geist_Mono, Quicksand} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//conf the main body font
const quicksand = Quicksand ({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Choose weights you need
  variable: '--font-quicksand',
  display: 'swap',
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "CADI",
//   description: "created by jason",
//   verfication: {
//     google: 'RGlf056Bgn1cuIgon8W6wSXmy5fyamxFqNtMZcoS5fo'
//   }
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
        <body
          className= {quicksand.className} //makes it so it is applied globally
          // {`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
            <AnimatePresence mode="wait">
              <motion.main
                // key={pathname} //triggers when path changes
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 0.9, y: 0 }}
                // exit={{ opacity: 0, y: -20 }}
                // transition={{ duration: 0.2, ease: ["easeOut"] }}
              >
                {children}
              </motion.main>
            </AnimatePresence>
          <Footer />
        </body>
    </html>
  );
}
