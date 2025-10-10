'use client'

import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { TrustSection } from "@/components/landing/TrustSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustSection />
    </main>
  );
}