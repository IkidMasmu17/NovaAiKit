import Link from "next/link";
import {
    LayoutDashboard,
    BarChart2,
    Sparkles,
    Settings,
    LogOut,
    Cpu
} from "lucide-react";
// import { signOut } from "@/auth"; // We would use text-auth signout here in a real server component or client button

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen w-full bg-[#000c18] text-slate-200 font-mono">
            {/* Sidebar */}
            <aside className="hidden w-64 flex-col border-r border-white/10 bg-[#022644]/50 backdrop-blur-xl md:flex">
                <div className="flex h-16 items-center gap-2 border-b border-white/10 px-6">
                    <Cpu className="h-6 w-6 text-cyan-400 animate-pulse" />
                    <span className="font-bold tracking-widest text-white">N-KIT v2</span>
                </div>
                <nav className="flex flex-1 flex-col gap-2 p-4">
                    <NavLink href="/dashboard" icon={<LayoutDashboard />} label="Command Center" />
                    <NavLink href="/dashboard/analytics" icon={<BarChart2 />} label="Data Stream" />
                    <NavLink href="/dashboard/ai-chat" icon={<Sparkles />} label="Neural AI" />
                    <NavLink href="/dashboard/settings" icon={<Settings />} label="Config" />
                </nav>
                <div className="border-t border-white/10 p-4">
                    <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-red-400 hover:bg-white/5 transition-colors">
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm">Disconnect</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 items-center border-b border-white/10 bg-[#022644]/30 px-6 backdrop-blur-sm">
                    <div className="ml-auto flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-slate-400 tracking-widest">NET_UPLINK: ACTIVE</span>
                        <div className="h-8 w-8 rounded bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs">U1</div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto bg-grid-scientific p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}

function NavLink({ href, icon, label }: { href: string, icon: any, label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all border border-transparent hover:border-cyan-500/20"
        >
            {React.cloneElement(icon, { className: "h-4 w-4" })}
            <span className="text-sm tracking-wide">{label}</span>
        </Link>
    )
}

import React from "react";
