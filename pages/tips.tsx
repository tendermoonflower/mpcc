import Head from "next/head";
import Link from "next/link";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-20 text-blue-950 scroll-smooth">
      <Head>
        <title>tips for students</title>
      </Head>

      <div className="mx-auto max-w-4xl">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-rose-600 mb-6">
          tips for students
        </h1>

       {/* NAV BAR */}
<nav className="sticky top-0 z-50 bg-amber-50/90 backdrop-blur border-b border-amber-200 py-4 mb-10">
  <div className="flex flex-wrap gap-6 text-sm font-medium">
    
    {/* HOME */}
    <Link href="/" className="text-gray-700 hover:text-rose-600">
      home
    </Link>

    {/* VIDEO */}
    <a href="#video" className="text-gray-700 hover:text-rose-600">
      video
    </a>

    {/* PROMPTS */}
    <a href="#prompts" className="text-gray-700 hover:text-rose-600">
      prompts
    </a>

    {/* RULES */}
    <a href="#rules" className="text-gray-700 hover:text-rose-600">
      rules
    </a>
  </div>
</nav>

        {/* VIDEO */}
        <h2 className="text-2xl font-semibold mb-4 text-rose-600">
            the importance of brainstorming from the side
          </h2>
        <section id="video" className="mb-16">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-2xl shadow-sm"
              src="https://drive.google.com/file/d/1ZFscJEZfnP9LibQWoLUydS91vM0Qp5nY/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </section>
        
        
        {/* SECTION 1 */}
        <section id="prompts" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-rose-600">
            prompts to start brainstorming from the side
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            On my first day of 9th grade, my English teacher gave me these three writing prompts, and I am not kidding when I say I return to them at least once a year, sometimes once a month. they are:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-800">
            <li>Who are you?</li>
            <li>What are you?</li>
            <li>Why are you?</li>
          </ul>

          <p className="mb-4 text-gray-700">
            He gave us 10 minutes to write on each.
          </p>

          <p className="mb-2 text-gray-700">
            Some other prompts that have been really rich for me are:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>What am I thinking of?</li>
            <li>What am I not thinking of?</li>
            <li>The number 7</li>
            <li>The street where you live.</li>
            <li>
             A first time - the first time you saw someone, the first time you did something new...
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section id="rules" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-rose-600">
            rules for brainstorming from the side
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Good writing comes from good thinking. When we brainstorm from the side, we help ourselves to think and reflect without the pressure of needing to perform or impress. In allowing our thoughts to arise spontaneously, and without censoring them, we will learn things about ourselves that we never knew, or things we thought we forgot. This is where the good stuff is. “Having no destination, I am never lost.”
          </p>

          <p className="mb-3 font-semibold text-blue-950">
            Rules for brainstorming from the side:
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-gray-800 leading-relaxed">
            <li>
              Write by hand. There are a lot of reasons why it is more effective to do this type of writing by hand, and I am happy to explain when we meet. For now, just trust that there is something secret and special that arises when we write by hand instead of typing on a computer.
            </li>

            <li>
              Commit to staying with each prompt for at least 10 minutes, even if you stray off path or write in circles. If you stray off path, that is often the point.
            </li>

            <li>
              Do not stop moving your pencil. Even if it means writing the same phrase over and over, keep going until thoughts begin to surface.
            </li>

            <li>
              No deleting, rereading, or revising (yet). Freewriting only works if the mind is allowed to stay unedited.
            </li>

            <li>
              No shaming yourself. This is monkey mind: the voice that critiques, distracts, or minimizes. You can notice it, then continue writing anyway.
            </li>

            <li>
              Put the writing away and do not read it again until at least a week has gone by.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
