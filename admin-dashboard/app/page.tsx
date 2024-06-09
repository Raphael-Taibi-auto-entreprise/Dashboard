// Code: admin-dashboard/app/page.tsx
import { Anek_Telugu } from "next/font/google";
import cn from "classnames";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const anekTelugu = Anek_Telugu({
  subsets: ["latin"],
  weight: ["600"]
});

export default function home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary to-background">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-foreground drop-shadow-md", anekTelugu.className,)}>
          🔐 Auth
        </h1>
        <p className="text-foreground text-lg">A simple authentification service</p>
        <div>
          <LoginButton>
            <Button size="lg" className="bg-accent rounded-[8px] text-foreground focus:bg-primary/15 focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:text-secondary-foreground ">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
