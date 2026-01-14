'use client';

import { useState } from 'react';
import { generateContent } from '@/app/actions/ai';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, Sparkles, Bot, User } from "lucide-react";

export default function AIChatPage() {
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: 'Hello! I am your AI assistant. How can I help you today?' }
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
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please try again or check your API key." }]);
        } else if (result.text) {
            setMessages(prev => [...prev, { role: 'assistant', content: result.text }]);
        }
        setLoading(false);
    };

    return (
        <div className="flex h-[calc(100vh-8rem)] flex-col gap-4">
            <Card className="flex-1 flex flex-col overflow-hidden">
                <CardHeader className="border-b bg-muted/20">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <CardTitle>AI Assistant</CardTitle>
                    </div>
                    <CardDescription>Powered by Gemini Pro</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''
                                }`}
                        >
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </div>
                            <div
                                className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.role === 'user'
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted/50 border'
                                    }`}
                            >
                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted">
                                <Bot className="h-4 w-4" />
                            </div>
                            <div className="bg-muted/50 border rounded-lg px-4 py-2">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-75" />
                                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-150" />
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
                <div className="p-4 border-t bg-background">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend();
                        }}
                        className="flex gap-4"
                    >
                        <Input
                            placeholder="Ask anything..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={loading}
                            className="flex-1"
                        />
                        <Button type="submit" disabled={loading || !prompt.trim()}>
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send</span>
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
