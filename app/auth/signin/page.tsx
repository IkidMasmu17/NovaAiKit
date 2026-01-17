"use client"

import { useState } from "react"
import { signIn } from "next-auth/react" // Client side signIn
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Sparkles, ArrowRight } from "lucide-react"

export default function SignInPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        // Using NextAuth credential sign in
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if (res?.error) {
            setError("Invalid credentials. Try demo@novakit.ai / password")
        } else {
            router.push("/dashboard")
        }
    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-grid-scientific relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <Card className="glass-panel w-full max-w-md border-border/50 bg-secondary/30 relative z-10">
                <CardHeader className="text-center space-y-2">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/30 text-accent ring-1 ring-accent/50">
                        <Sparkles className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight text-foreground text-glow">
                        Access Terminal
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Enter your credentials to access NovaKit
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-accent uppercase tracking-wider">Email Protocol</label>
                            <Input
                                type="email"
                                placeholder="demo@novakit.ai"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-background/50 border-border/50 text-foreground focus-visible:ring-accent"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-accent uppercase tracking-wider">Passcode</label>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-background/50 border-border/50 text-foreground focus-visible:ring-accent"
                            />
                        </div>
                        {error && (
                            <p className="text-sm text-red-400 bg-red-400/10 p-2 rounded border border-red-400/20">{error}</p>
                        )}
                        <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-mono uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(8,145,178,0.5)]">
                            Initialize Session <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="justify-center">
                    <p className="text-xs text-muted-foreground">Demo Access: demo@novakit.ai // password</p>
                </CardFooter>
            </Card>
        </div>
    )
}
