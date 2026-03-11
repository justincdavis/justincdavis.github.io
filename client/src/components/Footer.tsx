/* =============================================================
   FOOTER — "Warm Slate" design system. Dark-mode compatible.
   ============================================================= */

import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-semibold text-card-foreground text-base">
              Justin Davis
            </p>
            <p className="text-sm text-muted-foreground mt-0.5 font-mono-custom">
              PhD Student · HPSS Lab · Colorado School of Mines
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Email
            </a>
            <a href={profile.links.googleScholar} target="_blank" rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Google Scholar
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              LinkedIn
            </a>
            <a href={profile.links.orcid} target="_blank" rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              ORCID
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono-custom">
            © {new Date().getFullYear()} Justin Davis · Golden, CO
          </p>
        </div>
      </div>
    </footer>
  );
}
