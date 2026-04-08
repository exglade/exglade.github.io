import { Badge } from "./ui/badge";

type Skill = {
  label: string;
  href?: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Engineering",
    skills: [
      { label: "TypeScript", href: "https://www.typescriptlang.org/" },
      { label: "Node.js", href: "https://nodejs.org/" },
      { label: "React", href: "https://react.dev/" },
      { label: "C#/.NET", href: "https://dotnet.microsoft.com/" },
      { label: "Python", href: "https://www.python.org/" },
      { label: "PostgreSQL", href: "https://www.postgresql.org/" },
      { label: "SQL Server", href: "https://www.microsoft.com/sql-server" },
      { label: "MongoDB", href: "https://www.mongodb.com/" },
    ],
  },
  {
    title: "Platform & Infrastructure",
    skills: [
      { label: "Azure", href: "https://azure.microsoft.com/" },
      { label: "GCP", href: "https://cloud.google.com/" },
      { label: "Terraform", href: "https://developer.hashicorp.com/terraform" },
      { label: "Kubernetes", href: "https://kubernetes.io/" },
      { label: "Docker", href: "https://www.docker.com/" },
      { label: "CI/CD" },
      { label: "Grafana", href: "https://grafana.com/" },
      { label: "Prometheus", href: "https://prometheus.io/" },
      { label: "NGINX", href: "https://nginx.org/" },
      { label: "Cloudflare", href: "https://www.cloudflare.com/" },
    ],
  },
  {
    title: "Product & Engineering Leadership",
    skills: [
      { label: "Technical Strategy" },
      { label: "Product Shaping" },
      { label: "System Ownership" },
      { label: "Team Scaling" },
      { label: "Execution" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="grid gap-5">
      {skillGroups.map((group) => (
        <section key={group.title} aria-labelledby={`skills-group-${group.title}`}>
          <h3
            id={`skills-group-${group.title}`}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {group.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.skills.map((skill) =>
              skill.href ? (
                <Badge key={skill.label} asChild>
                  <a
                    href={skill.href}
                    target="_blank"
                    rel="noreferrer"
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
      ))}
    </div>
  );
}
