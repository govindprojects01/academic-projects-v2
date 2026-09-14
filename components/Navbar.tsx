import Link from "next/link";
import { navItems } from "@/lib/site";

export function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6"><Link href="/" className="text-2xl font-black text-brand-navy">Project <span className="text-brand-blue">Area</span></Link><nav className="flex flex-wrap gap-2 text-sm font-bold">{navItems.map(item => <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 hover:bg-blue-50 hover:text-brand-blue">{item.label}</Link>)}</nav></div></header>;
}
