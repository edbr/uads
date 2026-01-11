"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

type Category = {
  id: string
  label: string
}

const categories: Category[] = [
  { id: "plugins", label: "UAD Plug-Ins" },
  { id: "apollo", label: "Apollo Interfaces" },
  { id: "mics", label: "Microphones" },
]

export function BestSellersFilter() {
  const [active, setActive] = useState("plugins")

  return (
    <div className="space-y-4">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold">
        Shop Best Sellers
      </h2>

      {/* Pills */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = active === category.id

          return (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                "border border-border",
isActive
  ? "bg-(--ua-pill-active-bg) text-(--ua-pill-active-text) border-transparent"
  : "bg-transparent text-muted-foreground hover:bg-muted"

              )}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
