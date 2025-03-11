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
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="theme-color" content={metadata.themeColor} />
        <link rel="icon" href={metadata.icons.icon} type="image/svg+xml" />
        <meta name="google-site-verification" content="q2af5vwuRxGXH1zFQm0bHt5z5OcJZflkfwZuYgGU3l4" />
      </Head>
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
