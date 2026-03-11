/* =============================================================
   HOME PAGE — "Warm Slate" design system
   Landing page: hero with profile photo, bio, link tree,
   research interests, and quick navigation cards.
   Dark-mode compatible via CSS variables.
   ============================================================= */

import { Link } from "wouter";
import { profile } from "@/lib/data";
import { useTheme } from "@/contexts/ThemeContext";
import ParticleCanvas from "@/components/ParticleCanvas";

const socialLinks = [
  {
    label: "Google Scholar",
    href: profile.links.googleScholar,
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: profile.links.github,
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "ORCID",
    href: profile.links.orcid,
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
      </svg>
    ),
  },
  {
    label: "Kaggle",
    href: profile.links.kaggle,
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Publications", href: "/publications", desc: "Peer-reviewed research papers and conference proceedings", icon: "📄" },
  { label: "Projects", href: "/projects", desc: "Open-source libraries and software tools", icon: "⚙️" },
  { label: "Blog", href: "/blog", desc: "Technical articles and research notes", icon: "✍️" },
  { label: "Talks", href: "/talks", desc: "Conference presentations and guest lectures", icon: "🎤" },
];

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const heroBg = isDark
    ? "oklch(0.13 0.015 240)"
    : "oklch(0.985 0.008 80)";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: heroBg }}>
        {/* Dynamic particle network background */}
        <ParticleCanvas />
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0" style={{ animation: "fadeInUp 0.6s ease 0.1s both" }}>
              <div className="relative">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden ring-2 ring-border shadow-lg">
                  <img
                    src={profile.photo}
                    alt="Justin Davis"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground text-[10px] font-bold font-mono-custom">PhD</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 min-w-0">
              <div style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="pill pill-indigo">PhD Student</span>
                  <span className="pill pill-gold">HPSS Lab</span>
                  <span className="pill pill-slate">Colorado School of Mines</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-1">
                  Justin Davis
                </h1>
                <p className="font-mono-custom text-sm text-muted-foreground mb-5">
                  Golden, CO · jcdavis@mines.edu
                </p>
              </div>

              <div
                className="space-y-3 text-[0.95rem] leading-relaxed max-w-2xl text-foreground/80"
                style={{ animation: "fadeInUp 0.6s ease 0.3s both" }}
              >
                {profile.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Action links */}
              <div className="flex flex-wrap gap-3 mt-6" style={{ animation: "fadeInUp 0.6s ease 0.4s both" }}>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity duration-200 shadow-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                  </svg>
                  Curriculum Vitae
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card text-card-foreground text-sm font-medium rounded-md hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>

              {/* Social Link Tree */}
              <div className="flex flex-wrap gap-2 mt-5" style={{ animation: "fadeInUp 0.6s ease 0.5s both" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-card border border-border rounded-full hover:text-primary hover:border-primary hover:bg-accent transition-all duration-200 shadow-sm"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-14 bg-card border-t border-border">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {profile.researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-3.5 py-1.5 text-sm font-medium text-primary bg-accent border border-primary/20 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-14 bg-background">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
            Explore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="group p-5 bg-card border border-border rounded-xl card-lift cursor-pointer h-full">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-display font-semibold text-card-foreground text-base mb-1.5 group-hover:text-primary transition-colors duration-200">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-3 text-xs font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View all
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
