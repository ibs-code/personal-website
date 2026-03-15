export default function Blog() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-stone-900">Blog</h1>
        <p className="text-sm text-stone-500 mt-1">Writing and thoughts.</p>
      </div>

      <hr className="border-stone-200" />

      <div className="flex flex-col gap-6">
        {[
          {
            date: "March 2026",
            title: "On building things slowly",
            excerpt:
              "There's a quiet satisfaction in working without urgency. In this post I explore what it means to build thoughtfully.",
          },
          {
            date: "February 2026",
            title: "Notes on simplicity",
            excerpt:
              "Simplicity is not the absence of complexity — it's the result of resolving it. Some notes from recent projects.",
          },
          {
            date: "January 2026",
            title: "Getting started with Next.js App Router",
            excerpt:
              "A practical walkthrough of the patterns I've found most useful when working with the Next.js App Router.",
          },
        ].map((post) => (
          <article key={post.title} className="flex flex-col gap-1.5 group cursor-pointer">
            <span className="text-xs text-stone-400">{post.date}</span>
            <h2 className="text-base font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
