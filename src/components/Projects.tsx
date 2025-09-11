import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  DemoVideo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Pixora – AI-Powered Visual Creator",
    description:
      "An AI-powered web app that generates high-quality visuals in 5+ artistic styles. Integrated dual AI engines (OpenAI & Gemini) for diverse outputs, serving 100+ generations during testing with export-ready, high-resolution results.",
    image: ".../../../../public/pixora.png", // placeholder, replace with actual image if available
    githubUrl: "https://github.com/mahesh-barapatre/Pixora",
    liveUrl: "https://pixora-tau.vercel.app/",
    featured: true,
  },
  {
    title: "Interview-Saathi.AI",
    description:
      "AI-powered mock interview app that conducted 50+ practice interviews across different roles and technologies. Integrated Gemini API, facial expression analysis, and PostgreSQL to provide real-time, personalized feedback and improve preparation by 50%.",
    image: ".../../../../public/interview.png", // placeholder
    githubUrl: "https://github.com/mahesh-barapatre/Interview-Saathi",
    liveUrl: "https://interview-saathi-nine.vercel.app/",
    featured: true,
  },
  {
    title: "Sarthi",
    description:
      "A peer-to-peer discussion platform with video conferencing, collaborative whiteboard, and chat. Powered by WebRTC and Socket.io for <100 ms latency. Supported 500+ interactive sessions monthly, improving collaboration by 40%.",
    image: ".../../../../public/sarthi.png", // placeholder
    githubUrl: "https://github.com/mahesh-barapatre/Sarthi2.0",
    liveUrl: "https://sarthi2-0.vercel.app/",
    featured: false,
  },
  {
    title: "Lumina – AI Discord Assistant",
    description:
      "An AI-powered Discord assistant with 5+ features, used in active servers. Integrated Gemini API for ~90% command accuracy, automated tasks with Google APIs (Calendar, Spotify, Places), and handled 20+ weekly tasks.",
    image: ".../../../../public/lumina.png", // placeholder
    githubUrl: "https://github.com/mahesh-barapatre/Lumina-AI",
    liveUrl:
      "https://www.linkedin.com/posts/mahesh-barapatre-a93731225_ai-discord-nodejs-activity-7368269679133462530-d6sJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiG488BnHMvIAgduW83EaaK-XET1gCvPVM", // no live demo link found in resume
    featured: false,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-2 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.05] animate-slide-up ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 "
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 "
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="flex-[2] border-slate-700"
                    >
                      {project.liveUrl ? (
                        <div className="flex">
                          <ExternalLink className="w-4 h-4" />
                          LIVE
                        </div>
                      ) : (
                        <div>Integrate Locally</div>
                      )}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-[1] border-slate-800"
                    >
                      {project.liveUrl ? (
                        <div className="flex">
                          <Github className="w-4 h-4" />
                          Code
                        </div>
                      ) : (
                        <div>Integrate Locally</div>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {projects.length > 4 && (
          <div className="flex justify-center mt-10">
            {!showAll ? (
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(true)}
                className="px-8 py-3 border-slate-700"
              >
                Show More
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(false)}
                className="px-8 py-3 border-slate-700"
              >
                Show Less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
