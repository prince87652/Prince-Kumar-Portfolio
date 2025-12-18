import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import fitnessbuddy_bg from "../assets/fitnessbuddy_bg.png";
import yatriseva from '../assets/Yatriseva.png'

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  hasVideo?: boolean;
}

const projects: Project[] = [
  {
    title: "Fitness Buddy",
    description:
      "A mobile-first fitness tracking application that helps users log workouts, monitor progress with charts, and follow structured fitness plans through a clean and responsive interface.",
    image: fitnessbuddy_bg,
    techStack: ["React", "Tailwind", "Firebase", "Redux Toolkit"],
    githubUrl:
      "https://github.com/prince87652/FitnessBuddy/tree/main/FitnessBuddy",
    liveUrl: "https://fitnessbuddy12.netlify.app/",
  },
  {
    title: "YatriSeva",
    description:
      "A mobile-first fitness tracking application that helps users log workouts, monitor progress with charts, and follow structured fitness plans through a clean and responsive interface.",
    image: yatriseva,
    techStack: ["React", "Tailwind", "Firebase", "Redux Toolkit"],
    githubUrl:'https://github.com/prince87652/Yatriseva',
    liveUrl: "https://yatri-seva.netlify.app/",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group glass-card overflow-hidden glow-border"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="flex-1 gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button
            variant="glow"
            size="sm"
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="flex-1 gap-2"
          >
            {project.hasVideo ? (
              <Play className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
            {project.hasVideo ? "Video" : "Live Demo"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="floating-orb w-72 h-72 bg-accent -right-36 top-1/3 animate-pulse-glow" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of projects that showcase my skills in building modern
            web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
