"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

type ProductInfoProps = {
  title: string
  description: string
  features: string[]
  promo?: string
  ctaLabel?: string
}

export function ProductInfo({
  title,
  description,
  features,
  promo,
  ctaLabel = "Shop Now",
}: ProductInfoProps) {
  return (
    <div className="max-w-xl space-y-6">

      {/* Title */}
      <h1 className="text-3xl font-semibold leading-tight">
        {title}
      </h1>

      {/* Tabs */}
<Tabs defaultValue="features" className="w-full">
  <TabsList
    className="
      w-full justify-start gap-4
      border-b border-border
      bg-transparent p-0
    "
  >
    {["features", "compare", "faqs"].map((value) => (
      <TabsTrigger
        key={value}
        value={value}
        className="
          relative rounded-none
          bg-transparent px-0 pb-2
          text-sm font-medium
          text-muted-foreground

          data-[state=active]:bg-transparent
          data-[state=active]:text-foreground

          data-[state=active]:after:absolute
          data-[state=active]:after:left-0
          data-[state=active]:after:-bottom-px
          data-[state=active]:after:h-0.5
          data-[state=active]:after:w-full
          data-[state=active]:after:bg-foreground
        "
      >
        {value === "features"
          ? "Features"
          : value === "compare"
          ? "Compare"
          : "FAQs"}
      </TabsTrigger>
    ))}
  </TabsList>
</Tabs>



      {/* Details & Downloads */}
      <Accordion type="single" collapsible className="pt-4">
        <AccordionItem value="details">
          <AccordionTrigger>
            Details & Downloads
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            Additional specs, manuals, installers, and documentation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}
