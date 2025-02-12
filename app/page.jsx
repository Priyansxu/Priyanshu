"use client";

import Head from "next/head";
import Aurora from "@/components/Aurora"
import SplitText from "@/components/text/SplitText";
import TextPressure from "@/components/text/TextPressure";


export default function Page() {
  return (
    <main className="min-h-screen">
     <section className="h-screen flex items-center justify-center">
      <div className="text-center text-white font-ranade">
      <SplitText text="PRIYANSHU G" className="text-4xl font-bold tracking-wider font-monaBold mb-4" />
        <TextPressure text="Web Developer & Designer" minFontSize={16} textColor="#ffffff" />
      </div>
    </section>
    </main>
  );
}