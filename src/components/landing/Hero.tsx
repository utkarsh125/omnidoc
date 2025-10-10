import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-dark-bg overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-deep-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-light-blue text-sm mb-4 tracking-wider uppercase">
            We Design Applications users Love. Investors can't resist
          </p>
          <h1 className="heading-xl text-white mb-6">
            Hire React Native Developers<br />
            With the Skills You Need for Your<br />
            Next Project
          </h1>
          <p className="text-body-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Scale up your team, get faster time-to-market, greater agility, and excellent quality. Hire React Native 
            developers for hire at up to 60% cost-saving and zero hassle. We create advanced cross-platform user 
            interfaces, compatible with iOS and Android.
          </p>
          <Button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full">
            Book a Call
          </Button>
        </div>

        {/* Phone mockups */}
        <div className="relative h-[500px] max-w-5xl mx-auto">
          <div className="absolute left-[10%] top-0 w-[250px] h-[500px] float-animation" style={{ animationDelay: '0s' }}>
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-gray-800 bg-black">
              <img
                src="https://images.unsplash.com/photo-1561210596-383464a42be3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwJTIwZGFyayUyMGludGVyZmFjZXxlbnwwfDF8fGJsYWNrfDE3NjAwOTU5MTF8MA&ixlib=rb-4.1.0&q=85"
                alt="iPhone mockup showing dark mobile app interface - Szabo Viktor on Unsplash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-12 w-[250px] h-[500px] float-animation z-10" style={{ animationDelay: '1s' }}>
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-gray-800 bg-white">
              <img
                src="https://images.unsplash.com/photo-1644143155332-2ae7baf7d32f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8c21hcnRwaG9uZSUyMGFwcCUyMGxvZ2luJTIwd2hpdGUlMjBzY3JlZW58ZW58MHwxfHx8MTc2MDA5NTkxMXww&ixlib=rb-4.1.0&q=85"
                alt="iPhone mockup with login screen - Behnam Norouzi on Unsplash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute right-[10%] top-0 w-[250px] h-[500px] float-animation" style={{ animationDelay: '2s' }}>
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-gray-800 bg-black">
              <img
                src="https://images.unsplash.com/photo-1643336177967-710676ec3fa7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwJTIwZGFyayUyMHVpfGVufDB8MXx8YmxhY2t8MTc2MDA5NTkxMXww&ixlib=rb-4.1.0&q=85"
                alt="iPhone mockup showing dark mobile app - Jamaal Kareem on Unsplash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}