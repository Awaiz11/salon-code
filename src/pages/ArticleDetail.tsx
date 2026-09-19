import { useEffect } from "react";
import { ARTICLES } from "../data";

export default function ArticleDetail({ slug }: { slug: string }) {
  const article = ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!article) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center bg-cream px-5">
        <h2 className="font-serif text-3xl font-bold text-ink">Article Not Found</h2>
        <a href="#/journal" className="btn-gold mt-6">Return to Journal</a>
      </div>
    );
  }

  return (
    <article className="bg-cream pb-20 pt-10 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <a
          href="#/journal"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-golddark transition hover:text-gold"
        >
          <span>&larr;</span> Back to Journal
        </a>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <img
              src={article.img}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-golddark">
                {article.tag}
              </span>
              <span className="text-[12px] text-body">{article.date}</span>
            </div>
            
            <h1 className="font-serif mt-6 text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            
            <p className="mt-4 text-[14px] font-medium text-golddark">
              By {article.author}
            </p>
            
            <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-body">
              {article.content?.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
