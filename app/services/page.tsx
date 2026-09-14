import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
export const metadata={title:"Services"};
export default function Services(){return <PageShell><section className="mx-auto max-w-7xl px-4 py-20 sm:px-6"><SectionHeading eyebrow="Project Area" title="Our Services" subtitle="Academic project, thesis, assignment, PPT and research support."/><div className="mt-12"><ServiceGrid/></div></section></PageShell>}
