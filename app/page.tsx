import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
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
          <h1 className="text-2xl font-semibold tracking-tight text-stone-100">
            Ibrahim Urooj Saeed
          </h1>
          <p className="text-sm text-stone-400 mt-0.5">product lead, photographer and Real Madrid fan</p>
        </div>
      </div>

      <hr className="border-stone-800" />

      {/* Bio */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-500">
          About
        </h2>
        <p className="text-stone-300 leading-relaxed">
          I&apos;m Ibs, a product lead in fintech infrastructure. I&apos;m currently
          VP of Product at Cross River Bank, where I work on the systems that make
          modern banking move — core infrastructure, online banking channels, and
          deposits products that other companies build on top of. I care deeply about
          how complex financial systems get designed, explained, and experienced by
          the people who use them.
        </p>
        <p className="text-stone-300 leading-relaxed">
          Outside of work, I&apos;m a New Yorker through and through — and somehow
          also someone who picked up skiing in their late 20s and is stubbornly
          working toward becoming an advanced skier, despite the fact that most
          people at that level learned before they could tie their shoes. I&apos;m
          also an avid photographer, always looking for the shot that earns a second
          look. Oh, and I&apos;m weirdly obsessed with the state of Maine.
        </p>
      </section>

      {/* Quick links */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-500">
          Explore
        </h2>
        <ul className="flex flex-col gap-2">
          {[
            { href: "/blog", label: "Blog", desc: "Writing and thoughts" },
            { href: "/photography", label: "Photography", desc: "Images from the road" },
          ].map(({ href, label, desc }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-stone-800 hover:border-stone-700 hover:bg-stone-900 transition-colors group"
              >
                <span className="text-sm font-medium text-stone-200">{label}</span>
                <span className="text-xs text-stone-500 group-hover:text-stone-400 transition-colors">
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
