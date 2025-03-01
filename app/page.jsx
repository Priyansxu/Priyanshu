"use client";

import Head from "next/head";
import Image from "next/image";
import SplitText from "@/components/text/SplitText";
import TextPressure from "@/components/text/TextPressure";
import ScrollReveal from "@/components/text/ScrollReveal";
import Fade from "@/components/effects/Fade";
import { Twitter, Instagram, Send, Linkedin } from "lucide-react";

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
        <div className="text-center text-white">
          <SplitText text="Priyanshu Gupta" className="text-[1.55rem] md:text-4xl lg:text-5xl font-bold font-necosmic mb-4 mt-8" />
          <Fade blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <TextPressure text="Web Developer & Designer" minFontSize={20} textColor="#d3d3d3" />
          </Fade>
        </div>
      </section>

      <section id="about" className="py-32 px-6 md:px-8 lg:px-16 text-white">
        <h2 className="text-3xl font-bold font-kubo mb-8 text-center">About</h2>
        <p className="max-w-2xl mx-auto text-md text-white/80 text-center font-ranadeMd">
          I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful,
          functional websites. With expertise in modern web technologies, I bring ideas to life through clean code and
          stunning visuals.
        </p>
      </section>

      <section id="skills" className="py-32 px-4 md:px-8 lg:px-16 text-white">
        <h2 className="text-3xl font-bold font-kubo mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["Python", "JavaScript", "React", "Next.js", "Tailwind CSS", "UI/UX Design"].map(
            (skill) => (
              <div key={skill} className="px-4 py-2 rounded-full text-sm border border-[#353535] text-[#7A7A7A] bg-[#111111]/90 shadow-inner">
                {skill}
              </div>
            ),
          )}
        </div>
      </section>

      <section id="social" className="py-32 px-4 md:px-8 lg:px-16 pb-16">
        <h2 className="text-3xl text-white font-bold font-kubo mb-8 text-center">Social</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {[
            { icon: Twitter, username: "@priyansxu_gupta", color: "#1DA1F2" },
            { icon: Instagram, username: "@priyansxu_gupta", color: "#E1306C" },
            { icon: Send, username: "@priyansxu_gupta", color: "#0088cc" },
            { icon: Linkedin, username: "@priyansxu_gupta", color: "#E60023" },
          ].map((social, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-5 py-3 bg-[#151515] border border-[#252525] text-white hover:bg-[#181818] transition-all duration-300"
              style={{ 
                boxShadow: `inset 0 0 20px rgba(${index === 0 ? '29, 161, 242' : index === 1 ? '225, 48, 108' : index === 2 ? '0, 136, 204' : '230, 0, 35'}, 0.1)` 
              }}
            >
              <social.icon size={20} color={social.color} />
              <span className="text-gray-300 font-medium">{social.username}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}