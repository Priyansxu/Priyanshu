"use client";

import Head from "next/head";
import Image from "next/image";
import Aurora from "@/components/Aurora";
import SplitText from "@/components/text/SplitText";
import TextPressure from "@/components/text/TextPressure";
import Fade from "@/components/effects/Fade";
import SplashCursor from "@/components/effects/SplashCursor";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <meta name="title" content="Priyanshu G." />
        <meta name="description" content="Somthing they don't know" />
        <meta name="keywords" content="Portfolio" />
      </Head>
      <section className="h-screen flex flex-col items-center justify-center">
    <div className="-translate-y-6 ">
      <Image
          src="/icon.png"
          alt="Icon"
          width={200}
          height={200}
          priority
        />
     </div>
        <SplashCursor />
        <div className="text-center text-white font-ranade">
          <SplitText text="PRIYANSHU GUPTA" className="text-2xl font-bold font-monaBold mb-4" />
          <Fade blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <TextPressure text="Web Developer & Designer" minFontSize={20} textColor="#ffffff" />
          </Fade>
        </div>
      </section>
    </main>
  );
}