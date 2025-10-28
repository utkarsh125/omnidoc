"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { EyeIcon, EyeSlashIcon, ArrowLeftIcon } from "@phosphor-icons/react";

gsap.registerPlugin(useGSAP);

interface AuthFormProps {
  mode: "signin" | "signup";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const isSignUp = mode === "signup";

  // Reset form when mode changes
  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setShowPassword(false);
    setRememberMe(false);
    setError("");
  }, [mode]);

  // Initial page load animation
  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();
    
    tl.from(containerRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(formRef.current?.children || [], {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.3");
  }, { scope: containerRef, dependencies: [mode] });

  // Error animation
  useEffect(() => {
    if (error && errorRef.current) {
      gsap.fromTo(
        errorRef.current,
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [error]);

  useEffect(() => {
    const expired = searchParams.get("expired");
    if (expired === "true") {
      setError("Your session has expired. Please sign in again.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isSignUp) {
        const response = await axios.post("/api/auth/signup", {
          name,
          email,
          password,
        });

        if (response.status === 201) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          gsap.to(containerRef.current, {
            scale: 0.95,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              router.push("/dashboard");
            },
          });
        }
      } else {
        const response = await axios.post("/api/auth/signin", {
          email,
          password,
        });

        if (response.data.token) {
          if (rememberMe) {
            localStorage.setItem("myapp-email", email);
            localStorage.setItem("myapp-password", password);
          } else {
            localStorage.removeItem("myapp-email");
            localStorage.removeItem("myapp-password");
          }

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          gsap.to(containerRef.current, {
            scale: 0.95,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              const redirect = searchParams.get("redirect");
              router.push(redirect || "/dashboard");
            },
          });
        }
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        `Failed to ${isSignUp ? "sign up" : "sign in"}`;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Load remembered credentials - only for signin
  useEffect(() => {
    if (!isSignUp) {
      const savedEmail = localStorage.getItem("myapp-email");
      const savedPassword = localStorage.getItem("myapp-password");
      if (savedEmail && savedPassword) {
        setEmail(savedEmail);
        setPassword(savedPassword);
        setRememberMe(true);
      }
    }
  }, [isSignUp]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 relative">
      {/* Back to Home Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeftIcon size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </button>

      <div
        ref={containerRef}
        className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 md:p-10"
      >
        {/* Pill Badge - Changes based on mode */}
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-yellow-300 text-black text-sm font-medium px-4 py-1.5 rounded-full">
            Omnidocs {isSignUp ? "Sign Up" : "Login"}
          </span>
        </div>

        {/* Welcome Heading - Changes based on mode */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          {isSignUp ? "Join Omnidocs!" : "Welcome Back!"}
        </h1>

        {/* Error Alert */}
        {error && (
          <div
            ref={errorRef}
            className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
          >
            {error}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Name field - only visible in signup mode */}
          {isSignUp && (
            <div key="name-field">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:bg-gray-50"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="somemail@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:bg-gray-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeSlashIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember me and Forgot password - only visible in signin mode */}
          {!isSignUp && (
            <div key="remember-forgot" className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-lime-400 focus:ring-lime-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  type="button"
                  className="font-medium text-gray-900 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </div>
          )}

          {/* Submit button - Text changes based on mode */}
          <div 
            className="w-full"
            onClick={() => submitButtonRef.current?.click()}
          >
            <CustomSubmitButton 
              text={
                isLoading 
                  ? (isSignUp ? "Creating Account..." : "Signing in...") 
                  : (isSignUp ? "Create an Account" : "Log In")
              } 
              disabled={isLoading}
            />
          </div>

          {/* Hidden submit button */}
          <button ref={submitButtonRef} type="submit" className="hidden" />

          {/* Toggle between signin/signup - Text changes based on mode */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button
                type="button"
                onClick={() => router.push(isSignUp ? "/signin" : "/signup")}
                className="text-gray-900 font-semibold hover:underline"
              >
                {isSignUp ? "Log in" : "Sign up"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

// Custom submit button component
function CustomSubmitButton({ text, disabled }: { text: string; disabled: boolean }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !spanRef.current || disabled) return;

    const span = spanRef.current;
    const tl = gsap.timeline({ paused: true });

    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.2, yPercent: 0 });

    const button = buttonRef.current;
    const handleMouseEnter = () => tl.play(0);

    button.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [disabled]);

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      className={`w-full inline-grid bg-lime-300 hover:bg-lime-400 rounded-xl px-6 py-3.5 text-black overflow-hidden text-center cursor-pointer transition-colors duration-200 text-base font-medium ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <span ref={spanRef} className="inline-block">
        {text}
      </span>
    </button>
  );
}
