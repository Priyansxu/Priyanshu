"use client";

import Head from "next/head";
import Image from "next/image";
import SplitText from "@/components/text/SplitText";
import TextPressure from "@/components/text/TextPressure";
import Fade from "@/components/effects/Fade";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <meta name="title" content="Priyanshu G." />
        <meta name="description" content="They don't know me son." />
      </Head>
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="text-center text-white font-ranade">
          <SplitText text="Priyanshu Gupta" className="text-3xl font-bold font-necosmic mb-4 mt-8" />
          <Fade blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <TextPressure text="Web Developer & Designer" minFontSize={20} textColor="#d3d3d3" />
          </Fade>
        </div>
      </section>
    </main>
  );
}