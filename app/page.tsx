import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Layout, Zap, Bot, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />

      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.2]" />

      {/* Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 z-0" />

      <main className="relative z-10 pt-32 pb-20">

        {/* HERO SECTION */}
        <section className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1 text-sm text-primary backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                v1.0 Public Beta is Live
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Ship your next <br />
                <span className="text-primary transparent-text-outline">SaaS </span>
                faster.
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The ultimate Next.js 15 starter kit. Earthy aesthetics, AI integration, and robust authentication—pre-configured for 2026.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <div className="flex items-center -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">U{i}</div>
                  ))}
                  <div className="pl-3 text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">2k+</span> Makers
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none perspective-1000">
              {/* Abstract decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-60" />

              {/* Main Card */}
              <div className="relative rounded-2xl border border-border/50 bg-background/40 backdrop-blur-xl shadow-2xl p-2 transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500">
                <div className="rounded-xl border border-border/50 bg-card/80 overflow-hidden shadow-sm">
                  {/* Mock Browser Header */}
                  <div className="h-8 border-b bg-muted/30 flex items-center px-4 gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  {/* Mock Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-32 bg-foreground/10 rounded-lg animate-pulse" />
                      <div className="h-8 w-8 bg-primary/20 rounded-full" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-24 rounded-lg bg-muted/50 border border-border/50 p-3 space-y-2">
                          <div className="h-6 w-6 rounded-md bg-background shadow-sm" />
                          <div className="h-2 w-16 bg-muted-foreground/20 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="h-40 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-border/30 relative flex items-center justify-center">
                      <Bot className="h-12 w-12 text-primary/40" />
                      <div className="absolute bottom-4 left-4 right-4 h-2 bg-background/50 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-primary/60 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="container mx-auto px-4 pt-32" id="features">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
            <p className="text-muted-foreground">Every component is crafted with attention to detail and designed to be easily customized.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Zap className="w-5 h-5 text-amber-500" />}
              title="Fast Setup"
              desc="Next.js 15 + Tailwind v4 pre-configured."
            />
            <FeatureCard
              icon={<Layout className="w-5 h-5 text-blue-500" />}
              title="Modern UI"
              desc="Aniq-inspired layout with Earthy themes."
            />
            <FeatureCard
              icon={<Bot className="w-5 h-5 text-emerald-500" />}
              title="AI Ready"
              desc="Gemini integration baked in via Server Actions."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-5 h-5 text-rose-500" />}
              title="Auth"
              desc="Clerk authentication with middleware protection."
              span={true}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, desc, span = false }: { icon: React.ReactNode, title: string, desc: string, span?: boolean }) {
  return (
    <div className={`group relative rounded-2xl border border-border/50 bg-background/30 p-6 hover:bg-background/80 transition-colors ${span ? 'lg:col-span-1' : ''}`}>
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
