/* =============================================================
   TALKS PAGE — "Warm Slate" design system
   Timeline-style talk entries with type badges, venue,
   date, description, and optional slide/paper links.
   Dark-mode compatible via CSS variables.
   ============================================================= */

import { talks, type Talk } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const typeColors: Record<Talk["type"], { pill: string; dot: string }> = {
  "Conference Talk": { pill: "pill-indigo", dot: "bg-primary" },
  "Guest Lecture": { pill: "pill-gold", dot: "bg-[oklch(0.72_0.12_80)]" },
  "Poster": { pill: "pill-slate", dot: "bg-muted-foreground" },
  "Invited Talk": { pill: "pill-indigo", dot: "bg-primary" },
};

function TalkEntry({ talk }: { talk: Talk }) {
  const colors = typeColors[talk.type];

  return (
    <article className="fade-up flex gap-5 group">
      {/* Timeline dot */}
      <div className="flex flex-col items-center pt-1.5 flex-shrink-0">
        <div className={`w-3 h-3 rounded-full ${colors.dot} ring-2 ring-background shadow-sm flex-shrink-0`} />
        <div className="w-px flex-1 bg-border mt-1.5" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`pill ${colors.pill}`}>{talk.type}</span>
          <span className="font-mono-custom text-xs text-muted-foreground">{talk.date}</span>
        </div>

        <h2 className="font-display text-lg font-semibold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors duration-200">
          {talk.title}
        </h2>

        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-muted-foreground flex-shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-sm text-muted-foreground">{talk.venue} · {talk.location}</span>
        </div>

        <p className="text-sm text-foreground/75 leading-relaxed max-w-2xl mb-4">{talk.description}</p>

        {(talk.slidesUrl || talk.paperUrl) && (
          <div className="flex flex-wrap gap-2">
            {talk.slidesUrl && (
              <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity duration-200 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3l5 4-5 4V6zm-6 0h4v8H6V6z"/>
                </svg>
                Slides
              </a>
            )}
            {talk.paperUrl && (
              <a href={talk.paperUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border text-foreground/70 rounded-md hover:border-primary hover:text-primary transition-colors duration-200">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                </svg>
                Paper
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Talks() {
  const sectionRef = useScrollAnimation();

  const talksByYear = talks.reduce<Record<string, Talk[]>>((acc, talk) => {
    const year = talk.date.split(", ").pop() || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(talk);
    return acc;
  }, {});

  const years = Object.keys(talksByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container" ref={sectionRef}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="pill pill-gold">Presentations</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">Talks</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Conference presentations, guest lectures, and invited talks on
            heterogeneous computing, edge AI, and efficient machine learning.
          </p>
        </div>

        <div className="max-w-3xl">
          {years.map((year) => (
            <div key={year} className="mb-6">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">{year}</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="font-mono-custom text-xs text-muted-foreground">
                  {talksByYear[year].length} talk{talksByYear[year].length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="ml-1.5">
                {talksByYear[year].map((talk) => (
                  <TalkEntry key={talk.id} talk={talk} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
