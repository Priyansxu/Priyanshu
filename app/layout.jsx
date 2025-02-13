import './globals.css';
import Head from "next/head";
import Aurora from "@/components/Aurora"

export const metadata = {
  title: 'Priyanshu G.',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen w-full">
          <div className="absolute inset-0 z-0">
            <Aurora 
              colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
              amplitude={1.0}
            />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}