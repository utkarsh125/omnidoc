//File to handle authentication and user identification

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export type AuthResult = {
  userId?: string;
  error?: string;
  errorType?: 'expired' | 'invalid' | 'missing';
};

export function getCurrentUserId(request: NextRequest): AuthResult {
  //get token from cookie or header

  const token =
    request.cookies.get("token")?.value ||
    request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return { error: "No token provided", errorType: 'missing' };
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;

    if (!decoded || !decoded.userId) {
      return { error: "Invalid authentication token", errorType: 'invalid' };
    }
    return { userId: decoded.userId };
  } catch (error: any) {
    // Distinguish between expired and invalid tokens
    if (error.name === 'TokenExpiredError') {
      return { error: "Token has expired", errorType: 'expired' };
    } else if (error.name === 'JsonWebTokenError') {
      return { error: "Invalid token", errorType: 'invalid' };
    }
    return { error: "Authentication failed", errorType: 'invalid' };
  }
}

export function getCurrentUserIdFromCookie(request: NextRequest): AuthResult {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return { error: "No authentication token provided", errorType: 'missing' };
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;
    
    if (!decoded || !decoded.userId) {
      return { error: "Invalid authentication token", errorType: 'invalid' };
    }
    
    return { userId: decoded.userId };
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return { error: "Token has expired", errorType: 'expired' };
    } else if (error.name === 'JsonWebTokenError') {
      return { error: "Invalid token", errorType: 'invalid' };
    }
    return { error: "Authentication failed", errorType: 'invalid' };
  }
}

// function that handles both cookie and header authentication
export function getCurrentUserIdFromRequest(request: NextRequest): AuthResult {
  // Try cookie first, then header
  const cookieToken = request.cookies.get("token")?.value;
  const headerToken = request.headers
    .get("authorization")
    ?.replace("Bearer ", "");

  const token = cookieToken || headerToken;

  if (!token) {
    return { error: "No authentication token provided", errorType: 'missing' };
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;

    if (!decoded || !decoded.userId) {
      return { error: "Invalid authentication token", errorType: 'invalid' };
    }

    return { userId: decoded.userId };
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return { error: "Token has expired", errorType: 'expired' };
    } else if (error.name === 'JsonWebTokenError') {
      return { error: "Invalid token", errorType: 'invalid' };
    }
    return { error: "Authentication failed", errorType: 'invalid' };
  }
}

// function to create appropriate error responses
export function createAuthErrorResponse(authResult: AuthResult): NextResponse {
  if (authResult.errorType === 'expired') {
    return NextResponse.json(
      { error: "Session expired", code: "TOKEN_EXPIRED", message: "Please sign in again" },
      { status: 401 }
    );
  } else if (authResult.errorType === 'missing') {
    return NextResponse.json(
      { error: "Not authenticated", code: "NO_TOKEN", message: "Please sign in to continue" },
      { status: 401 }
    );
  } else {
    return NextResponse.json(
      { error: "Invalid authentication", code: "INVALID_TOKEN", message: "Please sign in again" },
      { status: 401 }
    );
  }
}
