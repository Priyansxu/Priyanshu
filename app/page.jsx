"use client";

import ASCIIText from '@/components/text/ASCIIText';

export default function Page() {
  return (
    <main className="relative min-h-screen flex">
      <div>
        <ASCIIText text='Priyanshu' enableWaves={true} className="relative m-6" />
      </div>
    </main>
  );
}