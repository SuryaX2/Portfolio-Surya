import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Surya - Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} scroll-smooth dark`}
    >
      <head>
        {/* Prevent flash of light theme by setting dark mode immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    // Default to dark mode
                    document.documentElement.classList.add('dark');
                    if (!theme) {
                      localStorage.setItem('theme', 'dark');
                    }
                  }
                } catch (e) {
                  // If localStorage is not available, default to dark
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-outfit antialiased leading-8 dark:bg-[var(--darkTheme)] dark:text-white">
        {children}
      </body>
    </html>
  );
}
