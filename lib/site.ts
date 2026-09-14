export const phonePrimary = "9559628719";
export const phoneSecondary = "8881470477";
export const whatsappNumber = "919559628719";
export const email = "govindsharmabr45@gmail.com";
export const office = "Lanka, Near BHU Gate, Varanasi";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/online-form", label: "Online Form" },
  { href: "/contact", label: "Contact" },
] as const;

export const academicServices = [
  ["MBA Projects & Reports", "Final year MBA projects, synopsis, PPT and viva support."],
  ["B.Tech / B.E Projects", "Engineering projects with documentation and explanation."],
  ["Diploma / Polytechnic", "Technical diploma projects with practical guidance."],
  ["M.Sc / B.Sc Projects", "Science-based academic projects and reports."],
  ["BCA / MCA Projects", "Computer projects with coding, reports and presentation help."],
  ["Assignments", "Plagiarism-free assignments for all subjects."],
  ["PPT & Presentations", "Professional PowerPoint slides for project presentation."],
  ["Synopsis & Proposal", "University-format synopsis and project proposals."],
  ["Research Papers", "Journal, review and research paper assistance."],
  ["Thesis & Dissertation", "Complete dissertation writing and final submission support."],
  ["Plagiarism-Free Content", "Original content with checking and report support."],
  ["Viva & Project Guidance", "Complete guidance from topic selection to final viva."]
].map(([title, description], i) => ({ title, description, metric: `${(i + 1) * 25}+ students helped` }));

export const printingServices = [
  { title: "Printing Services", description: ["Black & white / color printing", "Project printing", "Spiral binding", "Report formatting"], cta: "Order on WhatsApp", href: `https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20Printing%20Service%20details` },
  { title: "Thesis Printing", description: ["Hard binding thesis", "Gold printing", "University format setting", "Same day service"], cta: "Get Thesis Printed", href: `https://wa.me/${whatsappNumber}?text=Hello,%20I%20need%20Thesis%20Printing%20Service` }
];
