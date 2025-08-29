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
  title: "Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} scroll-smooth`}
    >
      <body className="font-outfit antialiased leading-8 dark:bg-[var(--darkTheme)] dark:text-white ">
        {children}
      </body>
    </html>
  );
}
