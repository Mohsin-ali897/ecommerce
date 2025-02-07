import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   try {
//     const url = req.nextUrl;
//     console.log("Middleware running for:", url.pathname);
    
//     // Example: Redirect unauthenticated users
//     const token = req.cookies.get("auth_token")?.value;
//     if (!token && url.pathname.startsWith("/dashboard")) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }

//     return NextResponse.next();
//   } catch (error) {
//     console.error("Middleware error:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }

// export const config = {
//   matcher: ["/dashboard/:path*"], // Ensure this matches valid routes
// };
