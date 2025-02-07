"use client";

import ASCIIText from '@/components/text/ASCIIText';

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div className="w-full">
        <ASCIIText
          text='Priyanshu Gupta'
          enableWaves={true}
          asciiFontSize={4}
          className="relative m-6"
        />
      </div>
    </main>
  );
}