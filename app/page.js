"use client"

import { Moon, Sun, ArrowRight, ArrowLeft, Github, Instagram, Mail, Twitter, Send } from "lucide-react"
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
        <span className="text-foreground italic font-serif">frameworks</span> to build modekrn web apps.{" "}
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

  return (
    <main
      className={`min-h-screen flex flex-col text-foreground selection:bg-primary/30 selection:text-primary-foreground ${
        isDark ? "bg-black" : "bg-background"
      }`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-4xl mx-auto w-full px-6 md:px-12 py-12 md:py-20">
        <header className="flex items-center justify-between mb-24 md:mb-32">
          <h1 className="text-xl font-medium font-lexend flex items-center gap-3 cursor-crosshair">
            Priyanshu
            <span
              className={`text-sm font-bold rounded-3xl px-3 ${
                isDark ? "bg-white text-black" : "border border-border bg-muted/50 text-muted-foreground"
              }`}
            >
              dev
            </span>
          </h1>

          <div
            className={`flex flex-col items-center gap-1 p-1 rounded-2xl ${
              isDark ? "bg-[#111] border border-zinc-800" : "bg-card border border-border shadow-sm"
            }`}
          >
            <button
              onClick={() => setTheme("dark")}
              className={`p-1.5 ${isDark ? "text-zinc-500" : "text-zinc-700"}`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setTheme("light")}
              className={`p-1.5 rounded-full ${
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
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  {current.id} — {current.subtitle}
                </span>
                <h2 className="text-5xl md:text-8xl font-mona">{current.title}</h2>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium max-w-xl">
                {current.text}
              </p>

              {current.buttonType === "social" ? (
                <motion.button
                  onClick={() => setSocialExpanded(!socialExpanded)}
                  className={`flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg shadow-xl ${
                    isDark ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  <span>{current.button}</span>
                  <AnimatePresence mode="wait">
                    {socialExpanded && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="flex items-center gap-2"
                      >
                        {current.links.map((link, idx) => (
                          <motion.a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.2 }}
                          >
                            {link.icon}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ) : (
                <button
                  onClick={() => window.open(current.action, "_blank")}
                  className={`flex items-center gap-4 px-10 py-5 rounded-full font-bold text-lg shadow-xl ${
                    isDark ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  {current.button}
                  {current.buttonType === "default" && <ArrowRight className="w-5 h-5" />}
                  {current.buttonType === "email" && <Mail className="w-5 h-5" />}
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        <footer className="mt-24 flex items-center justify-between">
          <button
            onClick={() => {
              setPage((p) => Math.max(p - 1, 0))
              setSocialExpanded(false)
            }}
            disabled={page === 0}
            className={`flex items-center gap-1 px-5 py-2 rounded-full text-xs font-semibold ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            } disabled:opacity-0`}
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>

          <button
            onClick={() => {
              setPage((p) => Math.min(p + 1, pages.length - 1))
              setSocialExpanded(false)
            }}
            disabled={page === pages.length - 1}
            className={`flex items-center gap-1 px-6 py-2.5 rounded-full text-xs font-semibold ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            } disabled:opacity-0`}
          >
            Next
            <ArrowRight className="w-3 h-3" />
          </button>
        </footer>
      </div>
    </main>
  )
}