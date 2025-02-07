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
        <div className="absolute inset-0 z-10">{children}</div>
      </body>
    </html>
  );
}