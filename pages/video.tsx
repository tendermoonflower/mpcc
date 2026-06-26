import Head from "next/head";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-20">
      <Head>
        <title>tips for students</title>
      </Head>

      <div className="mx-auto max-w-4xl">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-blue-950 mb-10">
          tips for students
        </h1>

        {/* VIDEO */}
        <div className="aspect-video w-full mb-12">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://drive.google.com/file/d/1G_TxBAZadSxMNNGkjo-XT_4IYHJx9w2F/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* SECTION 1 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            prompts to start brainstorming from the side
          </h2>

          <p className="mb-4">
            On my first day of 9th grade my English teacher gave me these three writing prompts and I&apos;m not kidding you when I say I return to them at least once a year, sometimes once a month. they are:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Who are you?</li>
            <li>What are you?</li>
            <li>Why are you?</li>
          </ul>

          <p className="mb-4">He gave us 10 minutes to write on each.</p>

          <p className="mb-2">
            Some other prompts that have been really rich for me are:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>What am I thinking of?</li>
            <li>What am I not thinking of?</li>
            <li>I feel invisible when/because...</li>
            <li>Something my friends don&apos;t even know about me is...</li>
            <li>
              Write about a first time, the first time you saw someone, the first time you did something...
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            rules for brainstorming from the side
          </h2>

          <p className="mb-4">
            The purpose of brainstorming from the side: writing is, above all, a practice in reflection. the purpose of brainstorming from the side is to follow the breadcrumbs of your thoughts back to your true self. in allowing your thoughts to arise spontaneously, and without censoring them, you will learn things about yourself that you never knew, or things you thought you forgot. the purpose of brainstorming from the side is not even to produce a common app essay. we&apos;re not even there yet. we&apos;re still trying to figure out who we are, and why we are that way. so don&apos;t feel like there is any end-goal. the only goal of brainstorming from the side is to follow our thoughts wherever they lead. &quot;having no destination, i am never lost.&quot;
          </p>

          <p className="mb-2">Rules for writing practice:</p>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              write by hand. there are a lot of reasons why it is more effective to do this type of writing by hand, and i&apos;m happy to explain next time we meet. for now, just trust that there is something secret and special that arises when we write by hand instead of type on a computer.
            </li>

            <li>
              commit to staying with each prompt for at least 10 minutes, even if you stray off path or write in circles. in fact, if you do stray off path, that&apos;s how you know you&apos;re doing it right. write for longer than 10 minutes if you&apos;re really feeling it.
            </li>

            <li>
              don&apos;t stop moving your pencil. even if it means writing the same word over and over, or writing &quot;i dont know i dont know&quot; until you do know, keep writing. often as soon as we pick up our pencil, thoughts begin to fly by. they might as well be on the page.
            </li>

            <li>
              no deleting, rereading, or revising (yet). when we&apos;re freewriting, we&apos;re allowing our mind to be free, to reveal itself to us. and when we delete or cross out or revise a word, it&apos;s telling our mind &quot;you&apos;re not good enough, i don&apos;t like you&quot; and then it hides from us, unwilling to reveal its secrets and wisdom.
            </li>

            <li>
              no shaming yourself. no &quot;this sucks, this is basic,&quot; no &quot;i&apos;m not a good writer,&quot; no &quot;i&apos;m too boring to have anything to say,&quot; no &quot;this experience doesn&apos;t even matter.&quot; none of these statements are true. you&apos;re going to hear the voice in your head repeat these phrases to you. this is &quot;monkey mind.&quot; it&apos;s just the voice in your head that chatters on, mostly with criticism or &quot;i&apos;m bored, lets go eat.&quot; sometimes when you hear the voice it can be helpful to envision the voice as a person. what do they look like? why are they so critical? why are they trying to take you away from your work? are they worried you&apos;re going to stumble upon something important and how dare you feel important? and then, you can imagine telling them to keep it down while you keep on writing.
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
