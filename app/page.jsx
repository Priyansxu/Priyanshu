"use client";

import Head from "next/head";
import Aurora from "@/components/Aurora"
import SplitText from "@/components/text/SplitText";


export default function Page() {
  return (
    <main className="min-h-screen">
     <section className="h-screen flex items-center justify-center">
      <div className="text-center text-white font-ranade">
      <SplitText text="PRIYANSHU" className="text-6xl font-bold font-monaBold mb-1" />
      <SplitText text="GUPTA" className="text-6xl font-bold font-monaBold mb-4" />
        <p className="text-md">Web Developer & Designer</p>
      </div>
    </section>
    </main>
  );
}