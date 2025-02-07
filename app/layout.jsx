import './globals.css';
import Aurora from "@/components/Aurora"

export const metadata = {
  title: 'Priyanshu G.',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative w-full h-full overflow-hidden">
        <Aurora colorStops={["#00d8ff", "#7cff67", "#ff7f7f"]} amplitude={1.5} />
        <div className="absolute inset-0 z-10">{children}</div>
      </body>
    </html>
  );
}