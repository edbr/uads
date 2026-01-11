import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { BestSellersFilter } from "@/components/BestSellersFilter";
import {PromoBanner} from "@/components/PromoBanner";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductGallery } from "@/components/ProductGallery";

export default function Home() {
  return (
    <main className="p-10 space-y-2">
      <h1 className="text-3xl font-semibold">
        Universal Audio Design System
      </h1>
      <p className="text-muted-foreground">
        Tokens, components, and patterns for UA products.
      </p>

      <div className="flex gap-6 items-center mt-10">
        <BestSellersFilter />
      </div>

<div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 border-t border-border pt-10">
  <ProductCard
    title="Holiday Freebie"
    href="/products/pick-one-free-plug-in"
    imageSrc="/holiday.jpg"
    price="$299"
    ctaLabel="Choose Plug-Ins"
  />

  <ProductCard
    title="Holiday Freebie"
    href="/products/pick-one-free-plug-in"
    imageSrc="/mixtape.webp"
    price="$299"
    ctaLabel="Choose Plug-Ins"
  />
</div>

<div className= "p-10 mt-10 border-t border-border">
<ProductInfo 
  title="Lion '68 Super Lead Amp"
  description="Get the iconic plexi tones that powered rock."
  features={[
    "Authentic emulation of a 100-watt late-’60s plexi head",
    "Three legendary setups — Super Lead, Super Bass, and Brown",
    "Vintage mic/speaker pairings, boosts, and amp mods",
    "MIDI control, Bluetooth, and footswitch modes",
  ]}
  promo="Save $50 for a limited time! Ends 1/31."
/>
</div>

<div className= "p-10 mt-10 border-t border-border">
<PromoBanner text="Save $50 for a limited time! Ends 1/31."/>
</div>

<div className= "p-16 mt-10 border-t border-border">
<ProductGallery
  images={[
    { src: "/midi.webp" },
    { src: "/lion.webp" },
    { src: "/lion2.webp" },
  ]}
/>
</div>

    </main>
  );
}