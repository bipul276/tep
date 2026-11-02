import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Malicious probe patterns commonly scanned by automated botnets and exploit scrapers
const MALICIOUS_PATTERNS = [
  /\/\.env/i,
  /\/\.git/i,
  /\/\.aws/i,
  /\/\.ssh/i,
  /\/\.well-known\/(?!acme-challenge)/i,
  /\.php$/i,
  /wp-(login|admin|content|includes)/i,
  /xmlrpc\.php/i,
  /\/cgi-bin\//i,
  /\.(sh|bash|exe|bat|cmd)$/i,
  /\/eval-stdin/i,
  /(\.\.\/|\.\.\\)/i, // Path traversal sequence
  /(union|select|insert|drop|alter)\s+(from|table|into)/i, // Basic SQLi probes in path
];

/**
 * Next.js 16 Request Proxy:
 * Safeguards incoming requests by rejecting exploit scans and malicious path probes.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const fullUrl = `${pathname}${search}`;

  // Check if request matches any malicious scan signatures
  for (const pattern of MALICIOUS_PATTERNS) {
    if (pattern.test(fullUrl)) {
      return new NextResponse(
        JSON.stringify({ error: "Forbidden: Malformed or restricted request" }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Robots-Tag": "noindex, nofollow",
          },
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png, apple-touch-icon.png
     * - images/ (public static assets)
     */
    "/((?!_next/static|_next/image|images|favicon.ico|icon.png|apple-touch-icon.png).*)",
  ],
};
