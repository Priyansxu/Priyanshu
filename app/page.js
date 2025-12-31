"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const pages = [
  {
    id: "01",
    text: (
      <>
        Priyanshu Gupta, born in 2007. A passionate and curious individual with a
        keen interest in programming, graphics designing, psychology, and space
        exploration. Instagram{" "}
        <a
          href="#"
          className="underline underline-offset-8 decoration-1 text-foreground hover:opacity-70 transition-opacity"
        >
          @priyansxu_gupta
        </a>
      </>
    ),
    button: "E-mail me",
  },
  {
    id: "02",
    text: (
      <>
        Focused on building clean interfaces, learning modern web technologies,
        and experimenting with design systems, animations, and performance-driven
        development.
      </>
    ),
    button: "View work",
  },
  {
    id: "03",
    text: (
      <>
        Exploring ideas beyond code — psychology, space, philosophy, and how
        humans interact with technology. Always learning, always questioning.
      </>
    ),
    button: "Let’s connect",
  },
]

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
    <main className="min-h-screen flex flex-col bg-background text-foreground p-6 md:p-12 max-w-2xl mx-auto font-mono transition-colors duration-300">
      <header className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Priyanshu</h1>
          <span className="px-2 py-0.5 bg-muted text-[10px] font-bold uppercase tracking-widest rounded-full text-muted-foreground border border-border">
            dev
          </span>
        </div>

        <div
          className="flex items-center gap-1 bg-card border border-border rounded-full p-1 shadow-sm cursor-pointer select-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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

      <section className="flex-1 flex flex-col justify-center">
        <div className="space-y-8 w-full">
          <div className="text-[140px] font-black leading-none tracking-tighter select-none">
            {current.id}
          </div>

          <div className="space-y-8">
            <p className="text-[22px] leading-[1.4] text-muted-foreground font-medium tracking-tight">
              {current.text}
            </p>

            <button className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold text-lg tracking-tight hover:opacity-90 transition-all active:scale-[0.98]">
              {current.button}
            </button>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-between pt-12">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-10 py-4 bg-secondary text-muted-foreground rounded-full font-bold text-sm hover:bg-secondary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Back
        </button>

        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-foreground">{page + 1}</span>
          <span className="text-muted font-light">/</span>
          <span className="text-muted-foreground font-medium">3</span>
        </div>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, 2))}
          disabled={page === 2}
          className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:opacity-90 transition-all active:scale-[0.95] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </footer>
    </main>
  )
}