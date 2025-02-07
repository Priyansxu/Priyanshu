"use client"

import Space from "@/components/SpaceEffects"
import ASCIIText from '@/components/text/ASCIIText';

export default function Page() {
  return (
    <main className="relative">
      <Space />
  <div>
    <ASCIIText
  text='Priyanshu Gupta'
  enableWaves={true}
  asciiFontSize={8}
  className="m-6 left-6"
     />
   </div>
    </main>
  )
}

