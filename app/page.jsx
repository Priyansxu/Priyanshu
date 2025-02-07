"use client";

import Head from "next/head";
import ASCIIText from '@/components/text/ASCIIText';
import TrueFocus from '@/components/text/TrueFocus';

export default function Page() {
  return (
    <main className="relative min-h-screen flex">
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   </Head>
      <div>
        <TrueFocus 
sentence="Priyanshu Gupta"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
className="m-6"
/>
         </div>
    </main>
  );
}