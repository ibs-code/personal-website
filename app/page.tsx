import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Avatar + Name */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
          <Image
            src="/4562E2DD-1440-4525-9C2E-D95C45610F3C_1_105_c.jpeg"
            alt="Ibrahim Urooj Saeed"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
            Ibrahim Urooj Saeed
          </h1>
          <p className="text-sm text-stone-500 mt-0.5">product lead, photographer and washed up software engineer</p>
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
