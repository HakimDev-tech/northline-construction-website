import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Northline Construction — Built with intent.", description: "Thoughtful residential construction and considered renovations across the North Shore.", openGraph: { title: "Northline Construction", description: "Built with intent. Made to last.", type: "website" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }