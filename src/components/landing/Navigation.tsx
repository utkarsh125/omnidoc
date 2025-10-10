import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Rise</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#works" className="text-sm text-gray-300 hover:text-white transition-colors">
              Works
            </Link>
          </div>

          <Button className="bg-primary-blue hover:bg-blue-600 text-white px-6">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}