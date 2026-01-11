import Link from "next/link"

type PromoBannerProps = {
  text: string
  href?: string
}

export function PromoBanner({ text, href }: PromoBannerProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-(--ua-promo-bg,#e9efe0) px-4 py-3 text-sm text-foreground">
      
      {/* Icon */}
      <span className="text-(--ua-promo-icon,#7a8f5a)">
        ⚡
      </span>

      {/* Text */}
      <span className="flex-1">
        {text}
        {href && (
          <>
            {" "}
            <Link
              href={href}
              className="underline underline-offset-2 text-foreground"
            >
              Details
            </Link>
          </>
        )}
      </span>
    </div>
  )
}
