import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import inces from '../assets/inces.png.jpg';
import bakar from '../assets/bakar.png.jpg';
import baddie from '../assets/baddie.png';
import pantai from '../assets/pantai.png';
import party from '../assets/party.jpg';
import wlee from '../assets/wlee.png.jpg';

import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ✅ TYPE BIAR GA ERROR
type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string[];
  color: string;
  github?: string;
  demo?: string;
  youtube?: string;
  isContent?: boolean;
};

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern...',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: [inces, bakar, baddie],
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online...',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: [bakar, baddie, inces],
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard analytics...',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    image: [baddie, inces, bakar],
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Tool untuk generate konten...',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: [pantai, party, wlee],
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Seri tutorial video editing...',
    tags: ['Premiere Pro', 'After Effects', 'YouTube'],
    image: [party, wlee, pantai],
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips programming...',
    tags: ['Instagram', 'TikTok', 'YouTube Shorts'],
    image: [wlee, pantai, party],
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: '#',
  },
];

// ✅ COMPONENT CARD
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === project.image.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project]); // ✅ FIX dependency

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">

        {/* IMAGE */}
        <div className={`relative aspect-video rounded-xl mb-4 overflow-hidden bg-gradient-to-br ${project.color}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={project.image[current]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {project.isContent && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                Content
              </span>
            )}
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            {project.github && (
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a href={project.github}>
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" className="rounded-full" asChild>
                <a href={project.demo}>
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </Button>
            )}
            {project.youtube && (
              <Button size="sm" className="rounded-full" asChild>
                <a href={project.youtube}>
                  <Play className="h-4 w-4 mr-1" />
                  Watch
                </a>
              </Button>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// ✅ MAIN
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projects & Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}