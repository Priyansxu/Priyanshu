import Head from "next/head";
import Aurora from "@/components/Aurora"

export default function Page() {
  return (
    <main className="relative min-h-screen flex">
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   </Head>
    <Aurora colorStops={["#00d8ff", "#7cff67", "#ff7f7f"]} speed={0.5} />
    </main>
  );
}