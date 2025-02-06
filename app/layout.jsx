import './globals.css';
import SpaceEffects from "@/components/SpaceEffect";

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <SpaceEffects>
     {children}
     </SpaceEffects>
     </body>
    </html>
  );
}