import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const experiences = [
  {
    company: "HealthMetrics",
    title: "Director of Engineering",
    years: "2019 — 2025",
    description:
      "HealthMetrics is a B2B healthcare benefits platform supporting claims, panel clinic workflows, and employer healthcare operations.",
    impact: [
      "Led engineering across product and platform, partnering with product leadership on roadmap, prioritisation, and solution design.",
      "Built and evolved the HealthMetrics system end-to-end, including platform infrastructure, developer tooling, and engineering workflows.",
      "Scaled engineering to 20+ engineers, establishing clearer ownership, team structure, and delivery processes.",
      "Drove continuous improvements across the system over time, resulting in 2–3× performance gains, ~30% infrastructure cost reduction, and sustained 99.99% uptime.",
      "Led engineering scope for ISO 27001, achieving zero non-conformities.",
    ],
  },
  {
    company: "InfinitiLab",
    title: "Software Engineer → Lead Engineer",
    years: "2015 — 2019",
    description:
      "InfinitiLab was a product and software development company where I worked across backend systems, delivery, and early engineering leadership.",
    impact: [
      "Worked across backend systems and product development, growing into a leadership role over time.",
      "Contributed to building and maintaining core systems while supporting product delivery and early team structure.",
    ],
  },
];

export default function ExperienceAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full !bg-transparent">
      {experiences.map((experience) => (
        <AccordionItem
          key={experience.company}
          value={experience.company}
          className="bg-transparent last:border-b-0"
        >
          <AccordionTrigger className="items-start rounded-none border-0 bg-transparent py-5 hover:text-[var(--color-text)] hover:no-underline focus-visible:border-0 focus-visible:ring-0">
            <span className="grid flex-1 gap-1 pr-4 text-left">
              <span className="text-base font-semibold leading-6 text-[var(--color-text)]">
                {experience.company}
              </span>
              <span className="text-sm font-normal leading-5 text-[var(--color-muted)]">
                {experience.title}
              </span>
            </span>
            <span className="shrink-0 pt-0.5 text-right text-sm font-normal leading-5 text-[var(--color-muted)]">
              {experience.years}
            </span>
          </AccordionTrigger>
          <AccordionContent className="h-auto space-y-4 !bg-transparent pb-5 pr-0">
            <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
              {experience.description}
            </p>
            <ul className="max-w-2xl list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-muted)]">
              {experience.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hidden flex-wrap gap-2">
              {/*
                Optional applied skills go here later, for example:
                <Badge>TypeScript</Badge>
              */}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
