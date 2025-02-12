"use client";

import Head from "next/head";
import Aurora from "@/components/Aurora"
import SplitText from "@/components/text/SplitText";
import TextPressure from "@/components/text/TextPressure";
import Fade from "@components/effects/Fade";


export default function Page() {
  return (
    <main className="min-h-screen">
     <section className="h-screen flex items-center justify-center">
      <div className="text-center text-white font-ranade">
      <SplitText text="PRIYANSHU G" className="text-4xl font-bold tracking-widest font-monaBold mb-4" />
        import FadeContent from './FadeContent'
  
<Fade blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
  <TextPressure text="Web Developer & Designer" minFontSize={16} textColor="#ffffff" />
</Fade>
      </div>
    </section>
    </main>
  );
}