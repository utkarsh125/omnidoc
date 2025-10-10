import { Sparkles } from "lucide-react";

export function GradientBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-primary/60">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-12 text-primary-foreground">
        <div className="max-w-md text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Welcome to Omnitype
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Your modern collaborative text editor for seamless real-time collaboration
          </p>
          
          {/* Features */}
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-sm">Real-time collaboration with your team</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-sm">Powerful rich text editor</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-sm">Secure and private by default</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-sm text-primary-foreground/70">
          © 2025 Omnitype. All rights reserved. 
        </div>
      </div>
    </div>
  );
}