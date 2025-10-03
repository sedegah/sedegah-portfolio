import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "senior backend engineer",
    company: "tech startup",
    period: "2022 - present",
    description: "architecting scalable backend systems and leading technical initiatives",
  },
  {
    title: "software engineer",
    company: "fintech company",
    period: "2020 - 2022",
    description: "built payment processing infrastructure and api services",
  },
  {
    title: "junior developer",
    company: "web agency",
    period: "2019 - 2020",
    description: "developed full-stack applications for various clients",
  },
];

export const ExperiencesSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium lowercase border-b border-border pb-2">experiences</h2>
      <div className="grid gap-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 bg-card border-border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <h3 className="text-lg font-medium lowercase">{exp.title}</h3>
              <span className="text-sm text-muted-foreground lowercase">{exp.period}</span>
            </div>
            <p className="text-accent lowercase font-medium mb-2">{exp.company}</p>
            <p className="text-muted-foreground text-sm lowercase">{exp.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
