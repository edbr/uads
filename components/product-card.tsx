import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

type ProductCardProps = {
  title: string
  href: string
  imageSrc: string
  imageAlt?: string
  price: string
  ctaLabel: string
}

export function ProductCard({
  title,
  href,
  imageSrc,
  imageAlt = "",
  price,
  ctaLabel,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-sm max-w-lg">
      
      {/* Image */}
      <Link href={href} className="block px-4 pt-4">
        <div className="relative aspect-square rounded-lg">
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
<CardContent className="px-5 pt-3 pb-5">
  
  {/* Title — closer + bigger */}
  <h3 className="text-xl font-semibold leading-tight mb-2">
    <Link href={href} className="hover:underline">
      {title}
    </Link>
  </h3>

  {/* Price */}
  <span className="block text-lg font-semibold text-foreground mb-4">
    {price}
  </span>

  {/* CTA — full width */}
  <Button
    variant="inverse"
    className="w-full rounded-full py-5 text-sm font-medium"
    asChild
  >
    <Link href={href}>
      {ctaLabel}
    </Link>
  </Button>

</CardContent>

    </Card>
  )
}
