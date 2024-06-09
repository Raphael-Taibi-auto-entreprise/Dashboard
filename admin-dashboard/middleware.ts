import authConfig from "@/lib/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("ROUTE: ", req.nextUrl.pathname)
    console.log("IS LOGGED IN: ", isLoggedIn)
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}