/* =============================================================
   PROJECTS PAGE — "Warm Slate" design system
   Project cards with image, title, description, tags,
   and links to GitHub and documentation. Dark-mode compatible.
   ============================================================= */

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="fade-up bg-card border border-border rounded-xl overflow-hidden card-lift group">
      {/* Image */}
      {project.image && (
        <div className="h-44 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="pill pill-slate">{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {project.title}
          </a>
        </h2>

        {/* Short description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>

        {/* Expandable long description */}
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-64 mb-3" : "max-h-0"}`}>
          <p className="text-sm text-foreground/75 leading-relaxed bg-muted rounded-lg p-3 border border-border">
            {project.longDescription}
          </p>
        </div>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-xs font-medium text-primary hover:opacity-80 transition-opacity duration-150 flex items-center gap-1 mb-4"
        >
          {expanded ? "Show less" : "Read more"}
          <svg viewBox="0 0 24 24" className={`w-3 h-3 fill-current transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </button>

        {/* Action links */}
        <div className="flex gap-2 pt-3 border-t border-border">
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-foreground text-background rounded-md hover:opacity-80 transition-opacity duration-200">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          {project.docsUrl && (
            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border text-foreground/70 rounded-md hover:border-primary hover:text-primary transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              Docs
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container" ref={sectionRef}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="pill pill-slate">Open Source</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">Projects</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Open-source Python libraries and tools developed during my research, focused on
            high-performance inference, edge computing, and computer vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
