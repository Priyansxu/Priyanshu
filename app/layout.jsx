import './globals.css';
import Head from "next/head";
import LiquidChrome from "@/components/LiquidChrome";

export const metadata = {
  title: 'Priyanshu G.',
  description: '',
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
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}