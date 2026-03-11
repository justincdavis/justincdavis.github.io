/* =============================================================
   BLOG PAGE — "Warm Slate" design system
   Blog post list with title, date, tags, and first-N-words
   preview. Clicking opens a full article view. Dark-mode compatible.
   ============================================================= */

import { useState } from "react";
import { blogPosts, type BlogPost } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function BlogPostFull({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container max-w-3xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80 transition-opacity duration-150 mb-8"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Blog
        </button>

        <article>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="pill pill-indigo">{tag}</span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
            <span className="font-mono-custom text-sm text-muted-foreground">{post.date}</span>
            <span className="text-border">·</span>
            <span className="font-mono-custom text-sm text-muted-foreground">{estimateReadTime(post.content)} min read</span>
          </div>

          <div className="prose-academic space-y-5">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h2 key={i} className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
                    {para.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-foreground/75 leading-relaxed">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j} className="font-semibold text-foreground">{part.replace(/\*\*/g, "")}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}

function BlogPostPreview({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  const readTime = estimateReadTime(post.content);

  return (
    <article
      className="fade-up group cursor-pointer py-8 border-b border-border last:border-b-0 hover:bg-card -mx-4 px-4 rounded-lg transition-colors duration-200"
      onClick={onClick}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="font-mono-custom text-xs text-muted-foreground">{post.date}</span>
        <span className="text-border">·</span>
        <span className="font-mono-custom text-xs text-muted-foreground">{readTime} min read</span>
        <span className="text-border">·</span>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="pill pill-indigo">{tag}</span>
          ))}
        </div>
      </div>

      <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 leading-snug">
        {post.title}
      </h2>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 max-w-2xl">
        {post.preview}
      </p>

      <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all duration-200">
        Read article
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      </div>
    </article>
  );
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const sectionRef = useScrollAnimation();

  if (selectedPost) {
    return <BlogPostFull post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container" ref={sectionRef}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="pill pill-gold">Writing</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">Blog</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Technical articles, research notes, and explorations in machine learning,
            edge computing, and software engineering.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="max-w-3xl">
            {blogPosts.map((post) => (
              <BlogPostPreview key={post.id} post={post} onClick={() => setSelectedPost(post)} />
            ))}
          </div>
        ) : (
          <div className="max-w-lg py-16 text-center">
            <div className="text-4xl mb-4">✍️</div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">Articles coming soon</h2>
            <p className="text-sm text-muted-foreground">Check back soon for technical articles and research notes.</p>
          </div>
        )}
      </div>
    </div>
  );
}
