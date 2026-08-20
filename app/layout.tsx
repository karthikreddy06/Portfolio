import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karthik Reddy — AI & Backend Engineer",
  description: "Portfolio of Mukkamalla Karthik Reddy, an AI & Data Science Engineer and backend developer.",
  keywords: ["AI Engineer", "Backend Developer", "Machine Learning", "Karthik Reddy"],
  openGraph: { title: "Karthik Reddy — AI & Backend Engineer", description: "Building dependable systems for intelligent products.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
