import { auth } from "@/lib/auth"
 
export default auth((req) => {
  console.log("ROUTE: ", req.nextUrl.pathname)
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}