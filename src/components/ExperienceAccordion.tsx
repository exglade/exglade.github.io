import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

type Experience = {
  company: string;
  title: string;
  years: string;
  description: string;
  impact: string[];
};

type ExperienceAccordionProps = {
  experiences: Experience[];
};

export default function ExperienceAccordion({ experiences }: ExperienceAccordionProps) {
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
