"use client"

import { Moon, Sun, ArrowRight, ArrowLeft, Github, Instagram } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const pages = [
  {
    id: "01",
    title: "Priyanshu Gupta",
    subtitle: "About Me",
    text: (
      <>
        Born in{" "}
        <span className="text-foreground italic font-serif">2007</span>. A curious and driven individual,{" "}
        <span className="text-foreground italic font-serif">learning</span>{" "}
        across different areas rather than committing to just a few.
      </>
    ),
    links: [
      { label: "Github", icon: <Github className="w-4 h-4" />, href: "https://github.com" },
      { label: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/priyansxu_gupta" },
    ],
    button: "Wanna email me?",
    action: "mailto:priyansxu@yahoo.com",
  },
  {
    id: "02",
    title: "The Craft",
    subtitle: "Development & Design",
    text: (
      <>
        I work with Python and JavaScript, using{" "}
        <span className="text-foreground italic font-serif">frameworks</span>{" "}
        to build modern web apps. And{" "}
        <span className="text-foreground italic font-serif">Graphics designing</span>{" "}
        has been my favourite for years.
      </>
    ),
    button: "Checkout my portfolio",
    action: "https://priyanshu.js.cool",
  },
  {
    id: "03",
    title: "Beyond Code",
    subtitle: "Ideas & Explorations",
    text: (
      <>
        I'm fascinated by{" "}
        <span className="text-foreground italic font-serif">psychology</span>{" "}
        and{" "}
        <span className="text-foreground italic font-serif">astronomy</span>—
        understanding minds and exploring the cosmos. And yeah I love electronics.
      </>
    ),
    button: "Chat on Telegram",
    action: "https://t.me/priyansxu_gupta",
  },
]

export default function Page() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(0)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = pages[page]
  const isDark = theme === "dark"

  return (
    <main className={`min-h-screen flex flex-col text-foreground selection:bg-primary/30 selection:text-primary-foreground ${isDark ? "bg-black" : "bg-background"}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-4xl mx-auto w-full px-6 md:px-12 py-12 md:py-20">
        <header className="flex items-center justify-between mb-24 md:mb-32">
          <h1 className="text-xl font-medium font-lexend flex items-center gap-3 cursor-crosshair">
            Priyanshu
            <span
              className={`text-sm font-bold inline-block rounded-3xl px-3 ${
                isDark
                  ? "bg-[#fafafa] text-black"
                  : "border border-border bg-muted/50 text-muted-foreground"
              }`}
            >
              dev
            </span>
          </h1>

          <div
            className={`flex flex-col items-center gap-1 p-1 rounded-2xl cursor-pointer select-none ${
              isDark
                ? "bg-[#111] border border-zinc-800"
                : "bg-card border border-border shadow-sm"
            }`}
          >
            <button
              onClick={() => setTheme("dark")}
              className={`p-1.5 transition-all ${isDark ? "text-zinc-700" : "text-zinc-500"}`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setTheme("light")}
              className={`p-1.5 rounded-full transition-all ${
                !isDark ? "bg-white shadow-xl text-zinc-700" : "text-zinc-500"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        <section className="flex-1 flex flex-col justify-center max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-10"
            >
              <div className="space-y-3">
                <motion.span className="text-primary font-mono text-xs tracking-[0.3em] uppercase block">
                  {current.id} — {current.subtitle}
                </motion.span>

                <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-pretty">
                  {current.title}
                </h2>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium max-w-xl">
                {current.text}
              </p>

              <button
                onClick={() => window.open(current.action, "_blank")}
                className={`group flex items-center gap-4 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl ${
                  isDark
                    ? "bg-white text-black shadow-white/5"
                    : "bg-foreground text-background shadow-foreground/5"
                }`}
              >
                {current.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </section>

        <footer className="mt-24 md:mt-32 flex items-center justify-between border-t border-border pt-12">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className={`flex items-center gap-2 text-sm font-bold transition-all ${
              isDark ? "text-zinc-400" : "text-muted-foreground"
            } disabled:opacity-0`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, pages.length - 1))}
            disabled={page === pages.length - 1}
            className={`group flex items-center gap-4 px-8 py-4 rounded-full font-bold text-sm transition-all ${
              isDark
                ? "bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
                : "bg-muted border border-border hover:border-foreground/20"
            } disabled:opacity-0`}
          >
            Next
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </footer>
      </div>
    </main>
  )
}