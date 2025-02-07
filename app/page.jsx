"use client";

import Head from "next/head";
import ASCIIText from '@/components/text/ASCIIText';

export default function Page() {
  return (
    <main className="relative min-h-screen flex">
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   </Head>
      <div>
        <ASCIIText text='Priyanshu' enableWaves={true} className="relative m-6" />
      </div>
    </main>
  );
}