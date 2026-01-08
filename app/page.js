"use client"

import { Moon, Sun, ArrowRight, ArrowLeft, Github, Instagram, Mail, Twitter, Send } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const pages = [
  {
    id: "01",
    title: "Priyanshu Gupta",
    subtitle: "About Me",
    text: (
      <>
        Born in <span className="text-foreground italic font-serif">2007</span>. A curious and driven individual,{" "}
        <span className="text-foreground italic font-serif">learning</span> across different areas rather than committing
        to just a few.
      </>
    ),
    button: "Wanna email me?",
    action: "mailto:priyansxu@yahoo.com",
    buttonType: "email",
  },
  {
    id: "02",
    title: "The Craft",
    subtitle: "Development & Design",
    text: (
      <>
        I work with Python and JavaScript, using{" "}
        <span className="text-foreground italic font-serif">frameworks</span> to build modern web apps.{" "}
        <span className="text-foreground italic font-serif">Graphics designing</span> has been my favourite for years.
      </>
    ),
    button: "Social medias",
    buttonType: "social",
    links: [
      { label: "Github", icon: <Github className="w-4 h-4" />, href: "https://github.com" },
      { label: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/priyansxu_gupta" },
      { label: "Twitter", icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com" },
      { label: "Telegram", icon: <Send className="w-4 h-4" />, href: "https://t.me/priyansxu_gupta" },
    ],
  },
  {
    id: "03",
    title: "Beyond Code",
    subtitle: "Ideas & Explorations",
    text: (
      <>
        I'm fascinated by <span className="text-foreground italic font-serif">psychology</span> and{" "}
        <span className="text-foreground italic font-serif">astronomy</span> — understanding minds & exploring the cosmos.
        And yeah I love electronics.
      </>
    ),
    button: "Checkout portfolio",
    action: "https://priyanshu.js.cool",
    buttonType: "default",
  },
]

export default function Page() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(0)
  const [socialExpanded, setSocialExpanded] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = pages[page]
  const isDark = theme === "dark"

  const badgeStyle = isDark
    ? "bg-white text-black"
    : "border border-border bg-muted/50 text-muted-foreground"

  const primaryButtonStyle = isDark
    ? "bg-black text-white"
    : "bg-white text-black"

  return (
    <main className={`min-h-screen flex flex-col ${isDark ? "bg-black" : "bg-background"}`}>
      <div className="relative z-10 flex flex-col min-h-screen max-w-4xl mx-auto w-full px-6 md:px-12 py-12 md:py-20">
        <header className="flex items-center justify-between mb-24 md:mb-32">
          <h1 className="text-xl font-medium font-lexend flex items-center gap-3">
            Priyanshu
            <div className={`text-sm font-bold rounded-3xl px-3 ${badgeStyle}`}>dev</div>
          </h1>

          <div
            className={`flex items-center gap-1 p-1 rounded-2xl ${
              isDark ? "bg-[#111] border border-zinc-800" : "bg-card border border-border"
            }`}
          >
            <button onClick={() => setTheme("dark")} className="p-1.5">
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`p-1.5 rounded-full ${!isDark ? "bg-white shadow" : ""}`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        <section className="flex-1 flex flex-col justify-center max-w-2xl">
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="text-primary text-xs tracking-[0.3em] uppercase">
                {current.id} — {current.subtitle}
              </div>
              <h2 className="text-5xl md:text-8xl font-mona">{current.title}</h2>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {current.text}
            </p>

            {current.buttonType === "social" ? (
              <button
                onClick={() => setSocialExpanded(!socialExpanded)}
                className={`flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg ${primaryButtonStyle}`}
              >
                {current.button}
                {!socialExpanded && <ArrowRight className="w-5 h-5" />}
                {socialExpanded && (
                  <div className="flex gap-2">
                    {current.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                      </a>
                    ))}
                  </div>
                )}
              </button>
            ) : (
              <button
                onClick={() => window.open(current.action, "_blank")}
                className={`flex items-center gap-4 px-10 py-5 rounded-full font-bold text-lg ${primaryButtonStyle}`}
              >
                {current.button}
                {current.buttonType === "email" && <Mail className="w-5 h-5" />}
                {current.buttonType === "default" && <ArrowRight className="w-5 h-5" />}
              </button>
            )}
          </div>
        </section>

        <footer className="mt-24 md:mt-32 flex items-center justify-between border-t border-border pt-12">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className={`flex items-center gap-1 px-4 py-1.5 rounded-3xl text-xs font-bold ${badgeStyle} disabled:opacity-0`}
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>

          <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">
            <div className="w-24 h-[2px] bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${((page + 1) / pages.length) * 100}%` }}
              />
            </div>
            <div className="text-foreground">
              0{page + 1} / 0{pages.length}
            </div>
          </div>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, pages.length - 1))}
            disabled={page === pages.length - 1}
            className={`flex items-center gap-1 px-4 py-1.5 rounded-3xl text-xs font-bold ${badgeStyle} disabled:opacity-0`}
          >
            Next
            <ArrowRight className="w-3 h-3" />
          </button>
        </footer>
      </div>
    </main>
  )
}