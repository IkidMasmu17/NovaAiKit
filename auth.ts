import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                // Mock authentication for boilerplate
                if (credentials.email === "demo@novakit.ai" && credentials.password === "password") {
                    return {
                        id: "1",
                        name: "Nova User",
                        email: "demo@novakit.ai",
                    }
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin", // Custom sign in page
    }
})
