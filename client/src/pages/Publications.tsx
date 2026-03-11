/* =============================================================
   PUBLICATIONS PAGE — "Warm Slate" design system
   Publication entries with left-border accent, figure,
   abstract, action links, and copy-to-clipboard citation modal.
   Dark-mode compatible via CSS variables.
   ============================================================= */

import { useState } from "react";
import { publications, type Publication } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ── Citation Modal ─────────────────────────────────────────── */
function CitationModal({ bibtex, onClose }: { bibtex: string; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = bibtex;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "oklch(0 0 0 / 0.5)" }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-primary">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <span className="font-display font-semibold text-foreground text-sm">BibTeX Citation</span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors duration-150 p-1 rounded-md hover:bg-muted"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        {/* BibTeX text */}
        <div className="p-5">
          <pre className="text-xs font-mono-custom text-foreground/85 bg-muted rounded-lg p-4 border border-border overflow-x-auto whitespace-pre leading-relaxed select-all">
            {bibtex}
          </pre>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-5 pb-5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-muted transition-colors duration-150"
          >
            Close
          </button>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all duration-150"
          >
            {copied ? (
              <>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                Copy BibTeX
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Publication Card ────────────────────────────────────────── */
function PublicationCard({ pub }: { pub: Publication }) {
  const [expanded, setExpanded] = useState(false);
  const [showCitation, setShowCitation] = useState(false);

  const categoryLabel: Record<Publication["category"], string> = {
    conference: "Conference Paper",
    journal: "Journal Article",
    workshop: "Workshop Paper",
    preprint: "Preprint",
  };

  return (
    <>
      {showCitation && pub.bibtex && (
        <CitationModal bibtex={pub.bibtex} onClose={() => setShowCitation(false)} />
      )}

      <article className="fade-up entry-accent group">
        {/* Header */}
        <div className="flex flex-wrap items-start gap-2 mb-2">
          <span className="pill pill-indigo">{categoryLabel[pub.category]}</span>
          <span className="pill pill-gold">{pub.venue}</span>
          <span className="font-mono-custom text-xs text-muted-foreground">{pub.date}</span>
        </div>

        <h2 className="font-display text-xl font-semibold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors duration-200">
          {pub.title}
        </h2>

        <p className="text-sm text-muted-foreground font-medium mb-3">{pub.authors}</p>

        {/* Figure + Abstract layout */}
        <div className="flex flex-col md:flex-row gap-5 mb-4">
          {pub.figure && (
            <div className="md:w-64 flex-shrink-0">
              <div className="rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <img
                  src={pub.figure}
                  alt={pub.figureCaption || pub.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              {pub.figureCaption && (
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed italic">
                  {pub.figureCaption}
                </p>
              )}
            </div>
          )}

          <div className="flex-1">
            <p className="text-sm text-foreground/75 leading-relaxed">{pub.excerpt}</p>

            {/* Expandable abstract */}
            <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-[500px] mt-3" : "max-h-0"}`}>
              <div className="bg-muted rounded-lg p-4 border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono-custom mb-2">
                  Abstract
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">{pub.abstract}</p>
              </div>
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 text-xs font-medium text-primary hover:opacity-80 transition-opacity duration-150 flex items-center gap-1"
            >
              {expanded ? "Hide abstract" : "Read abstract"}
              <svg viewBox="0 0 24 24" className={`w-3 h-3 fill-current transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Action links */}
        <div className="flex flex-wrap gap-2">
          {pub.paperUrl && (
            <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity duration-200 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
              </svg>
              Paper PDF
            </a>
          )}
          {pub.slidesUrl && (
            <a href={pub.slidesUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border text-foreground/70 rounded-md hover:border-primary hover:text-primary transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3l5 4-5 4V6zm-6 0h4v8H6V6z"/>
              </svg>
              Slides
            </a>
          )}
          {pub.codeUrl && (
            <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border text-foreground/70 rounded-md hover:border-primary hover:text-primary transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
              Code
            </a>
          )}
          {pub.docsUrl && (
            <a href={pub.docsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border text-foreground/70 rounded-md hover:border-primary hover:text-primary transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              Docs
            </a>
          )}
          {pub.bibtex && (
            <button
              onClick={() => setShowCitation(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border text-foreground/70 rounded-md hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              Cite
            </button>
          )}
        </div>
      </article>
    </>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function Publications() {
  const sectionRef = useScrollAnimation();
  const conferencePublications = publications.filter((p) => p.category === "conference");
  const journalPublications = publications.filter((p) => p.category === "journal");
  const preprintPublications = publications.filter((p) => p.category === "preprint");

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container" ref={sectionRef}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="pill pill-indigo">Research</span>
            <span className="font-mono-custom text-xs text-muted-foreground">
              {publications.length} paper{publications.length !== 1 ? "s" : ""}
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">Publications</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Peer-reviewed research in efficient machine learning, edge computing, and heterogeneous systems.
            You can also find my articles on{" "}
            <a href="https://scholar.google.com/citations?user=6K9apqAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="link-sweep font-medium">
              Google Scholar
            </a>.
          </p>
        </div>

        {conferencePublications.length > 0 && (
          <section className="mb-14">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              Conference Papers
              <span className="font-mono-custom text-sm font-normal text-muted-foreground">({conferencePublications.length})</span>
            </h2>
            <div className="space-y-10">
              {conferencePublications.map((pub) => <PublicationCard key={pub.id} pub={pub} />)}
            </div>
          </section>
        )}

        {journalPublications.length > 0 && (
          <section className="mb-14">
            <hr className="section-rule" />
            <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              Journal Articles
              <span className="font-mono-custom text-sm font-normal text-muted-foreground">({journalPublications.length})</span>
            </h2>
            <div className="space-y-10">
              {journalPublications.map((pub) => <PublicationCard key={pub.id} pub={pub} />)}
            </div>
          </section>
        )}

        {preprintPublications.length > 0 && (
          <section className="mb-14">
            <hr className="section-rule" />
            <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              Preprints
              <span className="font-mono-custom text-sm font-normal text-muted-foreground">({preprintPublications.length})</span>
            </h2>
            <div className="space-y-10">
              {preprintPublications.map((pub) => <PublicationCard key={pub.id} pub={pub} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
