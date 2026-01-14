import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Zap, Shield, Rocket, ArrowRight, LayoutTemplate } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-10 px-4 py-24 text-center md:py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            NovaKit AI Launch 2026
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">
            Ship your <span className="text-primary">AI SaaS</span> in hours, not weeks.
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            The ultimate Next.js starter kit with Earthy design, AI integration, and zero bloat. Built for the modern developer.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/dashboard">
            <Button size="lg" className="h-12 px-8 text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://github.com/your-repo/novakit-ai" target="_blank">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              View on GitHub
            </Button>
          </Link>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Everything you need to ship</h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">

          {/* Feature 1: AI Ready (Large) */}
          <Card className="col-span-full md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-2xl">AI Integration Ready</CardTitle>
              <CardDescription className="text-base">
                Built-in Server Actions for Gemini, OpenAI, or Claude. Includes a ready-to-use chat interface.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-8">
              <div className="w-full max-w-sm rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-20 bg-muted rounded" />
                    <div className="h-16 w-full bg-muted/50 rounded" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted" />
                  <div className="h-8 flex-1 bg-muted/20 rounded" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2: Auth */}
          <Card className="col-span-full md:col-span-1 border-muted">
            <CardHeader>
              <Shield className="h-6 w-6 text-emerald-600 mb-2" />
              <CardTitle>Auth + Protection</CardTitle>
              <CardDescription>
                Clerk authentication pre-configured with middleware protection.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 3: Performance */}
          <Card className="col-span-full md:col-span-1 border-muted">
            <CardHeader>
              <Zap className="h-6 w-6 text-amber-500 mb-2" />
              <CardTitle>App Router</CardTitle>
              <CardDescription>
                Next.js 14+ App Router for blazing fast server components.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 4: Shadcn UI */}
          <Card className="col-span-full md:col-span-1 lg:col-span-2 border-muted bg-stone-50 dark:bg-stone-900">
            <CardHeader>
              <LayoutTemplate className="h-6 w-6 text-stone-600 dark:text-stone-400 mb-2" />
              <CardTitle>Premium UI Design</CardTitle>
              <CardDescription>
                An "Earthy/Organic" theme built on Tailwind CSS v4 and shadcn/ui.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-32 flex items-end gap-2 pb-0">
              <div className="h-24 w-20 bg-background rounded-t-lg border shadow-sm mx-auto" />
              <div className="h-32 w-20 bg-background rounded-t-lg border shadow-sm mx-auto" />
              <div className="h-20 w-20 bg-background rounded-t-lg border shadow-sm mx-auto" />
            </CardContent>
          </Card>

          {/* Feature 5: Launch Ready */}
          <Card className="col-span-full md:col-span-2 lg:col-span-2 bg-primary text-primary-foreground border-primary">
            <CardHeader>
              <Rocket className="h-8 w-8 mb-2" />
              <CardTitle className="text-xl">Launch in minutes</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                SEO optimized metadata, Open Graph ready, and clean code structure.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 NovaKit AI. Built for the future.</p>
      </footer>
    </div>
  );
}
