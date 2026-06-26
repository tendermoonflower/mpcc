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

          {/* SECTION 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
              rules for brainstorming from the side
            </h2>

            <p className="text-lg leading-8 text-blue-950/90">
              Don't be afraid to be yourself.
              have a good time.
          
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
              Student Reflection
            </h2>

            <blockquote className="border-l-4 border-rose-600 pl-6 text-blue-950/80 italic leading-8">
              Writing becomes clearer when it stops trying to sound impressive
              and starts trying to sound honest.
            </blockquote>
          </section>

        </article>
      </div>
    </main>
  );
}
