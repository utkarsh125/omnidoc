//File to get shit like Current User ID and other auth related stuff

import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function getCurrentUserId(request: NextRequest): string {
  //get token from cookie or header

  const token =
    request.cookies.get("token")?.value ||
    request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new Error("No token provided");
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;

    if (!decoded || !decoded.userId) {
      throw new Error("Invalid authentication token");
    }
    return decoded.userId;
  } catch (error) {
    throw new Error("Invalid authentication token");
  }
}

export function getCurrentUserIdFromCookie(request: NextRequest): string {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    throw new Error("No authentication token provided");
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded =
      jwt.verify(token, process.env.JWT_SECRET) || ("somesecretkeynig" as any);
    return decoded.userId;
  } catch (error) {
    throw new Error("Invalid authentication token");
  }
}

// function that handles both cookie and header authentication
export function getCurrentUserIdFromRequest(request: NextRequest): string {
  // Try cookie first, then header
  const cookieToken = request.cookies.get("token")?.value;
  const headerToken = request.headers
    .get("authorization")
    ?.replace("Bearer ", "");

  const token = cookieToken || headerToken;

  if (!token) {
    throw new Error("No authentication token provided");
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;

    if (!decoded || !decoded.userId) {
      throw new Error("Invalid authentication token");
    }

    return decoded.userId;
  } catch (error) {
    throw new Error("Invalid authentication token");
  }
}
