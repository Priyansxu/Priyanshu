import Head from "next/head";
import Aurora from "@/components/Aurora"
import BlurText from "@/components/BlurText";


export default function Page() {
  return (
    <main className="min-h-screen">
     <section className="h-screen flex items-center justify-center">
      <div className="text-center text-white font-ranade">
<BlurText
  text="Priyanshu Gupta"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-3xl font-bold mb-4"
/>
        <p className="text-md">Web Developer & Designer</p>
      </div>
    </section>
    </main>
  );
}