import { Anek_Telugu } from "next/font/google";
import { cn } from "@/lib/utils";

const anekTelugu = Anek_Telugu({
    subsets:['latin'],
    weight:["600"],
});


interface HeaderProps {
    label: string;
};

export const Header = ({
     label,
     }: HeaderProps) => {

        return (
            <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                <h1 className={cn("text-3xl font-semibold", anekTelugu.className,)}>
                🔐 Auth 
                </h1>
                <p className="text-muted-foreground text-sm">
                    {label}
                </p>
            </div>
        );
     };

