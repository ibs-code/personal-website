export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Avatar + Name */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-stone-300 flex items-center justify-center shrink-0">
          <svg
            className="w-12 h-12 text-stone-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
            Your Name
          </h1>
          <p className="text-sm text-stone-500 mt-0.5">Designer &amp; Developer</p>
        </div>
      </div>

      <hr className="border-stone-200" />

      {/* Bio */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400">
          About
        </h2>
        <p className="text-stone-700 leading-relaxed">
          Hi there — I&apos;m a designer and developer based somewhere on Earth.
          I care about building things that are simple, purposeful, and
          well-crafted. When I&apos;m not writing code or pushing pixels, you&apos;ll
          find me with a camera, exploring light and composition.
        </p>
        <p className="text-stone-700 leading-relaxed">
          This site is a small corner of the internet where I share what I&apos;m
          working on, what I&apos;m thinking about, and images I&apos;ve made along the
          way. Feel free to look around.
        </p>
      </section>

      {/* Quick links */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400">
          Explore
        </h2>
        <ul className="flex flex-col gap-2">
          {[
            { href: "/blog", label: "Blog", desc: "Writing and thoughts" },
            { href: "/photography", label: "Photography", desc: "Images from the road" },
            { href: "/projects", label: "Projects", desc: "Things I've built" },
          ].map(({ href, label, desc }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-stone-200 hover:border-stone-300 hover:bg-stone-100 transition-colors group"
              >
                <span className="text-sm font-medium text-stone-800">{label}</span>
                <span className="text-xs text-stone-400 group-hover:text-stone-500 transition-colors">
                  {desc}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
