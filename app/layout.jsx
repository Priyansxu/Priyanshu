import './globals.css';
import Space from "@/components/SpaceEffects"

export const metadata = {
  title: 'Priyanshu G.',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen">
          <div className="fixed inset-0 z-0">
            <Space />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}