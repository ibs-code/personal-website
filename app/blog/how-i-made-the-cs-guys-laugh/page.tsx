import Link from "next/link";

export default function HowIMadeTheCsGuysLaugh() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <Link
          href="/blog"
          className="text-xs text-stone-500 hover:text-stone-300 transition-colors"
        >
          ← Blog
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-stone-500">October 2013</span>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-100 leading-snug">
          How I made the CS guys laugh
        </h1>
        <p className="text-xs text-stone-500 mt-1">
          Originally published on{" "}
          <a
            href="https://medium.com/@ibs__/how-i-made-the-cs-guys-laugh-e1cb6b7e7262"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-stone-300 transition-colors"
          >
            Medium
          </a>
        </p>
      </div>

      <hr className="border-stone-800" />

      <div className="flex flex-col gap-5 text-stone-300 leading-relaxed text-[15px]">
        <p>
          I go to a small liberal arts college where the CS department is particularly small. The
          classroom in which this story took place had five students, so by the end of the semester
          we got to know each other well and jokes are often shared.
        </p>

        <p>
          Before I start, in order to get it you need to know about three kinds of functions,
          (usually found in an Object oriented environment).{" "}
          <em>Virtual functions</em>, <em>purely virtual functions</em> and finally regular{" "}
          <em>functions.</em>
        </p>

        <p>Bear with me, I&apos;m going to do my best to keep this simple.</p>

        <p>Here&apos;s what you need to know about them:</p>

        <div className="flex flex-col gap-3 pl-4 border-l border-stone-700">
          <p>
            <strong className="text-stone-100">Virtual Functions:</strong> Here&apos;s how you do
            an operation, but if you can do better, do it.
          </p>
          <p>
            <strong className="text-stone-100">Purely Virtual Functions:</strong> You have to do
            better, so write the operation yourself.
          </p>
          <p>
            <strong className="text-stone-100">Functions:</strong> Here&apos;s how you do an
            operation, and you better do it like this.
          </p>
        </div>

        <p>
          I had a lady friend at the time who was making me live my life the way she would live it.
          Let&apos;s say that whatever <em>operations</em> that existed in my life, she would like
          to make sure I executed them her way.
        </p>

        <p>
          But that&apos;s unfair, I mean, it&apos;s fine if you want to do somethings your way, and
          you have an opinion, but I should get to do things my way. For example, incessantly
          calling me out for something as small as putting sugar in my coffee. It&apos;s okay if you
          don&apos;t, but let me put sugar in my coffee!
        </p>

        <p>
          So I walk into class to join my peers waiting on our professor. I sat down at my usual
          spot and took a sip, frustrated that my coffee wasn&apos;t sweet enough. And then it hit
          me:
        </p>

        <p className="text-stone-100 font-medium italic">
          SHE HAS NO VIRTUAL FUNCTIONS. THAT&apos;S HER PROBLEM!
        </p>

        <p>
          I blurted out those exact words and my classmates looked at me, pretty confused. I then
          went on and explained how the girl in my life was taking over and I was doing things her
          way and not my way. If her functions were <strong className="text-stone-100">virtual</strong>,
          I would have the option of doing things my own way.
        </p>
      </div>
    </div>
  );
}
