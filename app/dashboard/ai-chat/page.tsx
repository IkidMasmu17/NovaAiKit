'use client';

import { useState } from 'react';
import { generateContent } from '@/app/actions/ai';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Sparkles, Bot, User, Terminal } from "lucide-react";

export default function AIChatPage() {
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: 'Neural Link Established. Waiting for input...' }
    ]);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!prompt.trim() || loading) return;

        const userMessage = prompt;
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setPrompt('');
        setLoading(true);

        const result = await generateContent(userMessage);

        if (result.error) {
            setMessages(prev => [...prev, { role: 'assistant', content: `ERROR: ${result.error}` }]);
        } else if (result.text) {
            setMessages(prev => [...prev, { role: 'assistant', content: result.text }]);
        }
        setLoading(false);
    };

    return (
        <div className="flex h-[calc(100vh-8rem)] flex-col gap-4">
            <Card className="flex-1 flex flex-col overflow-hidden glass-panel border-white/5 bg-[#022644]/40">
                <CardHeader className="border-b border-white/5 bg-[#0a1f35]/50 px-6 py-4 flex flex-row items-center gap-2">
                    <Terminal className="h-5 w-5 text-cyan-400" />
                    <CardTitle className="text-sm font-mono text-cyan-400 tracking-widest uppercase">GEMINI_TERMINAL_V2</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''
                                }`}
                        >
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded border ${msg.role === 'user' ? 'bg-cyan-900/50 border-cyan-500/30 text-cyan-400' : 'bg-slate-800/50 border-white/10 text-slate-400'}`}>
                                {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </div>
                            <div
                                className={`rounded px-4 py-2 max-w-[80%] font-mono text-sm ${msg.role === 'user'
                                    ? 'bg-cyan-900/30 border border-cyan-500/20 text-cyan-100'
                                    : 'bg-slate-900/50 border border-white/5 text-slate-300'
                                    }`}
                            >
                                <p className="whitespace-pre-wrap">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-slate-800/50">
                                <Bot className="h-4 w-4 text-slate-400" />
                            </div>
                            <div className="text-cyan-400 text-xs font-mono animate-pulse self-center">
                                &gt; PROCESSING_NEURAL_REQUEST...
                            </div>
                        </div>
                    )}
                </CardContent>
                <div className="p-4 border-t border-white/5 bg-[#0a1f35]/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend();
                        }}
                        className="flex gap-4"
                    >
                        <Input
                            placeholder="Enter command directive..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={loading}
                            className="flex-1 bg-[#022644] border-white/10 text-cyan-100 placeholder:text-slate-600 font-mono focus-visible:ring-cyan-500/50"
                        />
                        <Button type="submit" disabled={loading || !prompt.trim()} className="bg-cyan-600 hover:bg-cyan-500 text-white">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
