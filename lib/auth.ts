import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET || "dev-only-insecure-secret-change-me";
const encodedKey = new TextEncoder().encode(secretKey);

export const AUTH_COOKIE_NAME = "sqlcentrix_admin_session";

export interface AdminSessionPayload extends JWTPayload {
  adminId: string;
  email: string;
  name: string;
}

/** Signs a JWT session token for a logged-in admin. */
export async function signSession(payload: AdminSessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

/** Verifies a JWT session token. Returns null if missing/invalid/expired. */
export async function verifySession(
  token: string | undefined
): Promise<AdminSessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as AdminSessionPayload;
  } catch {
    return null;
  }
}

/** Signs a session token and stores it as an httpOnly cookie. */
export async function createSessionCookie(payload: AdminSessionPayload) {
  const token = await signSession(payload);
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

/** Clears the admin session cookie (logout). */
export async function destroySessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

/** Reads and verifies the current admin session from cookies, server-side. */
export async function getCurrentAdmin(): Promise<AdminSessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  return verifySession(token);
}
