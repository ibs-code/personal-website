import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      date: "August 2023",
      title: "Career Stops: When Coding is Not Enough to be Technical in Your Next Role",
      excerpt:
        "Technical expertise goes beyond coding ability. Exploring the transition from software engineering to product management, and what true technical competency really requires.",
      href: "/blog/career-stops",
    },
    {
      date: "October 2013",
      title: "How I made the CS guys laugh",
      excerpt:
        "A small CS class, a frustrating relationship, and a eureka moment involving virtual functions.",
      href: "/blog/how-i-made-the-cs-guys-laugh",
    },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-stone-100">Blog</h1>
        <p className="text-sm text-stone-400 mt-1">Writing and thoughts.</p>
      </div>

      <hr className="border-stone-800" />

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link key={post.title} href={post.href} className="flex flex-col gap-1.5 group">
            <span className="text-xs text-stone-500">{post.date}</span>
            <h2 className="text-base font-medium text-stone-100 group-hover:text-stone-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
