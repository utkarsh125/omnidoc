export function GradientBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M0,500 Q250,300 500,500 T1000,500 L1000,1000 L0,1000 Z"
              fill="url(#grad1)"
              className="animate-pulse"
            />
          </svg>
        </div>
        <div className="absolute top-1/4 left-0 w-full h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path
              d="M0,600 Q250,400 500,600 T1000,600 L1000,1000 L0,1000 Z"
              fill="#93C5FD"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Footer text */}
      <div className="absolute bottom-8 left-8 right-8 text-center">
        <div className="glass-card rounded-2xl p-4 backdrop-blur-md">
          <p className="text-white/90 text-sm">
            © 2025 Omnitype. All rights reserved. 
          </p>
        </div>
      </div>
    </div>
  );
}