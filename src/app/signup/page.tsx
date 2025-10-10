"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignUpPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to signin page which now has tabs for both signin and signup
    router.push("/signin");
  }, [router]);

  return null;
}