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
        Born in 2007. A curious and driven individual, always{" "}
        <span className="text-foreground italic font-serif">learning</span>,{" "}
        experimenting, and pushing boundaries in everything I do.
      </>
    ),
    links: [
      {
        label: "Github",
        icon: <Github className="w-4 h-4" />,
        href: "https://github.com",
      },
      {
        label: "Instagram",
        icon: <Instagram className="w-4 h-4" />,
        href: "https://instagram.com/priyansxu_gupta",
      },
    ],
    button: "Get in touch",
    action: "email",
  },
  {
    id: "02",
    title: "The Craft",
    subtitle: "Development & Design",
    text: (
      <>
        I work with Python and JavaScript, using{" "}
        <span className="text-foreground italic font-serif">frameworks</span>{" "}
        to build modern web applications with a focus on UI/UX. Alongside
        development,{" "}
        <span className="text-foreground italic font-serif">
          graphics designing
        </span>{" "}
        lets me bring interfaces to life with creative visuals.
      </>
    ),
    button: "View my work",
    action: "projects",
  },
  {
    id: "03",
    title: "Beyond Code",
    subtitle: "Ideas & Explorations",
    text: (
      <>
        Beyond development, I’m fascinated by{" "}
        <span className="text-foreground italic font-serif">psychology</span>{" "}
        and{" "}
        <span className="text-foreground italic font-serif">astronomy</span>—
        digging into how people think and the vastness of the universe to spark
        new ideas and fuel my creativity.
      </>
    ),
    button: "Let's connect",
    action: "social",
  },
];

export default function Page() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const current = pages[page]

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-4xl mx-auto w-full px-6 md:px-12 py-12 md:py-20">
        <header className="flex items-center justify-between mb-24 md:mb-32">
          <div className="group cursor-crosshair">
            <h1 className="text-xl font-medium font-monoscript flex items-center gap-3">
              Priyanshu
              <span className="text-[10px] px-2 py-0.5 rounded-full border border-border bg-muted/50 text-muted-foreground tracking-[0.2em] font-bold">
                dev
              </span>
            </h1>
          </div>

          <div
            className="flex items-center gap-1 bg-card border border-border rounded-full p-1 shadow-sm cursor-pointer select-none"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            <div
              className={`p-1.5 rounded-full transition-all ${
                theme === "dark"
                  ? "bg-accent shadow-inner text-foreground"
                  : "bg-transparent text-muted-foreground"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </div>

            <div
              className={`p-1.5 rounded-full transition-all ${
                theme === "light"
                  ? "bg-accent shadow-inner text-foreground"
                  : "bg-transparent text-muted-foreground"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </div>
          </div>
        </header>

        <section className="flex-1 flex flex-col justify-center max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="space-y-10"
            >
              <div className="space-y-3">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.6, x: 0 }}
                  className="text-primary font-mono text-xs tracking-[0.3em] uppercase block"
                >
                  {current.id} — {current.subtitle}
                </motion.span>

                <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-pretty">
                  {current.title}
                </h2>
              </div>

              <div className="space-y-12">
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium max-w-xl text-balance">
                  {current.text}
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                  <button className="group relative flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-foreground/5">
                    {current.button}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {current.links && (
                    <div className="flex items-center gap-6 py-4">
                      {current.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        <footer className="mt-24 md:mt-32 flex items-center justify-between border-t border-border pt-12">
          <div className="flex items-center gap-10">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground disabled:opacity-0 disabled:pointer-events-none transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>

            <div className="hidden md:flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">
              <span>Progress</span>
              <div className="w-24 h-[2px] bg-border relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary origin-left"
                  initial={false}
                  animate={{
                    scaleX: (page + 1) / pages.length,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                />
              </div>
              <span className="text-foreground">
                0{page + 1} / 03
              </span>
            </div>
          </div>

          <button
            onClick={() =>
              setPage((p) =>
                Math.min(p + 1, pages.length - 1)
              )
            }
            disabled={page === pages.length - 1}
            className="group flex items-center gap-4 px-8 py-4 bg-muted border border-border rounded-full font-bold text-sm hover:bg-accent hover:border-foreground/20 transition-all active:scale-[0.95] disabled:opacity-0 disabled:pointer-events-none"
          >
            Next Step
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </footer>
      </div>
    </main>
  )
}