import { email, office, phonePrimary } from "@/lib/site";
export function Footer(){return <footer className="bg-brand-navy px-4 py-10 text-center text-sm font-semibold text-white"><p className="text-lg font-black">Project Area</p><p className="mt-2">{office} · {phonePrimary} · {email}</p><p className="mt-5 text-blue-100">© 2026 Project Area | All Rights Reserved</p></footer>}
