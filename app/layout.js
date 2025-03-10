import './globals.css';
import Head from "next/head";
import LiquidChrome from "@/components/LiquidChrome";
import Header from "@/components/Header";

export const metadata = {
  title: 'Priyanshu Gupta',
  description: '',
  keywords: ['Priyanshu Gupta', 'priyansxu', 'developer', 'programmer', 'designer', 'portfolio'],
  themeColor: '#080808',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen w-full bg-black">
          <div className="absolute opacity-20 inset-0 z-0">
            <LiquidChrome />
          </div>
         <div className="relative z-10">
          <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
