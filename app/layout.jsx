import './globals.css';
import SpaceEffect from "@/components/SpaceEffect";

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <SpaceEffect>
     {children}
     </SpaceEffect>
     </body>
    </html>
  );
}