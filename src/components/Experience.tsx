import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
  website?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Sync Intern",
    role: "React JS Intern",
    duration: "July 2023 - August 2023",
    location: "India, Remote",
    description: [
      "Built interactive React.js apps, boosting user engagement by 15%.",
      "Optimized components, improving load times by 20% across devices.",
      "Implemented Redux, enhancing performance by 10% and reducing inconsistencies.",
    ],
    skills: [
      "React.js",
      "Redux",
      "JavaScript",
      "Next.js",
      "Node.js",
      "Express.js",
    ],
    website: "", // no official site listed
    logo: "", // you can add a logo if available
  },
  {
    company: "Freelance Web Developer",
    role: "Full Stack Developer",
    duration: "2024 - Present",
    location: "Remote",
    description: [
      "Built an insurance website using React.js and Google Apps Script, automating user data collection from forms to Google Sheets/Excel and reducing manual processing time by 30%.",
      "Developed a management app for a startup, streamlining internal operations and reducing task tracking time by 25%.",
      "Delivered both projects end-to-end including frontend, backend, and deployment, with 100% on-time delivery and positive client feedback.",
    ],
    skills: [
      "React.js",
      "Google Apps Script",
      "Node.js",
      "Express.js",
      "Vercel",
      "MongoDB",
    ],
    website: "", // you can add portfolio link here if you want
    logo: "", // you can add a generic freelance logo
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Building solutions across startups and growing companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company + " logo"}
                        className="w-12 h-12  object-contain  rounded-full border border-border shadow"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    {exp.website && (
                      <ExternalLink
                        className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer"
                        onClick={() => window.open(exp.website, "_blank")}
                      />
                    )}
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-2">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
                <div className="text-sm font-medium text-muted-foreground md:text-right">
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-6 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs bg-secondary/50 text-secondary-foreground border-0"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
