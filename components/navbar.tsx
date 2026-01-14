"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Features", href: "#features" },
    { name: "Components", href: "#components" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "/docs" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            {/* Floating Glass Container */}
            <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-border/50 bg-background/60 px-4 py-2 shadow-lg backdrop-blur-md transition-all">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 pl-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <Sparkles className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">NovaKit</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                pathname === item.href && "bg-muted text-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Utilities */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Command className="h-4 w-4" />
                    </Button>
                    <Link href="/sign-in">
                        <Button size="sm" className="rounded-full px-5 h-9 bg-foreground text-background hover:bg-foreground/90">
                            Sign In
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
                        <Menu className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
