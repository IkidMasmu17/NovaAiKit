import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import {
    LayoutDashboard,
    BarChart3,
    Sparkles,
    Settings,
    Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40 md:flex-row">
            {/* Sidebar */}
            <aside className="hidden w-64 flex-col border-r bg-background md:flex">
                <div className="flex h-16 items-center gap-2 border-b px-6 font-semibold">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span>NovaKit AI</span>
                </div>
                <nav className="flex flex-1 flex-col gap-2 p-4">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 text-foreground transition-all hover:text-primary"
                    >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        href="/dashboard/analytics"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                    >
                        <BarChart3 className="h-4 w-4" />
                        Analytics
                    </Link>
                    <Link
                        href="/dashboard/ai-chat"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                    >
                        <Sparkles className="h-4 w-4" />
                        AI Assistant
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                    >
                        <Settings className="h-4 w-4" />
                        Settings
                    </Link>
                </nav>
                <div className="border-t p-4">
                    <div className="rounded-lg border bg-card p-4 shadow-sm">
                        <h3 className="mb-2 font-semibold">Upgrade to Pro</h3>
                        <p className="mb-4 text-xs text-muted-foreground">
                            Unlock advanced AI features and analytics.
                        </p>
                        <Button size="sm" className="w-full">
                            Upgrade
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Mobile & Main Content */}
            <div className="flex flex-1 flex-col">
                <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                    <div className="w-full flex-1">
                        <h1 className="text-lg font-semibold md:text-xl">Overview</h1>
                    </div>
                    <UserButton />
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
