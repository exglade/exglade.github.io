import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const experiences = [
  {
    company: "HealthMetrics",
    title: "Director of Engineering",
    years: "2019 - 2025",
    description:
      "HealthMetrics is a digital healthcare TPA platform that helps corporates and insurers manage employee healthcare benefits, claims, and provider networks with real-time data and automation.",
    impact: [
      "Led engineering across product and platform, working closely with product leadership on roadmap and solution design.",
      "Built and evolved the HealthMetrics system end-to-end, including platform infrastructure, developer tooling, and engineering workflows.",
      "Scaled engineering to 20+ engineers, establishing clearer ownership, team structure, and delivery processes.",
      "Drove continuous improvements across the system over time, resulting in 2–3× performance gains, ~54% cost reduction, and sustained 99.97% uptime.",
      "Led engineering scope for ISO 27001, with zero non-conformities.",
    ],
  },
  {
    company: "InfinitiLab",
    title: "Software Engineer → Lead Engineer",
    years: "2015 - 2019",
    description:
      "InfinitiLab was a customised software solutions company delivering bespoke systems for clients across various industries.",
    impact: [
      "Delivered fullstack systems across multiple client projects, working end-to-end from development to deployment.",
      "Worked directly with clients to translate business requirements into practical software solutions.",
      "Progressed into early leadership responsibilities, supporting team direction and delivery.",
    ],
  },
];

export default function ExperienceAccordion() {
  return (
    <Accordion type="single" collapsible>
      {experiences.map((experience) => (
        <AccordionItem key={experience.company} value={experience.company} className="border-muted">
          <AccordionTrigger className="border-0 bg-transparent p-4">
            <span className="flex flex-1 flex-col gap-0">
              <span className="text-base font-semibold text-foreground">{experience.company}</span>
              <span className="text-sm text-neutral-600">{experience.title}</span>
            </span>
            <span className="mr-10 text-right text-sm font-normal text-neutral-600">
              {experience.years}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 max-w-2xl text-sm">
            <div className="flex flex-col">
              <p className="text-neutral-600">{experience.description}</p>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-neutral-600">
                {experience.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
