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
    title: "Taskra - Discord AI Assistant",
    description:
      "A smart Discord AI assistant that helps with everyday tasks — from setting reminders, creating Google Meet links to finding who's calling, suggesting music and many more tasks.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757358258/Let_s_Connect_klra4v.png",

    githubUrl:
      "https://discord.com/oauth2/authorize?client_id=1396860878644707519&permissions=2147567616&integration_type=0&scope=bot+applications.commands",
    DemoVideo:
      "https://www.loom.com/share/e0fda0dbaad246f68cad1d6d1fe6c494?sid=017e98fc-fd72-4781-a3be-ba143425fd76",
    featured: false,
  },
  {
    title: "SmartSummary - Chrome Extension",
    description:
      "A Chrome extension powered by LLMs that quickly summarizes long articles into concise brief summaries, detailed versions, or bullet points for easy reading.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757358325/icon_vjqyxj.png",
    DemoVideo:
      "https://www.loom.com/share/6daf5310fc944dd5a5c3e8c902fe1ec6?sid=7025386a-2935-4d9e-8b17-1eceacb9c23c",
    githubUrl: "https://github.com/AdarshSingh9540/AI_Summarizer_Extension",
    featured: false,
  },
  {
    title: "GitChat",
    description:
      "Your ultimate GitHub assistant! Seamlessly chat with your GitHub repository, explore commits, pull requests, issues, and more—all in one intuitive platform.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757354524/Screenshot_2025-09-08_233132_lephs7.png",
    liveUrl: "https://chat-git.vercel.app/",
    githubUrl: "https://github.com/AdarshSingh9540/githubChat",
    featured: true,
  },
  {
    title: "IndiBlog",
    description:
      "A blogging platform using React for frontend rendering and Express.js for backend API development. Managed database operations with PostgreSQL integrated via Prisma ORM.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757354536/Screenshot_2025-09-08_233203_pcd2kf.png",
    liveUrl: "https://indiblog.vercel.app",
    githubUrl: "https://github.com/AdarshSingh9540/Medium-client",
    featured: true,
  },
  {
    title: "BrainStrom",
    description:
      "Developed with Next.js and Gemini AI, creating AI-driven quizzes that improved learning with real-time feedback, enhanced user engagement, and reduced error rates.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757355143/Screenshot_2025-09-08_234210_eespx3.png",
    liveUrl: "https://brainstrom-production.up.railway.app/",
    githubUrl: "https://github.com/AdarshSingh9540/BrainStrom",
    featured: true,
  },
  {
    title: "CSI Innowave",
    description:
      "Built the official website for CSI Innowave, Technical Society. Developed using Next.js, Tailwind and backend using Node, Express, and MongoDB.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757354580/Screenshot_2025-09-08_233245_nx9vsh.png",
    liveUrl: "https://www.csiinnowave.com/",
    githubUrl: "https://github.com/AdarshSingh9540/csi-v3",
  },
  {
    title: "MovieFlix",
    description:
      "MovieFlix replicates an OTT platform with Gemini AI for personalized movie recommendations. Built with React, Firebase, and Redux.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757354689/Screenshot_2025-09-08_233347_m1sjg2.png",
    liveUrl: "https://movieflix-six-psi.vercel.app/",
    githubUrl: "https://github.com/AdarshSingh9540/movieflix",
  },
  {
    title: "FoodADDa",
    description:
      "A food ordering app UI that fetches real-time restaurant data from Swiggy's API. Using Redux for cart functionality and optimized for mobile.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757354763/Screenshot_2025-09-08_233546_ncbj1a.png",
    liveUrl: "https://foodadda-phi.vercel.app/",
    githubUrl: "https://github.com/AdarshSingh9540/foodADDa",
  },
  {
    title: "No Tube",
    description:
      "A YouTube  built with React and Node.js, featuring video uploads, comments, and real-time chat.",
    image:
      "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757355058/Screenshot_2025-09-08_233655_uxklwb.png",
    liveUrl: "https://you-tube-jade.vercel.app/",
    githubUrl: "https://github.com/AdarshSingh9540/YouTube",
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
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-[2] border-slate-700"
                    >
                      {project.liveUrl ? (
                        <div>
                          <ExternalLink className="w-4 h-4" />
                          Code
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
                        <div>
                          <Github className="w-4 h-4" />
                          Code
                        </div>
                      ) : (
                        <div>Integrate Locally</div>
                      )}
                    </Button>
                  )}
                  {project.DemoVideo && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.DemoVideo, "_blank")}
                      className="flex-[1] border-slate-800"
                    >
                      Demo Video
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
