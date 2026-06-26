import Head from "next/head";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-20 text-blue-950">
      <Head>
        <title>tips for students</title>
      </Head>

      <div className="mx-auto max-w-4xl">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-blue-950 mb-10">
          tips for students
        </h1>

        {/* VIDEO */}
        <div className="aspect-video w-full mb-16">
          <iframe
            className="w-full h-full rounded-2xl shadow-sm"
            src="https://drive.google.com/file/d/1G_TxBAZadSxMNNGkjo-XT_4IYHJx9w2F/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* SECTION 1 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-rose-600">
            prompts to start brainstorming from the side
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            On my first day of 9th grade my English teacher gave me these three writing prompts and I&apos;m not kidding you when I say I return to them at least once a year, sometimes once a month. they are:
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
            <li>I feel invisible when/because...</li>
            <li>Something my friends don&apos;t even know about me is...</li>
            <li>Write about a first time, the first time you saw someone, the first time you did something...</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-rose-600">
            rules for brainstorming from the side
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            The purpose of brainstorming from the side: writing is, above all, a practice in reflection. the purpose of brainstorming from the side is to follow the breadcrumbs of your thoughts back to your true self. in allowing your thoughts to arise spontaneously, and without censoring them, you will learn things about yourself that you never knew, or things you thought you forgot. the purpose of brainstorming from the side is not even to produce a common app essay. we&apos;re not even there yet. we&apos;re still trying to figure out who we are, and why we are that way. so don&apos;t feel like there is any end-goal. the only goal of brainstorming from the side is to follow our thoughts wherever they lead. &quot;having no destination, i am never lost.&quot;
          </p>

          <p className="mb-3 font-semibold text-blue-950">
            Rules for writing practice:
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-gray-800 leading-relaxed">
            <li>
              write by hand. there are a lot of reasons why it is more effective to do this type of writing by hand, and i&apos;m happy to explain next time we meet. for now, just trust that there is something secret and special that arises when we write by hand instead of type on a computer.
            </li>

            <li>
              commit to staying with each prompt for at least 10 minutes, even if you stray off path or write in circles. in fact, if you do stray off path, that&apos;s how you know you&apos;re doing it right.
            </li>

            <li>
              don&apos;t stop moving your pencil. even if it means writing the same word over and over, or writing &quot;i dont know i dont know&quot; until you do know, keep writing.
            </li>

            <li>
              no deleting, rereading, or revising (yet). freewriting is about letting the mind reveal itself without correction or censorship.
            </li>

            <li>
              no shaming yourself. none of these statements are true: &quot;this sucks,&quot; &quot;i&apos;m not a good writer,&quot; &quot;i&apos;m boring,&quot; &quot;this doesn&apos;t matter.&quot; this is monkey mind. imagine it as a voice you can ask to sit down while you continue.
            </li>

            <li>
              put the writing away and don&apos;t read it again until at least a week has gone by.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
