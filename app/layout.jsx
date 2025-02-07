import './globals.css';
import Space from "@/components/SpaceEffects"

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <Space>{children}</Space>
      </body>
    </html>
  );
}