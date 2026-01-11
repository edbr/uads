import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-bold transition",
  {
    variants: {
variant: {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90",

  outline:
    "border border-[var(--ua-border-subtle,#191919)] bg-transparent hover:bg-muted",

  inverse:
    "border border-[var(--ua-border-subtle,#191919)] bg-background text-foreground hover:bg-muted",
},
      size: {
          default: "h-10 px-4 py-2",
  icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
