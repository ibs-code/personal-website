import Link from "next/link";

export default function CareerStops() {
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
        <span className="text-xs text-stone-500">August 2023</span>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-100 leading-snug">
          Career Stops: When Coding is Not Enough to Be Technical in Your Next Role
        </h1>
        <p className="text-xs text-stone-500 mt-1">
          Originally published on the{" "}
          <a
            href="https://medium.com/next-at-chase/career-stops-when-coding-is-not-enough-to-be-technical-in-your-next-role-812603c9cc75"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-stone-300 transition-colors"
          >
            Next at Chase blog
          </a>
        </p>
      </div>

      <hr className="border-stone-800" />

      <div className="flex flex-col gap-5 text-stone-300 leading-relaxed text-[15px]">
        <p>
          I recently overheard an interesting conversation between two friends at a Manhattan coffee
          shop. One of them said, &ldquo;I have a product interview tomorrow but I&apos;m worried
          I&apos;m not technical enough for the job.&rdquo; After his friend inquired how he was
          going to solve that, I lowered the volume on my Discover Weekly playlist to make sure I
          heard his reply. &ldquo;I&apos;m going to take a coding class this weekend, learn Java,
          and hopefully that&apos;ll help with the technical part!&rdquo;
        </p>

        <p>
          Here&apos;s a piece of advice that shouldn&apos;t be a secret: You do not need to know
          how to code to be technical. Learning how to code is an extraordinary endeavor and
          certainly one of the first (and hardest) steps towards becoming a technical professional,
          but to be a technical product manager requires a deep understanding of underlying concepts
          that extend far beyond coding. In fact, some of the most technical people that I&apos;ve
          come across have never compiled source code — they are just highly curious individuals who
          take the time to have a deep understanding of how things work. Here&apos;s the story of
          how I realized this during my transition from software engineering to product.
        </p>

        <p>
          In college, I started out as an Econ major. But, after an intro to Computer Science
          course, I fell in love with coding and all the problem solving that came with it. I ended
          up majoring in computer science at Ohio Wesleyan which led to my first job in the Software
          Engineering Program here at Chase. I was placed on a mobile development team, writing code
          for the Chase Mobile® app.
        </p>

        <p>
          After a couple of years on the job and a lot of learning, I felt that moving into product
          was the right next step for my broader career goals. I was excited about the
          responsibilities that came with managing a product as well as leaning into my
          entrepreneurial spirit a little more. There was an opportunity in a different product area
          with a different technical stack, and I was ready for the adventure.
        </p>

        <p>
          Since I was pushing code, working on API routes and taking part in technical design
          discussions, I felt that I had the &lsquo;being technical&rsquo; part of a product manager
          covered. After a few weeks in the product role of this new line of business, I was
          humbled. I did not feel technical at all! How could I not be technical after all these
          years of software engineering?
        </p>

        <p>
          There were definitely advantages in coming from Software engineering. I had a strong
          understanding of the Software Development life cycle which helped in understanding the
          day-to-day of engineering and in turn made me a more empathetic partner. I was also good
          at helping the design team understand where we could potentially run into blockers. But, I
          certainly didn&apos;t get to skip the initial learning pains that all new team members go
          through.
        </p>

        <p>
          This is where I realized I had the wrong definition of &lsquo;being technical.&rsquo;
          Being technical is knowing the core concepts and understanding how technical systems
          interact with each other in the context of your individual product. It is also the ability
          to make informed decisions related to your product because you understand how the thing
          works.
        </p>

        <p>
          There is no hack to &lsquo;getting technical&rsquo; overnight. I had to spend a lot of
          time with architects and developers white boarding to really internalize the nuances of our
          technical environment. I made a lot of diagrams to help the team understand our tech stack
          so that when there was an issue, we could easily trace where it was coming from. I had to
          seek out colleagues who knew how our technical stack worked, and after multiple
          conversations, the picture began to get clear. I was also much more comfortable with
          unknowns, appreciating the wealth of knowledge my engineering counterparts brought to
          product discussions.
        </p>

        <p>
          Once I had a strong sense of all the systems we interacted with and their respective
          technical trade-offs, I could apply my subject matter knowledge to drive the prioritization
          of our backlog and make informed decisions. I was a far more effective product manager. I
          also — finally — started to feel technical again.
        </p>

        <p>
          I was left with this strong opinion — if you want to be technical, learning how to code is
          not necessarily the tool that will get you there. It&apos;s a great place to start, but
          definitely consider technical design and additional information available out there, such as
          engineering blogs.
        </p>

        <p>
          Writing code is one of the best things I ever took on as I believe it to be an invaluable
          skill, but as a PM your demands will not be writing for-loops inside of object-oriented
          classes.
        </p>
      </div>

      <hr className="border-stone-800" />

      <p className="text-xs text-stone-600 leading-relaxed">
        <em>
          The opinions expressed in this article may differ from other employees and departments of
          JPMorgan Chase & Co. Opinions and strategies described may not be appropriate for
          everyone, and are not intended as specific advice/recommendation for any individual.
        </em>
      </p>
    </div>
  );
}
