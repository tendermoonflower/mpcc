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
              src="https://drive.google.com/file/d/1fuOAHYFHMEtetBoG51pOophAmvAAvXT-/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

           <p className="mb-4 text-gray-700 leading-relaxed">
      As many students begin thinking about their college applications, I want to talk about the value of intentional brainstorming.
      The way we approach our brainstorming can result in personal statements that hit all the right beats but still somehow fall flat,
      and personal statements that immediately make contact with an admissions reader. What separates the two is how we understand and practice brainstorming.
    </p>

  <p className="mb-4 text-gray-700 leading-relaxed">
      Most students become paralyzed at the brainstorming stage because they feel pressured by what’s at stake. They only have a couple of essays to
      convey who they are, and whether or not those essays are “good” will determine the rest of their life!!! (or at least the next four years).
      And this makes sense. It’s easy to feel overwhelmed by the expectation that we show up as the most unique, impressive, or traumatized person
      in the room, and so we grasp for recognizable topics, scripts, or lessons. The result is personal statements that feel tired and overdone.
      Counterintuitively, the fastest way to find a compelling essay topic is often to stop looking for one. When students use brainstorming as a
      practice of exploring their experiences, interests, and values without worrying about admissions or appearing impressive, the more poignant
      essay topics tend to reveal themselves naturally.
    </p>

     <p className="mb-4 text-gray-700 leading-relaxed">
      With all of the students that I independently counsel, I begin with the same practice: a series of 10 minute written reflections on prompts
      ranging from “who are you? what are you? why are you?” to “write about your favorite tree” or “your most memorable mashed potatoes.”
      At this stage, we’re not even looking at the Common App or UC prompts, because the goal is not to come up with a topic for an essay, the goal is simply to explore who you are,
      what matters to you, and what captures your attention.
    </p>

    <p className="mb-4 text-gray-700 leading-relaxed">
      Students who stay with the process gradually move beyond rehearsed answers and begin writing in a voice that sounds recognizably their own.
      They recall old memories that, while not “impressive” on the surface, laid the foundation for a lifelong love of ecology. Or they finally let
      themselves admit that maybe they really do prefer art history to economics, and suddenly their “writers block” gives way to a writer’s barrage.
      Consider, for example, one student, whose first brainstorms followed the usual script of hating, then learning to love being Indian in a white community.
      It's a familiar essay, and admissions officers read versions of it every year. As we continued to reflect on her experiences, she recalled that her family’s
      “genetic” anger could be traced to a relationship to Durga Ma, the goddess of creation through destruction, and she was inspired to write about how Durga Ma’s
      story helped her reimagine and utilize her anger in constructive, rather than destructive ways. That is a much more compelling take on what it means to be Indian
      in America, and it came from this low-stakes, meandering process of just writing what comes up.
    </p>

  <p className="mb-4 text-gray-700 leading-relaxed">
      So if there’s one piece of advice that I have as you begin your brainstorms, it’s not to brainstorm for an essay topic.
      Brainstorm first to understand yourself, and then everything else becomes easy.
    </p>
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
            <li>I feel invisible when or because...</li>
            <li>Something my friends do not even know about me is...</li>
            <li>
              Write about a first time, the first time you saw someone, the first time you did something...
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section id="rules" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-rose-600">
            rules for brainstorming from the side
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            The purpose of brainstorming from the side: writing is, above all, a practice in reflection. The purpose of brainstorming from the side is to follow the breadcrumbs of your thoughts back to your true self. In allowing your thoughts to arise spontaneously, and without censoring them, you will learn things about yourself that you never knew, or things you thought you forgot. The purpose of brainstorming from the side is not even to produce a common app essay. we are not even there yet. We are still trying to figure out who we are, and why we are that way. So do not feel like there is any end goal. The only goal of brainstorming from the side is to follow our thoughts wherever they lead. “Having no destination, I am never lost.”
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
