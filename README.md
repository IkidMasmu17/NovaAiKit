# NovaKit AI Launch 🚀

A modern, "batteries-included" Next.js starter kit for 2026. Ship your SaaS or AI app in hours.

## Features

- **Next.js 15+ App Router**: Cutting-edge framework features.
- **Tailwind CSS v4**: "Earthy/Organic" theme configuration.
- **shadcn/ui**: Accessible, premium components.
- **Authentication**: Pre-configured with Clerk (Middleware + Protected Routes).
- **AI Integration**: Server Actions ready for Google Gemini (or OpenAI).
- **Dashboard**: Responsive Sidebar layout + Stats page.
- **Bento Grid Landing**: Modern marketing page template.

## Getting Started

1.  **Clone & Install**
    ```bash
    npm install
    ```

2.  **Environment Setup**
    Create a `.env.local` file in the root:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    
    # User Sign In/Up URLs
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    
    # AI API Key (Get from aistudio.google.com)
    GOOGLE_API_KEY=your_gemini_api_key
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000`.

## Project Structure

- `/app`: App Router pages and layouts.
  - `/(auth)`: Sign-in/up pages.
  - `/dashboard`: Protected application area.
  - `/actions`: Server Actions (AI logic).
- `/components`: UI components (`/ui` for shadcn).
- `/lib`: Utility functions.

## Customization

- **Theme**: Edit CSS variables in `app/globals.css`.
- **UI Components**: Add more via shadcn CLI (copy to `components/ui`).

## License

MIT
