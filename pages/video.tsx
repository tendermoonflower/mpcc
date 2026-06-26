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

        {/* TEXT SECTION */}
        <article className="mx-auto max-w-3xl space-y-14 text-blue-950">

          {/* SECTION 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
              Prompts to get you started "brainstorming from the side"
            </h2>

            <p className="text-lg leading-8 text-blue-950/90">
              1. Who am I?
2. Who am I not?
3. What am I thinking?
4. What am I not thinking?
5. The last thing I did something for the first time was...
6. I would never...
7. The street where you live
8. Mashed potatoes
9. I lose track of time when...
10. It surprises me that ... It surprised me when ...
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
             Rules for "brainstorming from the side"
            </h2>

            <p className="text-lg leading-8 text-blue-950/90">
              The purpose of writing practice:
writing is, above all, a practice in reflection. the purpose of writing practice is to follow the breadcrumbs of your thoughts back to your true self. in allowing your thoughts to arise spontaneously, and without censoring them, you will learn things about yourself that you never knew, or things you thought you forgot. the purpose of writing practice is not even to produce a common app essay. we're not even there yet. we're still trying to figure out who we are, and why we are that way. so don't feel like there is any end-goal. the only goal of writing practice is to follow our thoughts wherever they lead. having no destination, i am never lost. 

Rules for writing practice:
1. write by hand. there are a lot of reasons why it is more effective to do this type of writing by hand, and i'm happy to explain next time we meet. for now, just trust that there is something secret and special that arises when we write by hand instead of type on a computer.

2. commit to staying with each prompt for at least 30 minutes, even if you stray off path or write in circles. in fact, if you do stray off path, that's how you know you're doing it right. write for longer than 30 minutes if you're really feeling it. 

3. don't stop moving your pencil. even if it means writing the same word over and over, or writing "i dont know i dont know" until you do know, keep writing. often as soon as we pick up our pencil, thoughts begin to fly by. they might as well be on the page.

4. no deleting, rereading, or revising (yet). when we're freewriting, we're allowing our mind to be free, to reveal itself to us. and when we delete or cross out or revise a word, it's telling our mind "you're not good enough, i don't like you" and then it hides from us, unwilling to reveal its secrets and wisdom.

5. no shaming yourself. 
no "this sucks, this is basic," 
no, "i'm not a good writer,"
no "i'm too boring to have anything to say," 
no "this experience doesn't even matter."

none of these statements are true. you're going to hear the voice in your head repeat these phrases to you. this is "monkey mind." it's just the voice in your head that chatters on, mostly with criticism or, "im bored, lets go eat." sometimes when you hear the voice it can be helpful to envision the voice as a person. what do they look like? why are they so critical? why are they trying to take you away from your work? are they worried you're going to stumble upon something important and how dare you feel important?      and then, you can imagine telling them to keep it down while you keep on writing.

            </p>
          </section>

      
        </article>
      </div>
    </main>
  );
}
