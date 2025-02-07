"use client";

import Head from "next/head";
import ASCIIText from '@/components/text/ASCIIText';
import TrueFocus from '@/components/text/TrueFocus';
import BlurText from "@/components/text/BlurText";

export default function Page() {
  return (
    <main className="relative min-h-screen flex">
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   </Head>
      <div>
        <TrueFocus sentence="Priyanshu Gupta" className="m-6 relative p-6 text-xl" />
        <BlurText text="Isn't this so cool?!" className="text-2xl mb-8 text-white font-medium" />
         </div>
    </main>
  );
}