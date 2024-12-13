"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="celestial-animation"></div>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-800 dark:-rotate-90 dark:scale-0 z-10" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-800 dark:rotate-0 dark:scale-100 z-10" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

