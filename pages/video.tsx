import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function VideoPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-amber-50 pt-24 scroll-smooth text-blue-950">
      <Head>
        <title>tips for students</title>
      </Head>

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 bg-amber-50 border-b border-amber-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">

          {/* LOGO */}
          <div className="flex flex-1">
            <a href="/" className="flex items-center gap-2">
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt="logo"
                width={512}
                height={512}
              />
            </a>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex lg:gap-x-10">
            <a href="#video" className="text-sm font-semibold text-rose-600 hover:text-blue-950 transition">
              video
            </a>
            <a href="#prompts" className="text-sm font-semibold text-rose-600 hover:text-blue-950 transition">
              prompts
            </a>
            <a href="#rules" className="text-sm font-semibold text-rose-600 hover:text-blue-950 transition">
              rules
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-blue-950" />
            <span className="w-6 h-0.5 bg-blue-950" />
            <span className="w-6 h-0.5 bg-blue-950" />
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden px-6 pb-4 flex flex-col gap-4 bg-amber-50 border-t border-amber-100">
            <a onClick={() => setMenuOpen(false)} href="#video" className="text-rose-600 font-semibold">
              video
            </a>
            <a onClick={() => setMenuOpen(false)} href="#prompts" className="text-rose-600 font-semibold">
              prompts
            </a>
            <a onClick={() => setMenuOpen(false)} href="#rules" className="text-rose-600 font-semibold">
              rules
            </a>
          </div>
        )}
      </header>

            <div className="mx-auto max-w-4xl px-6">

        {/* PAGE TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-8 leading-tight">
          tips for students
        </h1>

        {/* VIDEO */}
        <section id="video" className="mb-14 scroll-mt-28">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl sm:rounded-2xl shadow-sm"
              src="https://drive.google.com/file/d/1G_TxBAZadSxMNNGkjo-XT_4IYHJx9w2F/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Watch the video above, then scroll for prompts and writing rules.
          </p>
        </section>

                      {/* PROMPTS */}
        <section id="prompts" className="mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-rose-600 leading-snug">
            prompts to start brainstorming from the side
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg">
            On my first day of 9th grade, my English teacher gave me these three
            writing prompts, and I am not kidding when I say I return to them at
            least once a year, sometimes once a month. They are:
          </p>

          <ul className="list-disc pl-6 mb-5 space-y-1 text-gray-800 leading-relaxed">
            <li>Who are you?</li>
            <li>What are you?</li>
            <li>Why are you?</li>
          </ul>

          <p className="mb-4 text-gray-700 leading-relaxed">
            He gave us 10 minutes to write on each.
          </p>

          <p className="mb-2 text-gray-700 leading-relaxed">
            Some other prompts that have been really rich for me are:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 leading-relaxed">
            <li>What am I thinking of?</li>
            <li>What am I not thinking of?</li>
            <li>I feel invisible when or because...</li>
            <li>Something my friends do not even know about me is...</li>
            <li>
              Write about a first time, the first time you saw someone, the
              first time you did something...
            </li>
          </ul>
        </section>

                      {/* RULES */}
        <section id="rules" className="mb-20 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-rose-600 leading-snug">
            rules for brainstorming from the side
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            The purpose of brainstorming from the side: writing is, above all,
            a practice in reflection. The purpose of brainstorming from the side
            is to follow the breadcrumbs of your thoughts back to your true
            self. In allowing your thoughts to arise spontaneously, and without
            censoring them, you will learn things about yourself that you never
            knew, or things you thought you forgot. The purpose of brainstorming
            from the side is not even to produce a Common App essay. We are not
            even there yet. We are still trying to figure out who we are, and
            why we are that way. So do not feel like there is any end goal. The
            only goal of brainstorming from the side is to follow our thoughts
            wherever they lead. “Having no destination, I am never lost.”
          </p>

          <p className="mb-3 font-semibold text-blue-950">
            Rules for writing practice:
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-gray-800 leading-relaxed text-base sm:text-lg">
            <li>
              Write by hand. There are a lot of reasons why it is more effective
              to do this type of writing by hand, and I am happy to explain next
              time we meet. For now, just trust that there is something secret
              and special that arises when we write by hand instead of typing on
              a computer.
            </li>

            <li>
              Commit to staying with each prompt for at least 10 minutes, even
              if you stray off path or write in circles. In fact, if you do
              stray off path, that is how you know you are doing it right. Write
              for longer than 10 minutes if you are really feeling it.
            </li>

            <li>
              Do not stop moving your pencil. Even if it means writing the same
              word over and over, or writing “I don't know, I don't know” until
              you do know, keep writing. Often, as soon as we pick up our
              pencil, thoughts begin to fly by. They might as well be on the
              page.
            </li>

            <li>
              No deleting, rereading, or revising (yet). When we are
              freewriting, we are allowing our minds to be free and reveal
              themselves to us. When we delete, cross out, or revise a word, we
              tell our minds, "You're not good enough," and they become less
              willing to reveal their secrets.
            </li>

            <li>
              No shaming yourself. No “This sucks.” No “I'm not a good writer.”
              No “I'm too boring to have anything to say.” No “This experience
              doesn't even matter.” None of these statements are true. This is
              "monkey mind," the voice that chatters on, mostly with criticism
              or distraction. Sometimes it helps to imagine that voice as a
              person. What do they look like? Why are they trying to pull you
              away from your work? Then imagine telling them to keep it down
              while you continue writing.
            </li>

            <li>
              Put the writing away and do not read it again until at least a
              week has gone by.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
