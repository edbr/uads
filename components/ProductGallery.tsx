"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type ProductGalleryProps = {
  images: {
    src: string
    alt?: string
  }[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [active, setActive] = useState(0)

  // Sync active index with carousel
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActive(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="space-y-4 max-w-md">
      
      {/* Main image */}
      <Carousel
        setApi={setApi}
        opts={{ align: "start" }}
        className="relative"
      >
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-square rounded-xl bg-(--ua-bg-canvas,#FDF9F2) p-8">
                <Image
                  src={img.src}
                  alt={img.alt ?? ""}
                  fill
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "relative aspect-square w-16 rounded-lg bg-(--ua-bg-canvas,#FDF9F2) p-2 transition",
              active === i
                ? "ring-2 ring-foreground"
                : "opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              className="object-contain"
            />
          </button>
        ))}
      </div>

    </div>
  )
}
