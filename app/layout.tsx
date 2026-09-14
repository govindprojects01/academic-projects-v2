import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:{default:"Project Area | Academic Project Assistance",template:"%s | Project Area"},description:"Academic project help, thesis writing, printing, binding and online form services in Varanasi.",robots:"index, follow"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
