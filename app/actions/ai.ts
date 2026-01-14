'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_API_KEY;

export async function generateContent(prompt: string) {
    if (!apiKey) {
        return { error: 'Missing API Key' };
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return { text };
    } catch (error) {
        console.error("AI Generation Error:", error);
        return { error: 'Failed to generate content' };
    }
}
