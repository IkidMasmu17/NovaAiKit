import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Sparkles, ArrowRight, Wallet, ShieldCheck, Zap, Globe, MessageSquare, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 font-mono">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-scientific" />

      {/* Navbar (Simple for now) */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-accent">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold tracking-widest">NOVAKIT.AI</span>
          </div>
          <div className="flex gap-4">
            <Link href="/auth/signin">
              <Button variant="outline" className="border-accent/20 text-accent hover:bg-accent/10">LOGIN TERMINAL</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">

        {/* HERO */}
        <section className="container mx-auto px-4 text-center space-y-8 py-20">
          <div className="inline-block px-4 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm tracking-[0.2em] mb-4">
            SYSTEM STATUS: ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-500 text-glow">
            QUANTUM LEAP <br /> YOUR SAAS LAUNCH
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Deploy production-ready applications at light speed. Integrated with Neural AI Engines and localized payment protocols.
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-8 bg-accent text-background hover:bg-cyan-400 font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                Launch Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 mx-auto max-w-5xl aspect-video rounded-xl border border-accent/20 bg-secondary/50 backdrop-blur-sm relative overflow-hidden shadow-[0_0_50px_rgba(2,38,68,0.8)]">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="grid grid-cols-3 h-full gap-1 p-1 opacity-50">
              <div className="border-r border-accent/10" />
              <div className="border-r border-accent/10" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/20 font-bold text-9xl select-none">
              UI_PREVIEW
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="container mx-auto px-4 py-32 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-yellow-400" />}
            title="Hyper Performance"
            desc="Next.js 15 App Router delivering sub-millisecond latency."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6 text-cyan-400" />}
            title="Global & Local"
            desc="Optimized for international scale with localized Indonesian payment UI."
          />
          <FeatureCard
            icon={<Bot className="h-6 w-6 text-emerald-400" />}
            title="Gemini Core"
            desc="Google's advanced Generative AI integrated directly into the neural fabric."
          />
        </section>

        {/* PRICING */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground tracking-widest">ACCESS LICENSES</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['Starter', 'Pro', 'Enterprise'].map((plan, i) => (
              <Card key={plan} className={`glass-panel border-white/5 ${i === 1 ? 'border-accent shadow-[0_0_30px_rgba(6,182,212,0.2)]' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase text-accent">{plan}</CardTitle>
                  <CardDescription className="text-slate-400">For {plan.toLowerCase()} pioneers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-4xl font-bold text-white">
                    <span className="text-lg text-slate-500 mr-1">Rp</span>
                    {i === 0 ? '590.000' : i === 1 ? '1.200.000' : 'Custom'}
                  </div>
                  <ul className="space-y-2 text-sm text-left text-slate-300">
                    <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Source Code Access</li>
                    <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> AI Integration</li>
                    {i > 0 && <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Lifetime Updates</li>}
                  </ul>

                  {/* Payment Methods */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Secure Payment via</p>
                    <div className="flex justify-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all">
                      {/* Placeholders for Indo E-wallets */}
                      <div className="h-8 w-12 bg-blue-600/20 rounded flex items-center justify-center text-[10px] text-blue-400 border border-blue-500/30">DANA</div>
                      <div className="h-8 w-12 bg-green-600/20 rounded flex items-center justify-center text-[10px] text-green-400 border border-green-500/30">GOPAY</div>
                      <div className="h-8 w-12 bg-purple-600/20 rounded flex items-center justify-center text-[10px] text-purple-400 border border-purple-500/30">OVO</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 uppercase">Select License</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-20 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center tracking-widest text-accent">KNOWLEDGE BASE</h2>
          <div className="space-y-4">
            {[
              "What is NovaKit AI Launch?",
              "Can I use Indonesian payment gateways?",
              "How does the AI integration work?",
              "Is the license lifetime?"
            ].map((q, i) => (
              <div key={i} className="border border-white/10 bg-white/5 rounded-lg p-4 cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                  {q}
                  <MessageSquare className="h-4 w-4 text-accent opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-accent/50 transition-colors group">
      <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-100">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
