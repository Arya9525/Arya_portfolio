import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FITNESS-TRACER MASTER",
    description: "Built a full-stack fitness tracking app with workout logging, calorie tracking, and progress monitoring using the MERN stack.",
    image: "/projects/project1.png",
    tags: ["React", "TalwindCSS", "JavaScript"],
    // demoUrl: "https://cinemacity-self.vercel.app/",
    githubUrl: "https://github.com/Arya9525/Fitness-Tracker.git",
  },
  {
    id: 2,
    title: "MANTRA JAP",
    description: "Created a mantra-chanting app with a real-time counter, timer, and saved progress",
    image: "/projects/project2.png",
    tags: ["React", "TalwindCSS", "JavaScript"],
    demoUrl: "https://mantrajap.netlify.app/",
    githubUrl: "https://github.com/Arya9525/MantraJap.git",
  },
  {
    id: 3,
    title: "AI IMAGE GENERATOR",
    description: "Developed an app that creates AI images from text prompts using OpenAI’s DALL·E API. Added features like image preview, search, download, and sharing posts publicly.",
    image: "/projects/project3.png",
    tags: ["React", "TalwindCSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Arya9525/GemAi.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Arya9525"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
