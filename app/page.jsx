"use client";

import ASCIIText from '@/components/text/ASCIIText';

export default function Page() {
  return (
    <main className="relative min-h-screen flex">
      <div>
        <ASCIIText
          text='Priyanshu Gupta'
          enableWaves={true}
          asciiFontSize={1}
          className="relative m-6"
        />
      </div>
    </main>
  );
}