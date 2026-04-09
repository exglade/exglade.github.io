import { Badge } from "./ui/badge";

type Skill = {
  label: string;
  href?: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <div className="grid gap-10 p-4">
      {skillGroups.map((group, index) => {
        const headingId = `skills-group-${slugify(group.title) || index}`;

        return (
          <section key={group.title} aria-labelledby={headingId} className="flex flex-col gap-2">
            <h3
              id={headingId}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600"
            >
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) =>
                skill.href ? (
                  <Badge key={skill.label} asChild>
                    <a
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${skill.label} official website`}
                      className="no-underline hover:no-underline"
                    >
                      {skill.label}
                    </a>
                  </Badge>
                ) : (
                  <Badge key={skill.label}>{skill.label}</Badge>
                ),
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
